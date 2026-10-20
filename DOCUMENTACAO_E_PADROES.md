# 📖 Músicas Litúrgicas — Arquitetura, Funcionalidades e Padrões do Projeto

Este documento consolida o raio-x completo do protótipo desenvolvido, as decisões de design e engenharia adotadas, as convenções e os padrões oficiais para a continuidade do projeto.

---

## 1. 🔍 O Que Já Foi Construído e Validado

### 1.1. Camada de Dados e Acervo Litúrgico
- **9 Celebrações Reais Homologadas**:
  - **Setembro de 2026**: 23º, 24º, 25º e 26º Domingos do Tempo Comum (Ano A).
  - **Outubro de 2026**: 27º e 28º Domingos, Solenidade de Nossa Senhora Aparecida (12/10), 29º (Missões) e 30º Domingos.
- **Ecossistema Multi-Folheto**:
  - **Caderno Paroquial (Comunidade Virgem da Piedade)**: repertório pastoral com arranjos locais e áudios de ensaio da própria comunidade.
  - **O Domingo (Editora Paulus)**: cânticos oficiais do folheto dominical nacional com integração de vídeo oficial e streaming.
- **Acervo de Áudio**:
  - **77 arquivos MP3 reais** organizados na pasta `audios/`, gravados/extraídos para ensaio e memorização melódica dos músicos.
- **Suporte a Mídia Oficial**:
  - Player de vídeo YouTube embutido (modo privativo `youtube-nocookie`) com recurso retrátil/expansível.
  - Links diretos de reprodução legal no Spotify e YouTube.

---

### 1.2. Experiência de Palco do Músico (Modo Roteiro)
- **Navegação Litúrgica Fluida**:
  - Stepper horizontal de momentos com rolagem automática para centralizar o momento ativo.
  - Transição sequencial "Momento Anterior" / "Próximo Momento" com aviso de conclusão da celebração.
- **Harmonia, Tons e Capotraste**:
  - **Transposição em tempo real (+ / - / Reset)**: algoritmo robusto que suporta acordes simples, extensões (m7, sus4, maj7) e inversões com baixo alternativo (ex: `D/F#`, `C/E`).
  - **Capotraste Dedicado (0 a 7 casas)**: cálculo automático do tom real que soa para a assembleia versus a forma/dedilhado tocada no violão (ex: tom real `D` com Capo na 2ª casa dedilha em forma de `C`).
  - **Persistência por Celebração**: tom e capo escolhidos são lembrados individualmente por missa e por música no `localStorage` com botão explícito e feedback visual via Toast.
- **Rolagem Automática Flutuante (Auto-Scroll)**:
  - Widget ergonômico posicionado na lateral/inferior para fácil alcance com o polegar.
  - 5 velocidades calibradas (14px/s a 90px/s) implementadas com `requestAnimationFrame` para fluidez de 60fps sem engasgos.
  - Parada automática suave ao alcançar o final da cifra.
- **Player de Áudio de Ensaio**:
  - Player customizado com barra de progresso clicável (seek), mostrador de tempo e seletor de velocidade de reprodução (0.75x, 1.0x, 1.25x).
  - **Fallback Acústico Harmônico**: síntese sonora em tempo real via Web Audio API tocando arpejo suave na fundamental do tom da música quando não houver arquivo MP3 local.
- **Troca Pontual de Cantos [⇄ Trocar]**:
  - Permite ao ministério substituir um momento específico da celebração por cânticos alternativos homologados sem perder o restante do roteiro.
- **Tipografia e Visual de Cifra**:
  - Identificação e destaque de seções litúrgicas: `[Refrão]`, `[Estrofe]`, `[Solo]`, `[Todos]`, `[Intro]`.
  - Ajuste rápido do tamanho de texto (A+ / A-).
  - JetBrains Mono para espaçamento exato e monospace de acordes sobre a letra.

---

### 1.3. Gestão Litúrgica e Interface Geral
- **Banner Dinâmico do Tempo Litúrgico**:
  - Identificação de cor litúrgica (Verde Comum, Branco Festivo, Azul Mariano, Roxo, Vermelho).
  - Apresentação da data, ano litúrgico e antífona do Salmo Responsorial.
- **Seletor de Missas Planejadas por Data (Modelo B)**:
  - Modal agrupado por mês (Setembro e Outubro) permitindo seleção direta de qualquer data do calendário pastoral.
- **Preferências do Músico**:
  - Modal de Ajustes para configurar o folheto/boletim litúrgico padrão que inicia automaticamente em todas as sessões.
- **Interface Mobile-First & Dark Theme**:
  - Projetado para uso em ambientes de baixa luminosidade (ambão/bancos da igreja), economizando bateria e evitando reflexos.

---

## 2. 📐 Padrões Técnicos e Convenções

Abaixo estão as definições padronizadas para manter a qualidade e facilitar manutenções futuras.

### 2.1. Padrão de Estrutura de Dados (Missa / Celebração)

Cada celebração é identificada pela sua chave ISO `AAAA-MM-DD`:

```javascript
{
  "dateKey": "2026-10-12",
  "dateFormatted": "Segunda-feira, 12 de Outubro de 2026",
  "shortDate": "12/10",
  "title": "Solenidade de Nossa Senhora Aparecida",
  "ano": "Padroeira do Brasil • Ano A",
  "cor": "Branco / Azul Mariano",
  "bannerTheme": "mariano", // "green" | "mariano" | "purple" | "red" | "white"
  "salmo": "Escutai, minha filha, olhai, ouvi isto (Sl 44/45)",
  "status": "Ativa", // "Ativa" | "Planejada"
  "songs": [ ... ]
}
```

### 2.2. Padrão de Objeto de Música (`song`)

```javascript
{
  "id": "dom23-1",                     // ID único no formato {prefixo}-{passo}
  "step": 1,                           // Posição ordinal no rito (1 a 10)
  "moment": "Canto de Entrada",        // Momento litúrgico
  "title": "A Palavra de Deus é luz!", // Título oficial
  "author": "Pe. José Raimundo Galvão",// Compositor / Fonte
  "folhetoLabel": "Caderno Paroquial", // Indicação do folheto ou hinário
  "tone": "Dm",                        // Tom original de referência
  "rhythm": "2/4",                     // Compasso / Ritmo (opcional)
  "audioFile": "audios/23-1.mp3",      // Caminho relativo do MP3 (se houver)
  "youtubeId": "kqAi8fdFf8M",          // ID do YouTube (opcional, para Paulus)
  "spotifyUrl": "https://...",         // Link do Spotify (opcional)
  "youtubeUrl": "https://...",         // Link do YouTube externo (opcional)
  "cifra": "[Refrão]\n Dm   Gm\n..."   // Texto completo com marcações
}
```

### 2.3. Padrão de Nomenclatura de Mídias (`audios/`)
- Músicas de Domingos do Tempo Comum: `{numero_domingo}-{numero_momento}.mp3` (Ex: `23-1.mp3`, `24-10.mp3`).
- Celebrações especiais: `{solenidade}-{numero_momento}.mp3` (Ex: `aparecida-1.mp3`).

### 2.4. Padrão de Formatação de Cifras
1. **Tags de Seção**: Devem ficar entre colchetes em linha isolada:
   - `[Refrão]`, `[Estrofe]`, `[Estrofe 1]`, `[Solo]`, `[Todos]`, `[Pós-Comunhão]`.
2. **Introduções**: Usar `[Intro]` seguido dos acordes:
   - `[Intro] G  Em  C  D7`
3. **Acordes no Texto**:
   - Preferencialmente em linha superior alinhada em fonte monospace, ou embutidos no formato `[D]`, `[F#m]`, `[G7M]`.
   - Inversões sempre com barra reta: `D/F#`, `A/C#`, `C/E`.

### 2.5. Padrão de Armazenamento Local (`localStorage`)
- **Boletim Padrão do Usuário**: `liturgia_boletim_padrao` (ex: `"caderno-piedade"`, `"o-domingo"`).
- **Tom Customizado por Missa**: `tom_missa_{dateKey}_{songId}` (armazena o deslocamento em semitons, ex: `2` ou `-1`).
- **Capotraste por Missa**: `capo_missa_{dateKey}_{songId}` (armazena a casa do capotraste de `0` a `7`).

---

## 3. 📁 Organização de Pastas do Projeto

```text
musicas-liturgicas-proto/
│
├── audios/                      # 77 arquivos MP3 reais para ensaio
│   ├── 23-1.mp3 ... 23-10.mp3
│   ├── aparecida-1.mp3 ...
│
├── css/
│   └── styles.css               # Estilos com Design System, tema escuro e layout responsivo
│
├── js/
│   ├── app.js                   # Lógica central: reprodução, transposição, capotraste, auto-scroll, modais
│   ├── dados_reais.js           # Catálogo homologado da Paróquia (Setembro e Outubro de 2026)
│   └── dados_o_domingo.js       # Catálogo do Folheto "O Domingo" (Paulus) com vídeos e streaming
│
├── index.html                   # Estrutura do App Shell (Home, Modo Palco e Modais)
├── DOCUMENTACAO_E_PADROES.md    # Este documento oficial de referência
│
└── [scripts de apoio/build]     # Utilitários de extração (Node.js/Python)
    ├── build_dados_reais.js
    └── extrair_e_gerar_dados.py
```

---

## 4. 🚀 Próximos Passos e Sugestões de Evolução

1. **Transformação em PWA Completo (Offline)**:
   - Adicionar `manifest.json` e `sw.js` (Service Worker) com estratégia *Cache-First* para que o músico consiga usar o app 100% offline dentro de igrejas sem sinal de internet.
2. **Exportação / Compartilhamento de Repertório**:
   - Gerar PDF limpo para impressão do folheto do ministério ou exportar link compartilhável via WhatsApp.
3. **Módulo de Músicas Avulsas / Repertório Livre**:
   - Permitir busca avulsa de cifras do acervo geral sem estar atrelado a um domingo específico.
4. **Metrônomo Visual Silencioso**:
   - Indicador de pulso visual suave (piscar discreto no ritmo) para auxiliar na introdução das músicas sem produzir som.
