// =========================================================================
// SERVIDOR DE AUTENTICAÇÃO E GOVERNANÇA v2.0 — MÚSICAS LITÚRGICAS
// Google Apps Script conectado à Planilha de Usuários da Pastoral
// =========================================================================
// Colunas da Planilha (Linha 1 = Cabeçalho):
//   Col A (1): Data/Hora
//   Col B (2): Nome
//   Col C (3): E-mail
//   Col D (4): Telefone
//   Col E (5): Método
//   Col F (6): Senha         (sempre hash salgado: sha256$<salt>$<hex>)
//   Col G (7): Status        (Ativo | Bloqueado | Pendente)
//   Col H (8): Último Acesso (data/hora do último login/cadastro validado)
// =========================================================================

const AUTH_VERSION = "2.0";
const APP_CLIENT_KEY = "liturgia_piedade_2026_v2";
// Mude para "Pendente" se quiser aprovar cada músico manualmente na coluna G (Status) antes do primeiro acesso:
const DEFAULT_NEW_USER_STATUS = "Ativo";
const RESET_TTL_MS = 15 * 60 * 1000; // 15 minutos
const RESET_COOLDOWN_MS = 60 * 1000; // 60 segundos entre reenvios
const RESET_MAX_ATTEMPTS = 5;

function autorizarEnvioDeEmail() {
  const cota = MailApp.getRemainingDailyQuota();
  const sheet = getUsersSheet();
  Logger.log("Permissões OK! Planilha: " + sheet.getName() + " | Cota diária de e-mails: " + cota);
  return { ok: true, quota: cota, sheet: sheet.getName() };
}

function doGet(e) {
  return buildJsonResponse({
    ok: true,
    authVersion: AUTH_VERSION,
    service: "liturgia-auth"
  });
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  let lockAcquired = false;

  try {
    const rawBody = e && e.postData && e.postData.contents ? e.postData.contents : "{}";
    let payload = {};
    try {
      payload = JSON.parse(rawBody);
    } catch (parseErr) {
      return buildJsonResponse({
        ok: false,
        authVersion: AUTH_VERSION,
        code: "INVALID_JSON",
        message: "Requisição inválida enviada ao servidor."
      });
    }

    if (!payload || payload.appKey !== APP_CLIENT_KEY) {
      return buildJsonResponse({
        ok: false,
        authVersion: AUTH_VERSION,
        code: "UNAUTHORIZED_CLIENT",
        message: "Cliente não autorizado para esta versão de autenticação."
      });
    }

    const action = String(payload.action || "").trim().toLowerCase();
    if (action === "ping") {
      return buildJsonResponse({
        ok: true,
        authVersion: AUTH_VERSION,
        service: "liturgia-auth"
      });
    }

    lock.waitLock(10000);
    lockAcquired = true;

    const sheet = getUsersSheet();
    ensureSheetHeaders(sheet);

    if (action === "register") {
      return buildJsonResponse(handleRegister(sheet, payload));
    }
    if (action === "login") {
      return buildJsonResponse(handleLogin(sheet, payload));
    }
    if (action === "validate_session") {
      return buildJsonResponse(handleValidateSession(sheet, payload));
    }
    if (action === "request_reset") {
      return buildJsonResponse(handleRequestReset(sheet, payload));
    }
    if (action === "confirm_reset") {
      return buildJsonResponse(handleConfirmReset(sheet, payload));
    }

    return buildJsonResponse({
      ok: false,
      authVersion: AUTH_VERSION,
      code: "UNKNOWN_ACTION",
      message: "Ação de autenticação desconhecida."
    });
  } catch (err) {
    return buildJsonResponse({
      ok: false,
      authVersion: AUTH_VERSION,
      code: "SERVER_ERROR",
      message: "Erro interno no servidor de acesso: " + (err && err.message ? err.message : String(err))
    });
  } finally {
    if (lockAcquired) {
      try { lock.releaseLock(); } catch (eRel) {}
    }
  }
}

function buildJsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function getUsersSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  return ss.getSheets()[0];
}

function ensureSheetHeaders(sheet) {
  const expected = ["Data/Hora", "Nome", "E-mail", "Telefone", "Método", "Senha", "Status", "Último Acesso"];
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(expected);
    return;
  }
  const width = Math.max(sheet.getLastColumn(), expected.length);
  const currentHeaders = sheet.getRange(1, 1, 1, width).getValues()[0];
  let changed = false;
  for (let i = 0; i < expected.length; i++) {
    if (!String(currentHeaders[i] || "").trim()) {
      sheet.getRange(1, i + 1).setValue(expected[i]);
      changed = true;
    }
  }
  if (changed) SpreadsheetApp.flush();
}

function formatNow() {
  let tz = "America/Manaus";
  try {
    tz = Session.getScriptTimeZone() || tz;
  } catch (e) {}
  return Utilities.formatDate(new Date(), tz, "dd/MM/yyyy HH:mm:ss");
}

function normalizeEmail(email) {
  return String(email || "").trim().toLowerCase();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function generateSalt() {
  const raw = Utilities.getUuid() + "-" + Math.random().toString(36) + "-" + Date.now();
  return sha256Hex(raw).slice(0, 24);
}

function sha256Hex(text) {
  const bytes = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, String(text), Utilities.Charset.UTF_8);
  let hex = "";
  for (let i = 0; i < bytes.length; i++) {
    const b = (bytes[i] < 0) ? bytes[i] + 256 : bytes[i];
    const h = b.toString(16);
    hex += (h.length === 1 ? "0" + h : h);
  }
  return hex;
}

function createPasswordHash(plainPassword) {
  const salt = generateSalt();
  const digest = sha256Hex(salt + ":" + String(plainPassword));
  return "sha256$" + salt + "$" + digest;
}

function constantTimeEquals(a, b) {
  const strA = String(a || "");
  const strB = String(b || "");
  if (strA.length !== strB.length) return false;
  let diff = 0;
  for (let i = 0; i < strA.length; i++) {
    diff |= strA.charCodeAt(i) ^ strB.charCodeAt(i);
  }
  return diff === 0;
}

function isValidHashFormat(stored) {
  const val = String(stored || "").trim();
  const parts = val.split("$");
  return parts.length === 3 && parts[0] === "sha256" && parts[1].length >= 12 && parts[2].length === 64;
}

function verifyPasswordHash(plainPassword, stored) {
  if (!isValidHashFormat(stored)) {
    return { valid: false, hasPassword: false };
  }
  const parts = String(stored).trim().split("$");
  const salt = parts[1];
  const expectedDigest = parts[2];
  const actualDigest = sha256Hex(salt + ":" + String(plainPassword));
  return {
    valid: constantTimeEquals(actualDigest, expectedDigest),
    hasPassword: true
  };
}

function findUserRecord(sheet, emailLower) {
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return null;

  const numCols = Math.max(8, sheet.getLastColumn());
  const values = sheet.getRange(2, 1, lastRow - 1, numCols).getValues();

  let latestHashed = null;
  let latestAny = null;

  for (let i = 0; i < values.length; i++) {
    const row = values[i];
    const rowEmail = normalizeEmail(row[2]);
    if (!rowEmail || rowEmail !== emailLower) continue;

    const storedPass = String(row[5] || "").trim();
    const rawStatus = String(row[6] || "").trim();
    const record = {
      rowIndex: i + 2,
      createdAt: String(row[0] || "").trim(),
      name: String(row[1] || "").trim(),
      email: rowEmail,
      phone: String(row[3] || "").trim(),
      method: String(row[4] || "").trim(),
      passwordHash: storedPass,
      hasPassword: isValidHashFormat(storedPass),
      status: rawStatus,
      statusLower: rawStatus.toLowerCase(),
      lastAccess: String(row[7] || "").trim()
    };

    latestAny = record;
    if (record.hasPassword) {
      latestHashed = record;
    }
  }

  return latestHashed || latestAny;
}

function buildPublicUser(name, email, phone, method, status) {
  return {
    name: String(name || "").trim(),
    email: normalizeEmail(email),
    phone: String(phone || "").trim(),
    method: String(method || "E-mail e Senha"),
    status: String(status || "Ativo"),
    role: "Músico Litúrgico",
    authVersion: AUTH_VERSION
  };
}

function handleRegister(sheet, payload) {
  const name = String(payload.name || "").trim();
  const emailLower = normalizeEmail(payload.email);
  const phone = String(payload.phone || "").trim();
  const password = String(payload.password || "");

  if (name.length < 3) {
    return {
      ok: false,
      authVersion: AUTH_VERSION,
      code: "INVALID_NAME",
      message: "Informe seu nome completo (mínimo 3 letras)."
    };
  }
  if (!isValidEmail(emailLower)) {
    return {
      ok: false,
      authVersion: AUTH_VERSION,
      code: "INVALID_EMAIL",
      message: "Informe um endereço de e-mail válido."
    };
  }
  const phoneDigits = phone.replace(/\D/g, "");
  if (phoneDigits.length < 8) {
    return {
      ok: false,
      authVersion: AUTH_VERSION,
      code: "INVALID_PHONE",
      message: "Informe seu telefone/WhatsApp com DDD."
    };
  }
  if (password.length < 6) {
    return {
      ok: false,
      authVersion: AUTH_VERSION,
      code: "WEAK_PASSWORD",
      message: "A senha deve possuir no mínimo 6 caracteres."
    };
  }

  const existing = findUserRecord(sheet, emailLower);
  if (existing) {
    if (existing.statusLower === "bloqueado") {
      return {
        ok: false,
        authVersion: AUTH_VERSION,
        code: "BLOCKED",
        message: "Este e-mail está bloqueado pela coordenação da Pastoral de Música."
      };
    }
    if (existing.hasPassword) {
      return {
        ok: false,
        authVersion: AUTH_VERSION,
        code: "EMAIL_EXISTS",
        message: "Este e-mail já possui cadastro ativo. Faça login ou clique em 'Esqueceu a senha?'."
      };
    }

    // Upgrade de linha legada sem hash na mesma linha (sem duplicar registro)
    const nowStr = formatNow();
    const passHash = createPasswordHash(password);
    const finalStatus = existing.status || DEFAULT_NEW_USER_STATUS;
    const method = "Cadastro (E-mail e Senha)";

    if (!existing.createdAt) {
      sheet.getRange(existing.rowIndex, 1).setValue(nowStr);
    }
    sheet.getRange(existing.rowIndex, 2).setValue(name);
    sheet.getRange(existing.rowIndex, 3).setValue(emailLower);
    sheet.getRange(existing.rowIndex, 4).setValue(phone);
    sheet.getRange(existing.rowIndex, 5).setValue(method);
    sheet.getRange(existing.rowIndex, 6).setValue(passHash);
    sheet.getRange(existing.rowIndex, 7).setValue(finalStatus);
    sheet.getRange(existing.rowIndex, 8).setValue(nowStr);
    SpreadsheetApp.flush();

    return {
      ok: true,
      authVersion: AUTH_VERSION,
      user: buildPublicUser(name, emailLower, phone, method, finalStatus)
    };
  }

  const nowStr = formatNow();
  const passHash = createPasswordHash(password);
  const method = "Cadastro (E-mail e Senha)";
  const finalStatus = DEFAULT_NEW_USER_STATUS;

  sheet.appendRow([
    nowStr,
    name,
    emailLower,
    phone,
    method,
    passHash,
    finalStatus,
    nowStr
  ]);
  SpreadsheetApp.flush();

  return {
    ok: true,
    authVersion: AUTH_VERSION,
    user: buildPublicUser(name, emailLower, phone, method, finalStatus)
  };
}

function handleLogin(sheet, payload) {
  const emailLower = normalizeEmail(payload.email);
  const password = String(payload.password || "");

  if (!isValidEmail(emailLower) || !password) {
    return {
      ok: false,
      authVersion: AUTH_VERSION,
      code: "INVALID_INPUT",
      message: "Informe e-mail e senha válidos."
    };
  }

  const rec = findUserRecord(sheet, emailLower);
  if (!rec) {
    return {
      ok: false,
      authVersion: AUTH_VERSION,
      code: "NOT_FOUND",
      message: "E-mail não cadastrado. Clique em 'Criar Conta Grátis' para se cadastrar."
    };
  }

  if (rec.statusLower === "bloqueado") {
    return {
      ok: false,
      authVersion: AUTH_VERSION,
      code: "BLOCKED",
      message: "Seu acesso foi bloqueado pela coordenação da Pastoral de Música."
    };
  }

  if (rec.statusLower === "pendente") {
    return {
      ok: false,
      authVersion: AUTH_VERSION,
      code: "PENDING",
      message: "Seu cadastro aguarda aprovação da coordenação da Pastoral."
    };
  }

  if (!rec.hasPassword) {
    return {
      ok: false,
      authVersion: AUTH_VERSION,
      code: "NEEDS_PASSWORD",
      message: "Esta conta antiga ainda não possui senha. Clique em 'Criar Conta Grátis' com este e-mail ou use 'Esqueceu a senha?' para criar sua senha."
    };
  }

  const check = verifyPasswordHash(password, rec.passwordHash);
  if (!check.valid) {
    return {
      ok: false,
      authVersion: AUTH_VERSION,
      code: "WRONG_PASSWORD",
      message: "Senha incorreta. Tente novamente ou clique em 'Esqueceu a senha?'."
    };
  }

  const nowStr = formatNow();
  const activeStatus = rec.status || "Ativo";
  if (!rec.status) {
    sheet.getRange(rec.rowIndex, 7).setValue(activeStatus);
  }
  sheet.getRange(rec.rowIndex, 8).setValue(nowStr);
  SpreadsheetApp.flush();

  return {
    ok: true,
    authVersion: AUTH_VERSION,
    user: buildPublicUser(rec.name, rec.email, rec.phone, "E-mail e Senha", activeStatus)
  };
}

function handleValidateSession(sheet, payload) {
  const emailLower = normalizeEmail(payload.email);
  if (!isValidEmail(emailLower)) {
    return {
      ok: false,
      authVersion: AUTH_VERSION,
      code: "SESSION_REVOKED",
      message: "Sessão inválida. Faça login novamente."
    };
  }

  const rec = findUserRecord(sheet, emailLower);
  if (!rec) {
    return {
      ok: false,
      authVersion: AUTH_VERSION,
      code: "SESSION_REVOKED",
      message: "Conta não encontrada na planilha. Faça login novamente."
    };
  }
  if (rec.statusLower === "bloqueado") {
    return {
      ok: false,
      authVersion: AUTH_VERSION,
      code: "BLOCKED",
      message: "Seu acesso foi bloqueado pela coordenação da Pastoral de Música."
    };
  }
  if (rec.statusLower === "pendente") {
    return {
      ok: false,
      authVersion: AUTH_VERSION,
      code: "PENDING",
      message: "Seu cadastro está aguardando liberação da coordenação."
    };
  }
  if (!rec.hasPassword) {
    return {
      ok: false,
      authVersion: AUTH_VERSION,
      code: "NEEDS_PASSWORD",
      message: "É necessário definir uma senha cadastral para continuar."
    };
  }

  return {
    ok: true,
    authVersion: AUTH_VERSION,
    user: buildPublicUser(rec.name, rec.email, rec.phone, rec.method || "E-mail e Senha", rec.status || "Ativo")
  };
}

function getResetPropKey(emailLower) {
  return "reset_" + emailLower;
}

function handleRequestReset(sheet, payload) {
  const emailLower = normalizeEmail(payload.email);
  if (!isValidEmail(emailLower)) {
    return {
      ok: false,
      authVersion: AUTH_VERSION,
      code: "INVALID_EMAIL",
      message: "Informe o e-mail cadastrado."
    };
  }

  const rec = findUserRecord(sheet, emailLower);
  if (!rec) {
    return {
      ok: false,
      authVersion: AUTH_VERSION,
      code: "NOT_FOUND",
      message: "E-mail não cadastrado na Pastoral. Crie sua conta gratuitamente."
    };
  }

  if (rec.statusLower === "bloqueado") {
    return {
      ok: false,
      authVersion: AUTH_VERSION,
      code: "BLOCKED",
      message: "Este acesso está bloqueado pela coordenação."
    };
  }

  const props = PropertiesService.getScriptProperties();
  const propKey = getResetPropKey(emailLower);
  const nowMs = Date.now();

  const existingRaw = props.getProperty(propKey);
  if (existingRaw) {
    try {
      const existingData = JSON.parse(existingRaw);
      if (existingData && existingData.requestedAt && (nowMs - existingData.requestedAt) < RESET_COOLDOWN_MS) {
        const waitSec = Math.ceil((RESET_COOLDOWN_MS - (nowMs - existingData.requestedAt)) / 1000);
        return {
          ok: false,
          authVersion: AUTH_VERSION,
          code: "COOLDOWN",
          message: "Aguarde " + waitSec + "s antes de solicitar um novo código."
        };
      }
    } catch (eParse) {}
  }

  const code = String(Math.floor(100000 + Math.random() * 900000));
  const resetObj = {
    codeHash: sha256Hex(emailLower + ":" + code),
    expiresAt: nowMs + RESET_TTL_MS,
    requestedAt: nowMs,
    attempts: 0
  };
  props.setProperty(propKey, JSON.stringify(resetObj));

  try {
    MailApp.sendEmail({
      to: emailLower,
      subject: "Código de recuperação — Músicas Litúrgicas",
      body:
        "Olá" + (rec.name ? ", " + rec.name : "") + "!\n\n" +
        "Você solicitou a criação ou redefinição de senha no aplicativo Músicas Litúrgicas (Comunidade Virgem da Piedade).\n\n" +
        "Seu código de verificação de 6 dígitos é: " + code + "\n\n" +
        "Este código é válido por 15 minutos.\n" +
        "Se você não solicitou esta alteração, ignore este e-mail."
    });
  } catch (mailErr) {
    props.deleteProperty(propKey);
    const errDetail = (mailErr && mailErr.message) ? mailErr.message : String(mailErr);
    try { Logger.log("MAIL_ERROR: " + errDetail); } catch (eLog) {}
    return {
      ok: false,
      authVersion: AUTH_VERSION,
      code: "MAIL_ERROR",
      detail: errDetail,
      message: "Não foi possível enviar o e-mail de recuperação. Autorize o envio de e-mail no Apps Script ou contate a coordenação."
    };
  }

  return {
    ok: true,
    authVersion: AUTH_VERSION,
    message: "Código de 6 dígitos enviado para " + emailLower + ". Verifique sua caixa de entrada e spam."
  };
}

function handleConfirmReset(sheet, payload) {
  const emailLower = normalizeEmail(payload.email);
  const code = String(payload.code || "").trim();
  const newPassword = String(payload.newPassword || "");

  if (!isValidEmail(emailLower)) {
    return {
      ok: false,
      authVersion: AUTH_VERSION,
      code: "INVALID_EMAIL",
      message: "E-mail inválido."
    };
  }
  if (!/^\d{6}$/.test(code)) {
    return {
      ok: false,
      authVersion: AUTH_VERSION,
      code: "INVALID_CODE",
      message: "Digite o código numérico de 6 dígitos enviado ao seu e-mail."
    };
  }
  if (newPassword.length < 6) {
    return {
      ok: false,
      authVersion: AUTH_VERSION,
      code: "WEAK_PASSWORD",
      message: "A nova senha deve possuir no mínimo 6 caracteres."
    };
  }

  const rec = findUserRecord(sheet, emailLower);
  if (!rec) {
    return {
      ok: false,
      authVersion: AUTH_VERSION,
      code: "NOT_FOUND",
      message: "Conta não encontrada."
    };
  }
  if (rec.statusLower === "bloqueado") {
    return {
      ok: false,
      authVersion: AUTH_VERSION,
      code: "BLOCKED",
      message: "Conta bloqueada pela coordenação."
    };
  }

  const props = PropertiesService.getScriptProperties();
  const propKey = getResetPropKey(emailLower);
  const storedRaw = props.getProperty(propKey);

  if (!storedRaw) {
    return {
      ok: false,
      authVersion: AUTH_VERSION,
      code: "CODE_NOT_FOUND",
      message: "Nenhum código ativo para este e-mail. Solicite um novo código."
    };
  }

  let resetData = null;
  try {
    resetData = JSON.parse(storedRaw);
  } catch (e) {}

  if (!resetData || Date.now() > resetData.expiresAt) {
    props.deleteProperty(propKey);
    return {
      ok: false,
      authVersion: AUTH_VERSION,
      code: "CODE_EXPIRED",
      message: "O código expirou. Solicite um novo código de recuperação."
    };
  }

  if ((resetData.attempts || 0) >= RESET_MAX_ATTEMPTS) {
    props.deleteProperty(propKey);
    return {
      ok: false,
      authVersion: AUTH_VERSION,
      code: "TOO_MANY_ATTEMPTS",
      message: "Número máximo de tentativas excedido. Solicite um novo código."
    };
  }

  const expectedHash = resetData.codeHash;
  const candidateHash = sha256Hex(emailLower + ":" + code);

  if (!constantTimeEquals(candidateHash, expectedHash)) {
    resetData.attempts = (resetData.attempts || 0) + 1;
    props.setProperty(propKey, JSON.stringify(resetData));
    return {
      ok: false,
      authVersion: AUTH_VERSION,
      code: "WRONG_CODE",
      message: "Código incorreto. Verifique o e-mail e tente novamente."
    };
  }

  const newHash = createPasswordHash(newPassword);
  const nowStr = formatNow();
  const finalStatus = rec.status || DEFAULT_NEW_USER_STATUS;

  sheet.getRange(rec.rowIndex, 5).setValue(rec.method || "E-mail e Senha");
  sheet.getRange(rec.rowIndex, 6).setValue(newHash);
  sheet.getRange(rec.rowIndex, 7).setValue(finalStatus);
  sheet.getRange(rec.rowIndex, 8).setValue(nowStr);
  SpreadsheetApp.flush();

  props.deleteProperty(propKey);

  if (finalStatus.toLowerCase() === "pendente") {
    return {
      ok: false,
      authVersion: AUTH_VERSION,
      code: "PENDING",
      message: "Senha atualizada, mas sua conta ainda aguarda liberação da coordenação."
    };
  }

  return {
    ok: true,
    authVersion: AUTH_VERSION,
    user: buildPublicUser(rec.name, rec.email, rec.phone, "Recuperação por E-mail", finalStatus)
  };
}
