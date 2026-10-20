/**
 * MÚSICAS LITÚRGICAS — APLICATIVO MODULAR
 * Gerenciador da Primeira Tela e Modo Roteiro da Missa (23º Domingo)
 * Com Player de Áudio de Ensaio, Auto-Scroll e Troca Pontual
 */

// Banco de Dados Oficial do 23º Domingo do Tempo Comum (Ano B)
const missaDomingo23 = [
  {
    id: "dom23-1",
    step: 1,
    moment: "Entrada",
    title: "O Senhor é Rei",
    author: "Pe. Zezinho",
    folhetoLabel: "O Domingo nº 01",
    tone: "G",
    duration: 36,
    cifra: `[G]       [D]          [Em]
O Senhor é Rei, o Senhor é meu Pastor e nada me faltará!
[C]          [G]          [D]
Sobre as águas serenas me leva a descansar,
[C]          [D]          [G]
Para a glória do Seu Santo Nome!

[G]         [D]          [Em]
Ainda que eu ande pelo vale da sombra e da morte,
[C]         [G]          [D]
Nada temerei, pois Tu estás comigo!
[C]         [D]          [G]
O Teu bordão e Teu cajado me confortam!`
  },
  {
    id: "dom23-2",
    step: 2,
    moment: "Ato Penitencial",
    title: "Senhor, Tende Piedade de Nós",
    author: "Tradicional Litúrgico",
    folhetoLabel: "O Domingo nº 02",
    tone: "Dm",
    duration: 28,
    cifra: `[Dm]           [Gm]           [A7]        [Dm]
Senhor, tende piedade e perdoai a nossa culpa!
[F]            [C]            [A7]        [Dm]
Cristo, tende piedade de nós, pecadores!
[Dm]           [Gm]           [A7]        [Dm]
Senhor, tende piedade de nós, conduz-nos à vida eterna!`
  },
  {
    id: "dom23-3",
    step: 3,
    moment: "Glória",
    title: "Glória a Deus nas Alturas",
    author: "Eliana Ribeiro",
    folhetoLabel: "O Domingo nº 03",
    tone: "D",
    duration: 45,
    cifra: `[D]            [A]            [Bm]           [G]
Glória a Deus nas alturas, e paz na terra aos homens por Ele amados!
[D]            [A]            [G]            [D]
Senhor Deus, Rei dos céus, Deus Pai todo-poderoso!
[G]            [A]            [D]            [Bm]
Nós Vos louvamos, Vos bendizemos, Vos adoramos e glorificamos,
[Em]           [A7]           [D]
Nós Vos damos graças por Vossa imensa glória!`
  },
  {
    id: "dom23-4",
    step: 4,
    moment: "Salmo Responsorial",
    title: "Sl 145 - Bendize, ó Minha Alma, ao Senhor",
    author: "Liturgia da Palavra",
    folhetoLabel: "O Domingo (Salmo)",
    tone: "C",
    duration: 32,
    cifra: `[C]          [G]          [Am]      [F]
R. Bendize, ó minha alma, bendize ao Senhor!
[C]          [G]          [F]       [C]
Bendize, ó minha alma, ao Senhor meu Deus!

[C]            [G]            [Am]
1. O Senhor é fiel para sempre,
[F]            [Dm]           [G]
Faz justiça aos que são oprimidos;
[C]            [Em]           [F]
Ele dá alimento aos famintos,
[Dm]           [G]            [C]
É o Senhor quem liberta os cativos!`
  },
  {
    id: "dom23-5",
    step: 5,
    moment: "Aclamação ao Evangelho",
    title: "Aleluia, Como o Pai me Amou",
    author: "Frei Fabreti",
    folhetoLabel: "O Domingo nº 04",
    tone: "E",
    duration: 25,
    cifra: `[E]     [B]    [C#m]    [A]     [B]   [E]
Aleluia! Aleluia! A minh'alma se alegra no Senhor!
[E]     [B]    [C#m]    [A]     [B]   [E]
Aleluia! Aleluia! Cantemos com amor!

[A]          [B]         [G#m]       [C#m]
Minhas ovelhas escutam a minha voz, diz o Senhor:
[A]          [B]         [E]
Eu as conheço e elas me seguem!`
  },
  {
    id: "dom23-6",
    step: 6,
    moment: "Ofertório",
    title: "Os Grãos Que Formam a Espiga",
    author: "CNBB Litúrgico",
    folhetoLabel: "O Domingo nº 05",
    tone: "F",
    duration: 40,
    cifra: `[F]             [Bb]           [C]            [F]
Os grãos que formam a espiga se unem no mesmo pão!
[Dm]            [Gm]           [C]            [F]
Assim também nós, Teu povo, vivamos em comunhão!

[Bb]            [C]            [Am]           [Dm]
Recebe, Senhor, as ofertas que pomos no Teu altar:
[Gm]            [C]            [F]
O fruto da nossa terra e o dom do nosso cantar!`
  },
  {
    id: "dom23-7",
    step: 7,
    moment: "Santo",
    title: "Santo, Santo, Santo é o Senhor",
    author: "Pe. Jonas Abib",
    folhetoLabel: "O Domingo nº 06",
    tone: "Am",
    duration: 30,
    cifra: `[Am]          [Dm]          [G]          [C]
Santo, Santo, Santo é o Senhor, Deus do universo!
[F]           [Dm]          [E7]         [Am]
O céu e a terra proclamam a Vossa glória!
[Am]          [Dm]          [G]          [C]
Hosana nas alturas! Bendito o que vem em nome do Senhor!
[F]           [Dm]          [E7]         [Am]
Hosana, hosana nas alturas!`
  },
  {
    id: "dom23-8",
    step: 8,
    moment: "Cordeiro",
    title: "Cordeiro de Deus que Tirais o Pecado",
    author: "Fraternidade",
    folhetoLabel: "O Domingo nº 07",
    tone: "Em",
    duration: 26,
    cifra: `[Em]          [D]           [C]           [B7]
Cordeiro de Deus que tirais o pecado do mundo, tende piedade de nós!
[Em]          [D]           [C]           [B7]
Cordeiro de Deus que tirais o pecado do mundo, tende piedade de nós!
[Am]          [Em]          [B7]          [Em]
Cordeiro de Deus que tirais o pecado do mundo, dai-nos a paz!`
  },
  {
    id: "dom23-9",
    step: 9,
    moment: "Comunhão",
    title: "Vós Sois o Pão da Vida",
    author: "Ziza Fernandes",
    folhetoLabel: "O Domingo nº 08",
    tone: "D",
    duration: 50,
    cifra: `[D]              [A]          [Bm]           [F#m]
Vós sois o pão da vida, que desceu dos céus para nos salvar!
[G]              [D]          [Em]           [A7]
Quem comer deste pão viverá para sempre!

[D]              [A]          [Bm]           [F#m]
Tua carne é verdadeira comida, Teu sangue é verdadeira bebida:
[G]              [D]          [Em]     [A7]    [D]
Quem permanece em Mim e Eu nele, jamais perecerá!`
  },
  {
    id: "dom23-10",
    step: 10,
    moment: "Envio / Final",
    title: "Ide em Paz e Anunciai",
    author: "Comunidade Shalom",
    folhetoLabel: "O Domingo nº 09",
    tone: "A",
    duration: 35,
    cifra: `[A]              [E]          [F#m]          [D]
Ide em paz, e o Senhor vos acompanhe nesta missão!
[A]              [E]          [D]            [A]
Com Maria, nossa Mãe, levaremos a salvação!

[F#m]            [C#m]        [D]            [A]
Ide pelo mundo e anunciai a Boa Nova a todos os povos!
[D]              [A]          [E7]           [A]
O Reino de Deus chegou ao vosso coração!`
  }
];

// Catálogo de Missas Planejadas por Data (Setembro/2026)
const missasPlanejadas = {
  "2026-09-07": {
    dateKey: "2026-09-07",
    dateFormatted: "Domingo, 07 de Setembro de 2026",
    shortDate: "07/09",
    title: "23º Domingo do Tempo Comum",
    ano: "Ano B",
    cor: "Verde Litúrgico",
    salmo: "Sl 145(146) — \"Bendize, ó minha alma, ao Senhor!\"",
    status: "Ativa",
    songs: missaDomingo23
  },
  "2026-09-14": {
    dateKey: "2026-09-14",
    dateFormatted: "Domingo, 14 de Setembro de 2026",
    shortDate: "14/09",
    title: "24º Domingo do Tempo Comum",
    ano: "Ano B",
    cor: "Verde Litúrgico",
    salmo: "Sl 114 — \"Andarei na presença de Deus, junto à terra dos vivos!\"",
    status: "Planejada",
    songs: [
      {
        id: "dom24-1",
        step: 1,
        moment: "Entrada",
        title: "Toda a Terra Te Louve",
        author: "Hinário Litúrgico Paulus",
        folhetoLabel: "O Domingo nº 01",
        tone: "D",
        duration: 38,
        cifra: `[D]              [G]            [A]            [D]
Toda a terra Te adore, Senhor, e cante louvores ao Teu Nome!
[Bm]             [Em]           [A7]           [D]
Vinde e vede as obras de Deus, Seus prodígios no meio dos homens!`
      },
      {
        id: "dom24-2",
        step: 2,
        moment: "Ato Penitencial",
        title: "Senhor, Que Sois o Caminho",
        author: "Comunidade Recado",
        folhetoLabel: "O Domingo nº 02",
        tone: "Am",
        duration: 30,
        cifra: `[Am]             [Dm]           [E7]           [Am]
Senhor, que sois o Caminho que nos leva ao Pai: tende piedade de nós!
[F]              [Dm]           [E7]           [Am]
Cristo, que sois a Verdade que ilumina o povo: tende piedade de nós!`
      },
      {
        id: "dom24-3",
        step: 3,
        moment: "Glória",
        title: "Glória a Deus no Céu",
        author: "Frei Luiz",
        folhetoLabel: "O Domingo nº 03",
        tone: "G",
        duration: 42,
        cifra: `[G]          [D]          [Em]         [C]
Glória a Deus nas alturas e paz na terra aos homens!
[G]          [D]          [C]          [G]
Nós Vos louvamos, Vos bendizemos, Senhor nosso Deus!`
      },
      {
        id: "dom24-4",
        step: 4,
        moment: "Salmo Responsorial",
        title: "Sl 114 - Andarei na Presença de Deus",
        author: "Liturgia da Palavra",
        folhetoLabel: "O Domingo (Salmo)",
        tone: "G",
        duration: 35,
        cifra: `[G]              [C]            [D]            [G]
R. Andarei na presença de Deus, junto à terra dos vivos!
[Em]             [Am]           [D7]           [G]
Eu amo o Senhor, porque Ele ouviu a voz da minha prece!`
      },
      {
        id: "dom24-5",
        step: 5,
        moment: "Aclamação ao Evangelho",
        title: "Aleluia, Tu Tens Palavras de Vida",
        author: "Coral Palestrina",
        folhetoLabel: "O Domingo nº 04",
        tone: "C",
        duration: 24,
        cifra: `[C]       [G]        [Am]       [F]     [G]    [C]
Aleluia! Aleluia! Bendito o que vem em nome do Pai!
[Am]             [Dm]           [G]            [C]
A quem iremos nós, Senhor? Só Tu tens palavras de vida eterna!`
      },
      {
        id: "dom24-6",
        step: 6,
        moment: "Ofertório",
        title: "Sabes, Senhor, o Que Temos é Tão Pouco",
        author: "Pe. Zezinho",
        folhetoLabel: "O Domingo nº 05",
        tone: "F",
        duration: 44,
        cifra: `[F]              [Bb]           [C]            [F]
Sabes, Senhor, o que temos é tão pouco pra dar!
[Dm]             [Gm]           [C]            [F]
Mas este pouco nós queremos com os irmãos partilhar!`
      },
      {
        id: "dom24-7",
        step: 7,
        moment: "Santo",
        title: "O Senhor é Santo",
        author: "Banda Dom",
        folhetoLabel: "O Domingo nº 06",
        tone: "Em",
        duration: 32,
        cifra: `[Em]          [C]           [D]           [G]
Santo, Santo, Santo é o Senhor Deus do universo!
[C]           [Am]          [B7]          [Em]
Céus e terra estão cheios da Vossa imensa glória!`
      },
      {
        id: "dom24-8",
        step: 8,
        moment: "Cordeiro",
        title: "Cordeiro de Deus (Canto Litúrgico)",
        author: "Tradicional",
        folhetoLabel: "O Domingo nº 07",
        tone: "Dm",
        duration: 26,
        cifra: `[Dm]          [Gm]          [A7]          [Dm]
Cordeiro de Deus que tirais o pecado do mundo, tende piedade de nós!`
      },
      {
        id: "dom24-9",
        step: 9,
        moment: "Comunhão",
        title: "Eu Sou o Pão Que Vem do Céu",
        author: "Pe. Reginaldo Manzotti",
        folhetoLabel: "O Domingo nº 08",
        tone: "G",
        duration: 52,
        cifra: `[G]              [D]            [Em]           [Bm]
Eu sou o pão que vem do céu, quem crer em Mim não morrerá!
[C]              [G]            [Am]           [D]
Venham comer da minha mesa, a vida eterna Eu vos darei!`
      },
      {
        id: "dom24-10",
        step: 10,
        moment: "Envio / Final",
        title: "Ide por Todo o Mundo",
        author: "Maranathá",
        folhetoLabel: "O Domingo nº 09",
        tone: "A",
        duration: 34,
        cifra: `[A]              [E]            [F#m]          [D]
Ide por todo o mundo e pregai o Evangelho a toda criatura!
[A]              [E]            [D]            [A]
Eis que estou convosco todos os dias, até o fim dos tempos!`
      }
    ]
  },
  "2026-09-21": {
    dateKey: "2026-09-21",
    dateFormatted: "Domingo, 21 de Setembro de 2026",
    shortDate: "21/09",
    title: "25º Domingo do Tempo Comum",
    ano: "Ano B",
    cor: "Verde Litúrgico",
    salmo: "Sl 53 — \"É o Senhor quem sustenta a minha vida!\"",
    status: "Planejada",
    songs: [
      {
        id: "dom25-1",
        step: 1,
        moment: "Entrada",
        title: "O Povo de Deus no Deserto Andava",
        author: "CNBB",
        folhetoLabel: "O Domingo nº 01",
        tone: "E",
        duration: 36,
        cifra: `[E]              [B]            [C#m]          [A]
O povo de Deus no deserto andava, mas à sua frente alguém caminhava!
[E]              [B]            [A]            [E]
O povo de Deus era conduzido pelo Deus da aliança, do amor incontido!`
      },
      {
        id: "dom25-2",
        step: 2,
        moment: "Salmo Responsorial",
        title: "Sl 53 - É o Senhor Quem Sustenta a Minha Vida",
        author: "Liturgia da Palavra",
        folhetoLabel: "O Domingo (Salmo)",
        tone: "D",
        duration: 34,
        cifra: `[D]              [A]            [Bm]           [G]
R. É o Senhor quem sustenta a minha vida, Nele confio e nada temo!`
      },
      {
        id: "dom25-3",
        step: 3,
        moment: "Comunhão",
        title: "Onde Reina o Amor, Fraterno Amor",
        author: "Comunidade de Taizé",
        folhetoLabel: "O Domingo nº 08",
        tone: "F",
        duration: 48,
        cifra: `[F]         [C]        [Dm]       [Bb]
Onde reina o amor, fraterno amor,
[F]         [C]        [F]
Onde reina o amor, Deus aí está!`
      }
    ]
  },
  "2026-09-28": {
    dateKey: "2026-09-28",
    dateFormatted: "Domingo, 28 de Setembro de 2026",
    shortDate: "28/09",
    title: "26º Domingo do Tempo Comum",
    ano: "Ano B",
    cor: "Verde Litúrgico",
    salmo: "Sl 18 — \"A lei do Senhor Deus é perfeita, conforto para a alma!\"",
    status: "Planejada",
    songs: [
      {
        id: "dom26-1",
        step: 1,
        moment: "Entrada",
        title: "Canta Meu Povo",
        author: "Pe. Zezinho",
        folhetoLabel: "O Domingo nº 01",
        tone: "C",
        duration: 36,
        cifra: `[C]              [G]            [Am]           [F]
Canta, meu povo, canta o teu louvor! Deus fez em nós maravilhas de amor!`
      },
      {
        id: "dom26-2",
        step: 2,
        moment: "Salmo Responsorial",
        title: "Sl 18 - A Lei do Senhor Deus é Perfeita",
        author: "Liturgia da Palavra",
        folhetoLabel: "O Domingo (Salmo)",
        tone: "G",
        duration: 35,
        cifra: `[G]              [C]            [D]            [G]
R. A lei do Senhor Deus é perfeita, conforto para a alma!`
      },
      {
        id: "dom26-3",
        step: 3,
        moment: "Comunhão",
        title: "Pão da Vida, Novo Alento",
        author: "Coral Arquidiocesano",
        folhetoLabel: "O Domingo nº 08",
        tone: "D",
        duration: 50,
        cifra: `[D]              [A]            [Bm]           [G]
Pão da vida, novo alento, Tu nos dás a salvação!`
      }
    ]
  }
};

// Músicas alternativas para substituição pontual [⇄ Trocar]
const swapAlternatives = {
  "Entrada": [
    { title: "Um Certo Galileu", author: "Pe. Zezinho", tone: "C", folhetoLabel: "Tradicional Paroquial", cifra: "[C]  [G]  [Am]  [F]\nUm certo dia, à beira mar..." },
    { title: "Toda a Bíblia é Comunicação", author: "Pe. Jonas", tone: "D", folhetoLabel: "Mês da Bíblia", cifra: "[D]  [A]  [G]  [D]\nToda a Bíblia é comunicação de um Deus de Amor!" }
  ],
  "Ato Penitencial": [
    { title: "Perdão, Senhor, Tantos Erros Cometi", author: "Fraternidade", tone: "Em", folhetoLabel: "Popular", cifra: "[Em]  [Am]  [B7]\nPerdão Senhor, tantos erros cometi..." }
  ],
  "Glória": [
    { title: "Glória a Deus no Céu (Frei Luiz)", author: "Frei Luiz", tone: "G", folhetoLabel: "Coral Litúrgico", cifra: "[G]  [D]  [Em]  [C]\nGlória, Glória, ao Pai Criador!" }
  ],
  "Santo": [
    { title: "Santo dos Anjos", author: "Comunidade Anjos", tone: "D", folhetoLabel: "Jovens", cifra: "[D]  [A]  [Bm]  [G]\nSanto, Santo, Santo, Deus do universo!" }
  ],
  "Comunhão": [
    { title: "Venham Trabalhar na Minha Vinha", author: "Pe. Zezinho", tone: "C", folhetoLabel: "Hinário", cifra: "[C]  [G]  [F]  [C]\nVenham trabalhar na minha vinha, dilatar meu Reino..." }
  ]
};

// Escala cromática para transposição
const chromaticScale = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];

// Estado Global da Aplicação
const appState = {
  currentScreen: "auth", // Começa na autenticação obrigatória
  isAuthenticated: false,
  currentUser: null,
  authMode: "login", // "login" ou "register"
  activeFolheto: localStorage.getItem("liturgia_boletim_padrao") || "caderno-piedade",
  activeDateKey: "2026-09-07", // Data ativa padrão
  activeMissa: JSON.parse(JSON.stringify(missaDomingo23)),
  currentStageIndex: 0,
  stageTranspositions: {},
  stageCapos: {},
  stageFontSize: 14,
  autoScrollActive: false,
  autoScrollSpeedLevel: 2, // 1 a 5 (padrão Vel 2)
  autoScrollAnimFrame: null,
  lastScrollTimestamp: null,
  fractionalScrollAccumulator: 0,

  // Player de Áudio de Ensaio e Estúdio
  isPlayingAudio: false,
  audioCurrentTime: 0,
  audioDuration: 36,
  audioPlaybackRate: 1.0,
  audioInterval: null,
  audioCtx: null,
  currentAudioTrackIndex: 0,
  audioAutoPlaySequence: true,

  // Modal Avulso
  activeSongModal: null,
  singleSongTransposition: 0,
  singleFontSize: 14
};

// Elementos do DOM
const dom = {
  // Telas
  authScreen: document.getElementById("authScreen"),
  massesScreen: document.getElementById("massesScreen"),
  homeScreen: document.getElementById("homeScreen"),
  audioScreen: document.getElementById("audioScreen"),
  stageScreen: document.getElementById("stageScreen"),

  // Elementos do Hub de Missas (Tela 1 Pós-Login)
  userDisplayNameMasses: document.getElementById("userDisplayNameMasses"),
  btnUserMassesHeader: document.getElementById("btnUserMassesHeader"),
  nextMassHeroCard: document.getElementById("nextMassHeroCard"),
  selectedMassTag: document.getElementById("selectedMassTag"),
  nextMassTitle: document.getElementById("nextMassTitle"),
  nextMassDate: document.getElementById("nextMassDate"),
  nextMassSalmo: document.getElementById("nextMassSalmo"),
  nextMassPill: document.getElementById("nextMassPill"),
  btnHeroOpenRepertoire: document.getElementById("btnHeroOpenRepertoire"),
  btnHeroOpenAudio: document.getElementById("btnHeroOpenAudio"),
  btnHeroOpenStage: document.getElementById("btnHeroOpenStage"),
  massSearchInput: document.getElementById("massSearchInput"),
  btnClearMassSearch: document.getElementById("btnClearMassSearch"),
  massesCardFeed: document.getElementById("massesCardFeed"),
  navMassesTab: document.getElementById("navMassesTab"),
  navHomeTabFromMasses: document.getElementById("navHomeTabFromMasses"),
  navAudioTabFromMasses: document.getElementById("navAudioTabFromMasses"),
  navStageTabFromMasses: document.getElementById("navStageTabFromMasses"),
  btnHomeBackToMasses: document.getElementById("btnHomeBackToMasses"),
  homeHeaderSubtitle: document.getElementById("homeHeaderSubtitle"),
  btnHomeOpenAudio: document.getElementById("btnHomeOpenAudio"),
  navOpenAudioFromHome: document.getElementById("navOpenAudioFromHome"),

  // Elementos da Tela 3: Ouvir Repertório / Estúdio de Áudio
  btnAudioBackToMasses: document.getElementById("btnAudioBackToMasses"),
  audioHeaderSubtitle: document.getElementById("audioHeaderSubtitle"),
  btnAudioGoToStage: document.getElementById("btnAudioGoToStage"),
  deckMomentBadge: document.getElementById("deckMomentBadge"),
  deckStatusBadge: document.getElementById("deckStatusBadge"),
  deckSongTitle: document.getElementById("deckSongTitle"),
  deckSongMeta: document.getElementById("deckSongMeta"),
  deckProgressContainer: document.getElementById("deckProgressContainer"),
  deckProgressBar: document.getElementById("deckProgressBar"),
  deckCurrentTime: document.getElementById("deckCurrentTime"),
  deckTotalTime: document.getElementById("deckTotalTime"),
  btnDeckPrev: document.getElementById("btnDeckPrev"),
  btnDeckRewind: document.getElementById("btnDeckRewind"),
  btnDeckPlayPause: document.getElementById("btnDeckPlayPause"),
  deckPlayIcon: document.getElementById("deckPlayIcon"),
  btnDeckForward: document.getElementById("btnDeckForward"),
  btnDeckNext: document.getElementById("btnDeckNext"),
  btnDeckAutoPlay: document.getElementById("btnDeckAutoPlay"),
  btnToggleDeckLyrics: document.getElementById("btnToggleDeckLyrics"),
  deckLyricsArrow: document.getElementById("deckLyricsArrow"),
  deckLyricsDrawer: document.getElementById("deckLyricsDrawer"),
  deckLyricsText: document.getElementById("deckLyricsText"),
  audioTracksCountBadge: document.getElementById("audioTracksCountBadge"),
  audioTracksContainer: document.getElementById("audioTracksContainer"),
  navMassesFromAudio: document.getElementById("navMassesFromAudio"),
  navHomeFromAudio: document.getElementById("navHomeFromAudio"),
  navStageFromAudio: document.getElementById("navStageFromAudio"),

  // Elementos da Tela de Autenticação Obrigatória
  btnModeLogin: document.getElementById("btnModeLogin"),
  btnModeRegister: document.getElementById("btnModeRegister"),
  btnGoogleAuth: document.getElementById("btnGoogleAuth"),
  googleAuthText: document.getElementById("googleAuthText"),
  authDividerText: document.getElementById("authDividerText"),
  authLoginTabs: document.getElementById("authLoginTabs"),
  tabMethodEmail: document.getElementById("tabMethodEmail"),
  tabMethodPhone: document.getElementById("tabMethodPhone"),
  formAuthEmail: document.getElementById("formAuthEmail"),
  formAuthPhone: document.getElementById("formAuthPhone"),
  formAuthRegister: document.getElementById("formAuthRegister"),
  authInputEmail: document.getElementById("authInputEmail"),
  authInputPassword: document.getElementById("authInputPassword"),
  authInputPhone: document.getElementById("authInputPhone"),
  btnSubmitEmailAuth: document.getElementById("btnSubmitEmailAuth"),
  btnSubmitPhoneAuth: document.getElementById("btnSubmitPhoneAuth"),
  registerName: document.getElementById("registerName"),
  registerEmail: document.getElementById("registerEmail"),
  registerPhone: document.getElementById("registerPhone"),
  registerPassword: document.getElementById("registerPassword"),
  registerConfirmPassword: document.getElementById("registerConfirmPassword"),
  btnSubmitRegister: document.getElementById("btnSubmitRegister"),
  linkForgotPassword: document.getElementById("linkForgotPassword"),
  licenseBadgeText: document.getElementById("licenseBadgeText"),
  signupPromptText: document.getElementById("signupPromptText"),
  linkToggleAuthMode: document.getElementById("linkToggleAuthMode"),
  authLiturgicalSeasonBadge: document.getElementById("authLiturgicalSeasonBadge"),
  authLiturgicalTag: document.getElementById("authLiturgicalTag"),
  userDisplayName: document.getElementById("userDisplayName"),

  // Modal de Recuperação de Senha
  recoveryModal: document.getElementById("recoveryModal"),
  btnCloseRecoveryModal: document.getElementById("btnCloseRecoveryModal"),
  recoveryStep1: document.getElementById("recoveryStep1"),
  recoveryStep2: document.getElementById("recoveryStep2"),
  recoveryStep3: document.getElementById("recoveryStep3"),
  btnRecoverViaWhatsApp: document.getElementById("btnRecoverViaWhatsApp"),
  btnRecoverViaEmail: document.getElementById("btnRecoverViaEmail"),
  lblRecoveryInput: document.getElementById("lblRecoveryInput"),
  recoveryInputContact: document.getElementById("recoveryInputContact"),
  btnSendRecoveryCode: document.getElementById("btnSendRecoveryCode"),
  btnBackToRecoveryStep1: document.getElementById("btnBackToRecoveryStep1"),
  recoverySentNotice: document.getElementById("recoverySentNotice"),
  recoveryCodeInput: document.getElementById("recoveryCodeInput"),
  recoveryNewPassword: document.getElementById("recoveryNewPassword"),
  recoveryConfirmPassword: document.getElementById("recoveryConfirmPassword"),
  btnSubmitNewPassword: document.getElementById("btnSubmitNewPassword"),

  // Navegação e Gatilhos
  btnPlayRoteiro: document.getElementById("btnPlayRoteiro"),
  navOpenRoteiro: document.getElementById("navOpenRoteiro"),
  btnBackFromStage: document.getElementById("btnBackFromStage"),
  momentsStepper: document.getElementById("momentsStepper"),
  stageContentScroll: document.getElementById("stageContentScroll"),

  // Elementos do Modo Palco
  stageMomentBadge: document.getElementById("stageMomentBadge"),
  stageFolhetoTag: document.getElementById("stageFolhetoTag"),
  stageSongTitle: document.getElementById("stageSongTitle"),
  stageSongAuthor: document.getElementById("stageSongAuthor"),
  stageCifraPre: document.getElementById("stageCifraPre"),
  stageToneDisplay: document.getElementById("stageToneDisplay"),
  btnStageToneUp: document.getElementById("btnStageToneUp"),
  btnStageToneDown: document.getElementById("btnStageToneDown"),
  btnStageToneReset: document.getElementById("btnStageToneReset"),
  stageCapoDisplay: document.getElementById("stageCapoDisplay"),
  btnCapoUp: document.getElementById("btnCapoUp"),
  btnCapoDown: document.getElementById("btnCapoDown"),
  btnStageFontUp: document.getElementById("btnStageFontUp"),
  btnStageFontDown: document.getElementById("btnStageFontDown"),
  btnSaveTone: document.getElementById("btnSaveTone"),
  appToast: document.getElementById("appToast"),

  // Widget Flutuante de Rolagem Automática
  autoscrollWidget: document.getElementById("autoscrollWidget"),
  autoscrollToggleBtn: document.getElementById("autoscrollToggleBtn"),
  autoscrollBtnText: document.getElementById("autoscrollBtnText"),
  btnScrollSpeedDown: document.getElementById("btnScrollSpeedDown"),
  btnScrollSpeedUp: document.getElementById("btnScrollSpeedUp"),
  scrollSpeedDisplay: document.getElementById("scrollSpeedDisplay"),

  // Player de Áudio MP3 Comunitário
  rehearsalAudioPlayer: document.getElementById("rehearsalAudioPlayer"),
  stageAudioTagText: document.getElementById("stageAudioTagText"),
  btnAudioPlay: document.getElementById("btnAudioPlay"),
  audioPlayIcon: document.getElementById("audioPlayIcon"),
  audioProgressBar: document.getElementById("audioProgressBar"),
  audioProgressContainer: document.getElementById("audioProgressContainer"),
  audioTimeDisplay: document.getElementById("audioTimeDisplay"),
  btnAudioSpeed: document.getElementById("btnAudioSpeed"),

  // Miniplayer do YouTube & Streaming (O Domingo / Paulus)
  stageYoutubeContainer: document.getElementById("stageYoutubeContainer"),
  stageYoutubeIframe: document.getElementById("stageYoutubeIframe"),
  youtubeTagTitle: document.getElementById("youtubeTagTitle"),
  btnToggleVideo: document.getElementById("btnToggleVideo"),
  btnToggleVideoText: document.getElementById("btnToggleVideoText"),
  stageStreamingChips: document.getElementById("stageStreamingChips"),
  chipSpotifyLink: document.getElementById("chipSpotifyLink"),
  chipYoutubeLink: document.getElementById("chipYoutubeLink"),

  // Rodapé do Modo Palco
  btnStagePrev: document.getElementById("btnStagePrev"),
  btnStageNext: document.getElementById("btnStageNext"),
  nextButtonLabel: document.getElementById("nextButtonLabel"),
  btnSwapSongTrigger: document.getElementById("btnSwapSongTrigger"),

  // Modais
  swapModal: document.getElementById("swapModal"),
  btnCloseSwapModal: document.getElementById("btnCloseSwapModal"),
  swapModalTitle: document.getElementById("swapModalTitle"),
  swapOptionsContainer: document.getElementById("swapOptionsContainer"),

  // Elementos do Banner Litúrgico
  liturgicalBanner: document.getElementById("liturgicalBanner"),
  bannerColorDot: document.querySelector("#liturgicalBanner .color-dot"),
  bannerColorName: document.getElementById("bannerColorName"),
  bannerTitle: document.getElementById("bannerTitle"),
  bannerDate: document.getElementById("bannerDate"),
  bannerSalmo: document.getElementById("bannerSalmo"),
  btnOpenDatesModal: document.getElementById("btnOpenDatesModal"),

  // Card do Roteiro Dourado
  quickRepTitle: document.getElementById("quickRepTitle"),
  btnPlayRoteiro: document.getElementById("btnPlayRoteiro"),
  navOpenRoteiro: document.getElementById("navOpenRoteiro"),
  navOpenCalendar: document.getElementById("navOpenCalendar"),

  // Modal de Datas (Modelo B)
  datesModal: document.getElementById("datesModal"),
  btnCloseDatesModal: document.getElementById("btnCloseDatesModal"),
  plannedMassesContainer: document.getElementById("plannedMassesContainer"),

  // Header do Modo Palco
  stageHeaderTitle: document.getElementById("stageHeaderTitle"),
  stageHeaderSubtitle: document.getElementById("stageHeaderSubtitle"),

  // Home controls
  songsContainer: document.getElementById("songsContainer"),
  tabLiturgia: document.getElementById("tabLiturgia"),
  tabEspeciais: document.getElementById("tabEspeciais"),
  specialOccasionsBar: document.getElementById("specialOccasionsBar"),
  occasionChips: document.querySelectorAll(".occasion-chip"),
  searchInput: document.getElementById("searchInput"),
  btnClearSearch: document.getElementById("btnClearSearch"),
  btnLoginHeader: document.getElementById("btnLoginHeader"),
  loginModal: document.getElementById("loginModal"),
  btnCloseLoginModal: document.getElementById("btnCloseLoginModal"),
  btnGoogleMock: document.getElementById("btnGoogleMock"),
  btnSubmitLogin: document.getElementById("btnSubmitLogin"),

  // Cifra Avulsa Modal
  cifraModal: document.getElementById("cifraModal"),
  btnCloseCifraModal: document.getElementById("btnCloseCifraModal"),
  btnCloseCifraAction: document.getElementById("btnCloseCifraAction"),
  cifraMoment: document.getElementById("cifraMoment"),
  cifraTitle: document.getElementById("cifraTitle"),
  cifraAuthor: document.getElementById("cifraAuthor"),
  cifraPre: document.getElementById("cifraPre"),
  currentToneDisplay: document.getElementById("currentToneDisplay"),
  btnToneUp: document.getElementById("btnToneUp"),
  btnToneDown: document.getElementById("btnToneDown"),
  btnToneReset: document.getElementById("btnToneReset"),
  btnFontUp: document.getElementById("btnFontUp"),
  btnFontDown: document.getElementById("btnFontDown"),

  // Configurações & Boletim Padrão
  settingsModal: document.getElementById("settingsModal"),
  btnCloseSettingsModal: document.getElementById("btnCloseSettingsModal"),
  navOpenAjustes: document.getElementById("navOpenAjustes"),
  defaultBulletinSelect: document.getElementById("defaultBulletinSelect"),
  folhetoSelect: document.getElementById("folhetoSelect"),
  btnSaveSettings: document.getElementById("btnSaveSettings"),
  realAudioElement: document.getElementById("realAudioElement")
};

// Obter catálogo ativo (prioriza o folheto selecionado: O Domingo vs Caderno Paroquial)
function getActiveCatalog() {
  if (appState.activeFolheto === "o-domingo" && typeof missasODomingo !== 'undefined' && missasODomingo) {
    return missasODomingo;
  }
  return (typeof missasReais !== 'undefined' && missasReais) ? missasReais : missasPlanejadas;
}

function switchActiveFolheto(folhetoId) {
  appState.activeFolheto = folhetoId;
  localStorage.setItem("liturgia_boletim_padrao", folhetoId);
  if (dom.folhetoSelect) dom.folhetoSelect.value = folhetoId;
  if (dom.defaultBulletinSelect) dom.defaultBulletinSelect.value = folhetoId;

  const catalog = getActiveCatalog();
  const availableDates = Object.keys(catalog);
  let targetDate = appState.activeDateKey;
  if (!catalog[targetDate]) {
    targetDate = availableDates[0] || "2026-09-14";
  }

  selectMassDate(targetDate);
  renderHomeSongs();

  const folhetoNome = folhetoId === "o-domingo" ? "O Domingo (Paulus)" : "Caderno Paroquial (Piedade)";
  showToast(`📖 Repertório carregado: ${folhetoNome}`);
}

// ========================================================
// SISTEMA DE AUTENTICAÇÃO OBRIGATÓRIA (TELA INICIAL)
// Suporte a Entrar e Criar Conta Gratuita sem intermediários
// ========================================================
function setAuthMode(mode) {
  appState.authMode = mode;

  if (mode === "login") {
    if (dom.btnModeLogin) dom.btnModeLogin.classList.add("active");
    if (dom.btnModeRegister) dom.btnModeRegister.classList.remove("active");

    if (dom.authLoginTabs) dom.authLoginTabs.classList.remove("hidden");
    if (dom.formAuthRegister) dom.formAuthRegister.classList.add("hidden");

    // Restaura o formulário ativo de acordo com a aba selecionada
    const isEmailTab = dom.tabMethodEmail && dom.tabMethodEmail.classList.contains("active");
    if (dom.formAuthEmail) dom.formAuthEmail.classList.toggle("hidden", !isEmailTab);
    if (dom.formAuthPhone) dom.formAuthPhone.classList.toggle("hidden", isEmailTab);

    if (dom.googleAuthText) dom.googleAuthText.innerText = "Continuar com o Google";
    if (dom.authDividerText) dom.authDividerText.innerText = "ou acesse por credencial";
    if (dom.licenseBadgeText) dom.licenseBadgeText.innerText = "App 100% Gratuito para Músicos";

    if (dom.signupPromptText) {
      dom.signupPromptText.innerHTML = `Não possui conta? <a href="#" id="linkToggleAuthMode">Criar Conta Gratuita</a>`;
      const link = document.getElementById("linkToggleAuthMode");
      if (link) {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          setAuthMode("register");
        });
      }
    }
  } else {
    // Modo Cadastro / Criar Conta
    if (dom.btnModeRegister) dom.btnModeRegister.classList.add("active");
    if (dom.btnModeLogin) dom.btnModeLogin.classList.remove("active");

    // No cadastro, ambos e-mail e celular são preenchidos juntos
    if (dom.authLoginTabs) dom.authLoginTabs.classList.add("hidden");
    if (dom.formAuthEmail) dom.formAuthEmail.classList.add("hidden");
    if (dom.formAuthPhone) dom.formAuthPhone.classList.add("hidden");
    if (dom.formAuthRegister) dom.formAuthRegister.classList.remove("hidden");

    if (dom.googleAuthText) dom.googleAuthText.innerText = "Cadastrar com o Google";
    if (dom.authDividerText) dom.authDividerText.innerText = "ou cadastre com seus dados";
    if (dom.licenseBadgeText) dom.licenseBadgeText.innerText = "Acesso Livre & Gratuito para Músicos";

    if (dom.signupPromptText) {
      dom.signupPromptText.innerHTML = `Já tem uma conta? <a href="#" id="linkToggleAuthMode">Fazer Login</a>`;
      const link = document.getElementById("linkToggleAuthMode");
      if (link) {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          setAuthMode("login");
        });
      }
    }
  }
}

// ========================================================
// MOTOR DE TEMAS LITÚRGICOS DA TELA INICIAL
// (Varia conforme o Tempo Litúrgico da celebração)
// ========================================================
const LITURGICAL_THEMES = {
  "Verde": {
    className: "theme-liturgico-verde",
    label: "Tempo Comum (Verde) • Igreja em Oração",
    color: "#1f6f43",
    description: "Tempo de esperança, fidelidade e vida comunitária"
  },
  "Roxo": {
    className: "theme-liturgico-roxo",
    label: "Advento / Quaresma (Roxo) • Igreja em Oração",
    color: "#6b21a8",
    description: "Tempo de recolhimento, espera vigilante e penitência"
  },
  "Branco": {
    className: "theme-liturgico-branco",
    label: "Páscoa / Natal (Branco & Ouro) • Igreja em Oração",
    color: "#b45309",
    description: "Tempo de júbilo pascal, ressurreição e solenidades"
  },
  "Vermelho": {
    className: "theme-liturgico-vermelho",
    label: "Pentecostes / Ramos (Vermelho) • Igreja em Oração",
    color: "#b91c1c",
    description: "Fogo do Espírito Santo e testemunho dos Santos Mártires"
  }
};

const THEME_CYCLE_KEYS = ["Verde", "Roxo", "Branco", "Vermelho"];

function applyLiturgicalTheme(themeKey) {
  const theme = LITURGICAL_THEMES[themeKey] || LITURGICAL_THEMES["Verde"];
  appState.currentLiturgicalTheme = themeKey;

  if (dom.authScreen) {
    dom.authScreen.classList.remove("theme-liturgico-verde", "theme-liturgico-roxo", "theme-liturgico-branco", "theme-liturgico-vermelho");
    dom.authScreen.classList.add(theme.className);
  }

  if (dom.authLiturgicalTag) {
    dom.authLiturgicalTag.innerText = theme.label;
  }
}

function cycleNextLiturgicalTheme() {
  const currentIndex = THEME_CYCLE_KEYS.indexOf(appState.currentLiturgicalTheme || "Verde");
  const nextIndex = (currentIndex + 1) % THEME_CYCLE_KEYS.length;
  const nextThemeKey = THEME_CYCLE_KEYS[nextIndex];
  applyLiturgicalTheme(nextThemeKey);
  showToast(`🎨 Tema litúrgico alterado: ${LITURGICAL_THEMES[nextThemeKey].label}`);
}

// ========================================================
// SISTEMA DE RECUPERAÇÃO DE SENHA (MODAL INTUITIVO)
// ========================================================
function setupRecoveryEvents() {
  let recoveryChannel = "whatsapp"; // "whatsapp" | "email"

  function openRecoveryModal() {
    if (dom.recoveryModal) {
      dom.recoveryModal.classList.remove("hidden");
      showStep1();
    }
  }

  function closeRecoveryModal() {
    if (dom.recoveryModal) {
      dom.recoveryModal.classList.add("hidden");
    }
  }

  function showStep1() {
    if (dom.recoveryStep1) dom.recoveryStep1.classList.remove("hidden");
    if (dom.recoveryStep2) dom.recoveryStep2.classList.add("hidden");
    if (dom.recoveryStep3) dom.recoveryStep3.classList.add("hidden");
  }

  function showStep2(channel) {
    recoveryChannel = channel;
    if (dom.recoveryStep1) dom.recoveryStep1.classList.add("hidden");
    if (dom.recoveryStep2) dom.recoveryStep2.classList.remove("hidden");
    if (dom.recoveryStep3) dom.recoveryStep3.classList.add("hidden");

    if (channel === "whatsapp") {
      if (dom.lblRecoveryInput) dom.lblRecoveryInput.innerText = "Informe seu Celular cadastrado (com DDD):";
      if (dom.recoveryInputContact) {
        dom.recoveryInputContact.type = "tel";
        dom.recoveryInputContact.placeholder = "(11) 98765-4321";
      }
    } else {
      if (dom.lblRecoveryInput) dom.lblRecoveryInput.innerText = "Informe seu E-mail cadastrado:";
      if (dom.recoveryInputContact) {
        dom.recoveryInputContact.type = "email";
        dom.recoveryInputContact.placeholder = "exemplo@gmail.com";
      }
    }
  }

  function showStep3() {
    const contactValue = dom.recoveryInputContact ? dom.recoveryInputContact.value.trim() : "";
    if (!contactValue) {
      alert("Por favor, informe seu contato cadastrado para receber o código.");
      return;
    }

    if (dom.recoveryStep2) dom.recoveryStep2.classList.add("hidden");
    if (dom.recoveryStep3) dom.recoveryStep3.classList.remove("hidden");

    if (dom.recoverySentNotice) {
      const channelLabel = recoveryChannel === "whatsapp" ? `WhatsApp/SMS (${contactValue})` : `E-mail (${contactValue})`;
      dom.recoverySentNotice.innerText = `✅ Código de 6 dígitos enviado para ${channelLabel}! Digite o código e crie sua nova senha:`;
    }
  }

  function finishPasswordReset() {
    const code = dom.recoveryCodeInput ? dom.recoveryCodeInput.value.trim() : "";
    const pass1 = dom.recoveryNewPassword ? dom.recoveryNewPassword.value.trim() : "";
    const pass2 = dom.recoveryConfirmPassword ? dom.recoveryConfirmPassword.value.trim() : "";

    if (!code || code.length < 4) {
      alert("Por favor, digite o código de verificação recebido.");
      return;
    }

    if (!pass1 || pass1.length < 6) {
      alert("A nova senha deve possuir pelo menos 6 caracteres.");
      return;
    }

    if (pass1 !== pass2) {
      alert("As senhas digitadas não coincidem. Verifique e tente novamente.");
      return;
    }

    closeRecoveryModal();
    showToast("🔑 Senha redefinida com sucesso! Acessando repertório...");

    // Loga o usuário diretamente com suas credenciais atualizadas
    loginSuccess({
      name: "Diogo Nunes",
      email: "diogo.musica@paroquia.com",
      phone: "(11) 98765-4321",
      method: "Recuperação de Senha",
      role: "Músico Litúrgico"
    });
  }

  // Event Listeners da Recuperação
  if (dom.linkForgotPassword) {
    dom.linkForgotPassword.addEventListener("click", (e) => {
      e.preventDefault();
      openRecoveryModal();
    });
  }

  if (dom.btnCloseRecoveryModal) {
    dom.btnCloseRecoveryModal.addEventListener("click", closeRecoveryModal);
  }

  if (dom.btnRecoverViaWhatsApp) {
    dom.btnRecoverViaWhatsApp.addEventListener("click", () => showStep2("whatsapp"));
  }

  if (dom.btnRecoverViaEmail) {
    dom.btnRecoverViaEmail.addEventListener("click", () => showStep2("email"));
  }

  if (dom.btnBackToRecoveryStep1) {
    dom.btnBackToRecoveryStep1.addEventListener("click", showStep1);
  }

  if (dom.btnSendRecoveryCode) {
    dom.btnSendRecoveryCode.addEventListener("click", showStep3);
  }

  if (dom.btnSubmitNewPassword) {
    dom.btnSubmitNewPassword.addEventListener("click", finishPasswordReset);
  }
}

function setupAuthEvents() {
  // Alternar Modo: Entrar vs Criar Conta
  if (dom.btnModeLogin) {
    dom.btnModeLogin.addEventListener("click", () => setAuthMode("login"));
  }
  if (dom.btnModeRegister) {
    dom.btnModeRegister.addEventListener("click", () => setAuthMode("register"));
  }

  // Alternar Método de Credencial (somente no Modo Entrar): E-mail vs Celular/SMS
  if (dom.tabMethodEmail && dom.tabMethodPhone) {
    dom.tabMethodEmail.addEventListener("click", () => {
      dom.tabMethodEmail.classList.add("active");
      dom.tabMethodPhone.classList.remove("active");
      if (dom.formAuthEmail) dom.formAuthEmail.classList.remove("hidden");
      if (dom.formAuthPhone) dom.formAuthPhone.classList.add("hidden");
    });

    dom.tabMethodPhone.addEventListener("click", () => {
      dom.tabMethodPhone.classList.add("active");
      dom.tabMethodEmail.classList.remove("active");
      if (dom.formAuthPhone) dom.formAuthPhone.classList.remove("hidden");
      if (dom.formAuthEmail) dom.formAuthEmail.classList.add("hidden");
    });
  }

  // 1. Acesso com Google (1 Toque - Válido para Login ou Cadastro)
  if (dom.btnGoogleAuth) {
    dom.btnGoogleAuth.addEventListener("click", () => {
      const isRegister = (appState.authMode === "register");
      loginSuccess({
        name: "Diogo Nunes",
        email: "diogo.nunes@gmail.com",
        phone: "(11) 98765-4321", // Garante celular e e-mail vinculados para recuperação
        method: isRegister ? "Google (Cadastro)" : "Google (Login)",
        role: "Músico / Animador Litúrgico"
      });
    });
  }

  // 2. Login por E-mail & Senha
  if (dom.formAuthEmail) {
    dom.formAuthEmail.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = dom.authInputEmail.value.trim() || "diogo.musica@paroquia.com";
      const namePart = email.split("@")[0].replace(".", " ");
      const formattedName = namePart.charAt(0).toUpperCase() + namePart.slice(1);

      loginSuccess({
        name: formattedName,
        email: email,
        phone: "(11) 98765-4321",
        method: "E-mail (Login)",
        role: "Músico Litúrgico"
      });
    });
  }

  // 3. Login por Celular / SMS
  if (dom.formAuthPhone) {
    dom.formAuthPhone.addEventListener("submit", (e) => {
      e.preventDefault();
      const phone = dom.authInputPhone.value.trim() || "(11) 98765-4321";
      loginSuccess({
        name: `Músico (${phone})`,
        email: "diogo.musica@paroquia.com",
        phone: phone,
        method: "SMS (Login)",
        role: "Músico Litúrgico"
      });
    });
  }

  // 4. Formulário Unificado de Cadastro (Exige Nome, E-mail e Celular para Recuperação)
  if (dom.formAuthRegister) {
    dom.formAuthRegister.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = (dom.registerName && dom.registerName.value.trim()) || "Diogo Nunes";
      const email = (dom.registerEmail && dom.registerEmail.value.trim()) || "diogo.musica@paroquia.com";
      const phone = (dom.registerPhone && dom.registerPhone.value.trim()) || "(11) 98765-4321";
      const pass = (dom.registerPassword && dom.registerPassword.value.trim()) || "";
      const confirmPass = (dom.registerConfirmPassword && dom.registerConfirmPassword.value.trim()) || "";

      if (pass && confirmPass && pass !== confirmPass) {
        alert("As senhas informadas não conferem. Por favor, digite novamente.");
        return;
      }

      loginSuccess({
        name: name,
        email: email,
        phone: phone,
        method: "Cadastro com Recuperação Vinculada",
        role: "Músico Litúrgico"
      });
      showToast("✅ Conta criada com sucesso! E-mail e Celular vinculados.");
    });
  }

  // Clique no Selo de Tempo Litúrgico para alternar (Verde -> Roxo -> Branco -> Vermelho)
  if (dom.authLiturgicalSeasonBadge) {
    dom.authLiturgicalSeasonBadge.style.cursor = "pointer";
    dom.authLiturgicalSeasonBadge.addEventListener("click", () => {
      cycleNextLiturgicalTheme();
    });
  }

  // Configura fluxo de recuperação
  setupRecoveryEvents();

  const initialToggleLink = document.getElementById("linkToggleAuthMode");
  if (initialToggleLink) {
    initialToggleLink.addEventListener("click", (e) => {
      e.preventDefault();
      setAuthMode(appState.authMode === "login" ? "register" : "login");
    });
  }

  // Logout / Perfil
  if (dom.btnLoginHeader) {
    dom.btnLoginHeader.addEventListener("click", () => {
      if (confirm("Deseja desconectar sua conta e voltar à tela inicial?")) {
        logoutUser();
      }
    });
  }
}

// ========================================================
// GERENCIADOR CENTRAL DE TELAS (Garante 100% Tela Cheia no Celular)
// ========================================================
function hideAllScreens() {
  if (dom.authScreen) dom.authScreen.classList.add("hidden");
  if (dom.massesScreen) dom.massesScreen.classList.add("hidden");
  if (dom.homeScreen) dom.homeScreen.classList.add("hidden");
  if (dom.audioScreen) dom.audioScreen.classList.add("hidden");
  if (dom.stageScreen) dom.stageScreen.classList.add("hidden");
}

// ========================================================
// TELA 1: HUB DE SELEÇÃO DE MISSAS (TELA PRINCIPAL PÓS-LOGIN)
// ========================================================
function openMassesScreen() {
  stopRehearsalAudio();
  stopAutoScroll();
  hideAllScreens();
  if (dom.massesScreen) dom.massesScreen.classList.remove("hidden");
  appState.currentScreen = "masses";

  const activeTab = document.querySelector(".month-tab-btn.active");
  const currentMonth = activeTab ? activeTab.dataset.month : "todos";
  const query = dom.massSearchInput ? dom.massSearchInput.value : "";
  renderMassesHub(currentMonth, query);
}

function openHomeScreenForMass(dateKey) {
  stopRehearsalAudio();
  stopAutoScroll();
  if (dateKey) selectMassDate(dateKey);
  hideAllScreens();
  if (dom.homeScreen) dom.homeScreen.classList.remove("hidden");
  appState.currentScreen = "home";
}

function openAudioScreen(trackIndex = 0, autoStart = false) {
  stopAutoScroll();
  if (typeof trackIndex === "number" && trackIndex >= 0) {
    appState.currentAudioTrackIndex = trackIndex;
  }
  hideAllScreens();
  if (dom.audioScreen) dom.audioScreen.classList.remove("hidden");
  appState.currentScreen = "audio";

  loadAudioStudioTrack(appState.currentAudioTrackIndex, autoStart);
}

function renderMassesHub(monthFilter = "todos", searchQuery = "") {
  const catalog = getActiveCatalog();
  const dateKeys = Object.keys(catalog);
  if (dateKeys.length === 0) return;

  // 1. Atualizar o Painel Superior com a Missa Selecionada Atual
  let heroDateKey = appState.activeDateKey || dateKeys[0];
  const heroMass = catalog[heroDateKey] || catalog[dateKeys[0]];
  if (heroMass) {
    if (dom.nextMassTitle) dom.nextMassTitle.innerText = heroMass.title;
    if (dom.nextMassDate) dom.nextMassDate.innerText = `${heroMass.dateFormatted} • ${heroMass.ano}`;
    if (dom.nextMassSalmo) dom.nextMassSalmo.innerText = `Salmo: ${heroMass.salmo}`;
    if (dom.selectedMassTag) {
      dom.selectedMassTag.innerText = `✓ MISSA SELECIONADA (${heroMass.shortDate})`;
    }
    if (dom.nextMassHeroCard) {
      dom.nextMassHeroCard.classList.toggle("theme-mariano-hero", heroMass.bannerTheme === "mariano");
    }
    if (dom.nextMassPill) {
      if (heroMass.bannerTheme === "mariano") {
        dom.nextMassPill.innerHTML = `👑 Solenidade Mariana`;
        dom.nextMassPill.style.color = "#93c5fd";
      } else {
        dom.nextMassPill.innerHTML = `🟢 ${heroMass.cor || "Tempo Comum"}`;
        dom.nextMassPill.style.color = "#86efac";
      }
    }
  }

  // 2. Renderizar Lista Selecionável de Todas as Missas Planejadas
  if (!dom.massesCardFeed) return;
  dom.massesCardFeed.innerHTML = "";

  const query = searchQuery.trim().toLowerCase();

  dateKeys.forEach(dateKey => {
    const mass = catalog[dateKey];
    if (!mass) return;

    // Filtro por Mês
    if (monthFilter === "outubro" && !dateKey.startsWith("2026-10")) return;
    if (monthFilter === "novembro" && (!dateKey.startsWith("2026-11") || dateKey === "2026-11-29")) return;
    if (monthFilter === "advento" && dateKey !== "2026-11-29" && !dateKey.startsWith("2026-12")) return;

    // Filtro por Busca de Texto
    if (query) {
      const matchTitle = mass.title.toLowerCase().includes(query);
      const matchDate = (mass.shortDate + " " + mass.dateFormatted).toLowerCase().includes(query);
      const matchSalmo = (mass.salmo || "").toLowerCase().includes(query);
      if (!matchTitle && !matchDate && !matchSalmo) return;
    }

    const isSelected = dateKey === appState.activeDateKey;
    const isMariano = mass.bannerTheme === "mariano";

    let colorDotClass = "mass-hub-color-dot";
    if (isMariano) colorDotClass += " blue";
    else if (mass.cor && mass.cor.toLowerCase().includes("branco")) colorDotClass += " gold";
    else if (mass.cor && mass.cor.toLowerCase().includes("roxo")) colorDotClass += " purple";

    const card = document.createElement("div");
    card.className = `mass-hub-card ${isSelected ? "active" : ""} ${isMariano ? "card-mariano" : ""}`;
    card.innerHTML = `
      <div class="mass-hub-card-main">
        <div class="mass-hub-info">
          <div class="mass-hub-top-row">
            <span class="${colorDotClass}"></span>
            <span class="mass-hub-date-badge">📅 ${mass.shortDate}</span>
            <span class="mass-hub-meta">• ${mass.ano}</span>
            ${isMariano ? '<span class="mariano-pill">👑 Solenidade</span>' : ''}
          </div>
          <h4 class="mass-hub-title">${mass.title}</h4>
          <p class="mass-hub-salmo">${mass.salmo}</p>
          <span class="mass-hub-meta">🎵 ${mass.songs ? mass.songs.length : 10} cantos com áudio e cifras</span>
        </div>
        <div class="mass-hub-action-col">
          <span class="mass-radio-indicator">
            ${isSelected ? "◉ Selecionada" : "○ Selecionar"}
          </span>
        </div>
      </div>
      ${isSelected ? `
        <div class="mass-card-selected-bar">
          <button type="button" class="btn-card-quick" data-action="plan">📋 Roteiro</button>
          <button type="button" class="btn-card-quick" data-action="audio">🎧 Ouvir Áudios</button>
          <button type="button" class="btn-card-quick primary-quick" data-action="stage">🎼 Cifras</button>
        </div>
      ` : ""}
    `;

    // Ao clicar no card, seleciona esta missa como a ativa e atualiza o painel
    card.addEventListener("click", (e) => {
      const quickBtn = e.target.closest(".btn-card-quick");
      if (quickBtn) {
        e.stopPropagation();
        const action = quickBtn.dataset.action;
        selectMassDate(dateKey);
        if (action === "plan") openHomeScreenForMass(dateKey);
        else if (action === "audio") openAudioScreen(0, false);
        else if (action === "stage") openStageMode(0, "masses");
        return;
      }

      selectMassDate(dateKey);
      renderMassesHub(monthFilter, searchQuery);
      showToast(`✓ Missa de ${mass.shortDate} selecionada! Escolha uma opção.`);
    });

    dom.massesCardFeed.appendChild(card);
  });
}

function setupMassesEvents() {
  // 3 Caminhos do Painel Superior da Missa Selecionada
  if (dom.btnHeroOpenRepertoire) {
    dom.btnHeroOpenRepertoire.addEventListener("click", () => {
      openHomeScreenForMass(appState.activeDateKey || "2026-09-07");
    });
  }

  if (dom.btnHeroOpenAudio) {
    dom.btnHeroOpenAudio.addEventListener("click", () => {
      selectMassDate(appState.activeDateKey || "2026-09-07");
      openAudioScreen(0, false);
    });
  }

  if (dom.btnHeroOpenStage) {
    dom.btnHeroOpenStage.addEventListener("click", () => {
      selectMassDate(appState.activeDateKey || "2026-09-07");
      openStageMode(0, "masses");
    });
  }

  // Voltar da Home para a Tela de Missas
  if (dom.btnHomeBackToMasses) {
    dom.btnHomeBackToMasses.addEventListener("click", () => {
      openMassesScreen();
    });
  }

  // Barra de Busca de Missas
  if (dom.massSearchInput) {
    dom.massSearchInput.addEventListener("input", (e) => {
      const activeTab = document.querySelector(".month-tab-btn.active");
      const currentMonth = activeTab ? activeTab.dataset.month : "todos";
      renderMassesHub(currentMonth, e.target.value);
      if (dom.btnClearMassSearch) {
        dom.btnClearMassSearch.classList.toggle("hidden", !e.target.value);
      }
    });
  }

  if (dom.btnClearMassSearch) {
    dom.btnClearMassSearch.addEventListener("click", () => {
      if (dom.massSearchInput) dom.massSearchInput.value = "";
      dom.btnClearMassSearch.classList.add("hidden");
      const activeTab = document.querySelector(".month-tab-btn.active");
      const currentMonth = activeTab ? activeTab.dataset.month : "todos";
      renderMassesHub(currentMonth, "");
    });
  }

  // Filtro por Mês
  const monthButtons = document.querySelectorAll(".month-tab-btn");
  monthButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      monthButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const query = dom.massSearchInput ? dom.massSearchInput.value : "";
      renderMassesHub(btn.dataset.month, query);
    });
  });

  // Navegação da Barra Inferior Unificada (Tela de Missas)
  if (dom.navMassesTab) {
    dom.navMassesTab.addEventListener("click", () => openMassesScreen());
  }
  if (dom.navHomeTabFromMasses) {
    dom.navHomeTabFromMasses.addEventListener("click", () => openHomeScreenForMass(appState.activeDateKey || "2026-09-07"));
  }
  if (dom.navAudioTabFromMasses) {
    dom.navAudioTabFromMasses.addEventListener("click", () => openAudioScreen(0, false));
  }
  if (dom.navStageTabFromMasses) {
    dom.navStageTabFromMasses.addEventListener("click", () => {
      selectMassDate(appState.activeDateKey || "2026-09-07");
      openStageMode(0, "masses");
    });
  }

  // Perfil do Músico no topo da Tela de Missas
  if (dom.btnUserMassesHeader) {
    dom.btnUserMassesHeader.addEventListener("click", () => {
      if (confirm("Deseja desconectar sua conta e voltar à tela inicial?")) {
        logoutUser();
      }
    });
  }
}

// ========================================================
// TELA 3: ESTÚDIO DE ÁUDIO / OUVIR REPERTÓRIO (#audioScreen)
// ========================================================
function extractCleanLyrics(cifraText) {
  if (!cifraText) return "";
  return cifraText
    .split("\n")
    .map(line => {
      // Remove tags de acordes entre colchetes [Dm], [G7] mantendo tags de seção como [REFRÃO]
      if (/^\s*\[(Refrão|Estrofe|Estrofes|Solo|Todos|Conclusão|Pós-Comunhão|Final)[^\]]*\]\s*$/i.test(line.trim())) {
        return line.trim();
      }
      // Pula linhas que são puramente acordes
      const nonMarkerTokens = line.trim().split(/\s+/).filter(t => t && !/^\(?(\d+ª|bis|R\.|\*|\+)\)?$/i.test(t));
      if (nonMarkerTokens.length > 0 && nonMarkerTokens.every(isChordToken)) {
        return null;
      }
      // Remove acordes inline [C]
      return line.replace(/\[([A-G][b#]?[^\]]*)\]/g, "").trimEnd();
    })
    .filter(line => line !== null)
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

function loadAudioStudioTrack(index, autoPlay = false) {
  if (!appState.activeMissa || appState.activeMissa.length === 0) return;
  const validIndex = Math.max(0, Math.min(index, appState.activeMissa.length - 1));
  appState.currentAudioTrackIndex = validIndex;
  appState.currentStageIndex = validIndex;

  stopRehearsalAudio();
  appState.audioCurrentTime = 0;
  appState.audioDuration = 36;

  const song = appState.activeMissa[validIndex];
  if (!song) return;

  if (dom.deckMomentBadge) dom.deckMomentBadge.innerText = `${song.step || (validIndex + 1)}. ${song.moment}`;
  if (dom.deckSongTitle) dom.deckSongTitle.innerText = song.title;
  if (dom.deckSongMeta) dom.deckSongMeta.innerText = `${song.author} • Tom Original: ${song.tone}`;
  if (dom.deckLyricsText) dom.deckLyricsText.innerText = extractCleanLyrics(song.cifra);
  if (dom.deckStatusBadge) {
    dom.deckStatusBadge.innerText = autoPlay ? "🔊 Reproduzindo Agora" : "🔊 Pronto para Ouvir";
  }

  updateAudioDisplay();
  renderAudioTracksList();

  if (autoPlay) {
    startRehearsalAudio();
  }
}

function renderAudioTracksList() {
  if (!dom.audioTracksContainer) return;
  dom.audioTracksContainer.innerHTML = "";

  if (dom.audioTracksCountBadge) {
    dom.audioTracksCountBadge.innerText = `${appState.activeMissa.length} cantos`;
  }

  appState.activeMissa.forEach((song, idx) => {
    const isCurrent = idx === appState.currentAudioTrackIndex;
    const isPlayingThis = isCurrent && appState.isPlayingAudio;

    const row = document.createElement("div");
    row.className = `audio-track-row ${isCurrent ? "playing-track" : ""}`;
    row.innerHTML = `
      <div class="audio-track-left">
        <div class="audio-track-num">${isPlayingThis ? "🔊" : (idx + 1)}</div>
        <div class="audio-track-info">
          <span class="audio-track-moment">${song.moment}</span>
          <div class="audio-track-title">${song.title}</div>
          <div class="audio-track-author">${song.author} • Tom: ${song.tone}</div>
        </div>
      </div>
      <button type="button" class="btn-track-play">
        ${isPlayingThis ? "⏸ Pausar" : (isCurrent ? "▶ Tocar" : "▶ Ouvir")}
      </button>
    `;

    row.addEventListener("click", () => {
      if (idx === appState.currentAudioTrackIndex) {
        toggleRehearsalAudio();
        renderAudioTracksList();
      } else {
        loadAudioStudioTrack(idx, true);
      }
    });

    dom.audioTracksContainer.appendChild(row);
  });
}

function setupAudioStudioEvents() {
  if (dom.btnAudioBackToMasses) {
    dom.btnAudioBackToMasses.addEventListener("click", () => openMassesScreen());
  }

  if (dom.btnAudioGoToStage) {
    dom.btnAudioGoToStage.addEventListener("click", () => {
      openStageMode(appState.currentAudioTrackIndex, "audio");
    });
  }

  if (dom.btnDeckPlayPause) {
    dom.btnDeckPlayPause.addEventListener("click", () => {
      toggleRehearsalAudio();
      renderAudioTracksList();
    });
  }

  if (dom.btnDeckPrev) {
    dom.btnDeckPrev.addEventListener("click", () => {
      const prevIdx = appState.currentAudioTrackIndex > 0 ? appState.currentAudioTrackIndex - 1 : appState.activeMissa.length - 1;
      loadAudioStudioTrack(prevIdx, appState.isPlayingAudio);
    });
  }

  if (dom.btnDeckNext) {
    dom.btnDeckNext.addEventListener("click", () => {
      const nextIdx = (appState.currentAudioTrackIndex + 1) % appState.activeMissa.length;
      loadAudioStudioTrack(nextIdx, appState.isPlayingAudio);
    });
  }

  if (dom.btnDeckRewind) {
    dom.btnDeckRewind.addEventListener("click", () => {
      appState.audioCurrentTime = Math.max(0, appState.audioCurrentTime - 10);
      if (dom.realAudioElement && !isNaN(dom.realAudioElement.duration)) {
        dom.realAudioElement.currentTime = appState.audioCurrentTime;
      }
      updateAudioDisplay();
    });
  }

  if (dom.btnDeckForward) {
    dom.btnDeckForward.addEventListener("click", () => {
      appState.audioCurrentTime = Math.min(appState.audioDuration, appState.audioCurrentTime + 10);
      if (dom.realAudioElement && !isNaN(dom.realAudioElement.duration)) {
        dom.realAudioElement.currentTime = appState.audioCurrentTime;
      }
      updateAudioDisplay();
    });
  }

  if (dom.deckProgressContainer) {
    dom.deckProgressContainer.addEventListener("click", (e) => {
      const rect = dom.deckProgressContainer.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const pct = Math.max(0, Math.min(1, clickX / rect.width));
      appState.audioCurrentTime = pct * appState.audioDuration;
      if (dom.realAudioElement && !isNaN(dom.realAudioElement.duration)) {
        dom.realAudioElement.currentTime = appState.audioCurrentTime;
      }
      updateAudioDisplay();
    });
  }

  if (dom.btnDeckAutoPlay) {
    dom.btnDeckAutoPlay.addEventListener("click", () => {
      appState.audioAutoPlaySequence = !appState.audioAutoPlaySequence;
      dom.btnDeckAutoPlay.classList.toggle("active", appState.audioAutoPlaySequence);
      dom.btnDeckAutoPlay.innerHTML = appState.audioAutoPlaySequence
        ? `<span>🔁 Tocar em Sequência</span>`
        : `<span>🔂 Tocar 1 Faixa</span>`;
    });
  }

  const speedBtns = document.querySelectorAll(".deck-speed-btn");
  speedBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      speedBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const spd = parseFloat(btn.dataset.speed) || 1.0;
      appState.audioPlaybackRate = spd;
      if (dom.btnAudioSpeed) dom.btnAudioSpeed.innerText = `${spd}x`;
      if (dom.realAudioElement) dom.realAudioElement.playbackRate = spd;
    });
  });

  if (dom.btnToggleDeckLyrics) {
    dom.btnToggleDeckLyrics.addEventListener("click", () => {
      if (!dom.deckLyricsDrawer) return;
      const isHidden = dom.deckLyricsDrawer.classList.toggle("hidden");
      if (dom.deckLyricsArrow) dom.deckLyricsArrow.innerText = isHidden ? "▼" : "▲";
    });
  }

  // Barra inferior na Tela de Áudio
  if (dom.navMassesFromAudio) {
    dom.navMassesFromAudio.addEventListener("click", () => openMassesScreen());
  }
  if (dom.navHomeFromAudio) {
    dom.navHomeFromAudio.addEventListener("click", () => openHomeScreenForMass(appState.activeDateKey));
  }
  if (dom.navStageFromAudio) {
    dom.navStageFromAudio.addEventListener("click", () => openStageMode(appState.currentAudioTrackIndex, "audio"));
  }
}

// URL do Webhook do Google Sheets para Registro de Usuários
const GOOGLE_SHEETS_USERS_WEBHOOK = "https://script.google.com/macros/s/AKfycbz4Gs_ByQL7OWJl9IG2tEeeajt9Vz3AxbJNsVpfUbuHHfnHiUoWVQthKZVIIxoRViso_w/exec";

function syncUserToGoogleSheets(user) {
  if (!GOOGLE_SHEETS_USERS_WEBHOOK || !user) return;
  try {
    fetch(GOOGLE_SHEETS_USERS_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        method: user.method || "Acesso Direto"
      })
    }).then(res => res.json()).then(data => {
      console.log("Usuário registrado no Google Sheets:", data);
    }).catch(err => {
      console.warn("Nota: registro em segundo plano no Google Sheets:", err);
    });
  } catch (e) {
    console.warn("Erro ao sincronizar com Google Sheets:", e);
  }
}

function loginSuccess(user, shouldSync = true) {
  appState.isAuthenticated = true;
  appState.currentUser = user;
  localStorage.setItem("liturgia_user_session", JSON.stringify(user));

  if (dom.userDisplayName) {
    dom.userDisplayName.innerText = `${user.name}`;
  }
  if (dom.userDisplayNameMasses) {
    dom.userDisplayNameMasses.innerText = `${user.name}`;
  }

  // Registra silenciosamente na sua planilha do Google Drive
  if (shouldSync) {
    syncUserToGoogleSheets(user);
  }

  openMassesScreen();
  showToast(`✝ Bem-vindo, ${user.name}! Escolha a missa.`);
}

function logoutUser() {
  appState.isAuthenticated = false;
  appState.currentUser = null;
  localStorage.removeItem("liturgia_user_session");

  stopRehearsalAudio();
  stopAutoScroll();
  hideAllScreens();
  if (dom.authScreen) dom.authScreen.classList.remove("hidden");
  appState.currentScreen = "auth";

  showToast("Você desconectou da sua conta.");
}

// Inicialização da Aplicação
function initApp() {
  setupAuthEvents();
  setupMassesEvents();
  setupHomeEvents();
  setupAudioStudioEvents();
  setupStageEvents();
  loadSavedBulletin();
  applyLiturgicalTheme("Verde");

  const catalog = getActiveCatalog();
  const dates = Object.keys(catalog);
  const savedDate = localStorage.getItem("liturgia_selected_mass_date");
  const initialDate = (savedDate && catalog[savedDate])
    ? savedDate
    : (catalog["2026-10-18"] ? "2026-10-18" : (dates[0] || "2026-10-25"));
  selectMassDate(initialDate);

  // Verificar se o usuário já possui sessão ativa gravada
  const savedSession = localStorage.getItem("liturgia_user_session");
  if (savedSession) {
    try {
      const user = JSON.parse(savedSession);
      loginSuccess(user, false);
    } catch(e) {
      logoutUser();
    }
  } else {
    hideAllScreens();
    if (dom.authScreen) dom.authScreen.classList.remove("hidden");
    appState.currentScreen = "auth";
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

// ========================================================
// PREFERÊNCIAS DO MÚSICO (BOLETIM PADRÃO EM LOCALSTORAGE)
// ========================================================
function loadSavedBulletin() {
  const saved = localStorage.getItem("liturgia_boletim_padrao") || "caderno-piedade";
  appState.activeFolheto = saved;
  if (dom.folhetoSelect) dom.folhetoSelect.value = saved;
  if (dom.defaultBulletinSelect) dom.defaultBulletinSelect.value = saved;
}

function saveBulletinPreference() {
  const selected = dom.defaultBulletinSelect.value;
  switchActiveFolheto(selected);
  dom.settingsModal.classList.add("hidden");
}

// ========================================================
// SISTEMA DE MISSAS PLANEJADAS POR DATA (MODELO B)
// ========================================================
function openDatesModal() {
  openMassesScreen();
}

function selectMassDate(dateKey) {
  const catalog = getActiveCatalog();
  const selectedMass = catalog[dateKey];
  if (!selectedMass) return;

  appState.activeDateKey = dateKey;
  localStorage.setItem("liturgia_selected_mass_date", dateKey);
  appState.activeMissa = JSON.parse(JSON.stringify(selectedMass.songs));

  const shortTitle = selectedMass.title.split("—")[0].trim();

  // 1. Atualizar Subtítulos dos Headers (Home e Audio)
  if (dom.homeHeaderSubtitle) {
    dom.homeHeaderSubtitle.innerText = `${selectedMass.shortDate}/2026 • Igreja em Oração`;
  }
  if (dom.audioHeaderSubtitle) {
    dom.audioHeaderSubtitle.innerText = `${selectedMass.shortDate}/2026 • ${shortTitle}`;
  }

  // 2. Atualizar Banner da Home e Tematização Litúrgica (Verde vs Mariano)
  if (dom.bannerTitle) dom.bannerTitle.innerText = selectedMass.title;
  if (dom.bannerDate) dom.bannerDate.innerText = `${selectedMass.dateFormatted} • ${selectedMass.ano}`;
  if (dom.bannerSalmo) dom.bannerSalmo.innerText = `Salmo: ${selectedMass.salmo}`;
  if (dom.bannerColorName) dom.bannerColorName.innerText = selectedMass.cor || "Verde Litúrgico";

  if (dom.liturgicalBanner) {
    if (selectedMass.bannerTheme === "mariano") {
      dom.liturgicalBanner.classList.add("theme-mariano");
      if (dom.bannerColorDot) {
        dom.bannerColorDot.classList.remove("green-dot");
        dom.bannerColorDot.classList.add("blue-dot");
      }
    } else {
      dom.liturgicalBanner.classList.remove("theme-mariano");
      if (dom.bannerColorDot) {
        dom.bannerColorDot.classList.remove("blue-dot");
        dom.bannerColorDot.classList.add("green-dot");
      }
    }
  }

  // 3. Atualizar Header do Modo Cifras & Execução
  if (dom.stageHeaderTitle) dom.stageHeaderTitle.innerText = `Missa • ${shortTitle}`;
  if (dom.stageHeaderSubtitle) dom.stageHeaderSubtitle.innerText = `${selectedMass.shortDate}/2026 • ${selectedMass.ano}`;

  // 4. Renderizar Músicas na Home e no Estúdio de Áudio
  renderHomeSongs();
  renderAudioTracksList();
}

// ========================================================
// SETUP DA TELA DE ROTEIRO (HOME)
// ========================================================
function setupHomeEvents() {
  // Voltar da Home para a Tela de Seleção de Missas
  if (dom.btnHomeBackToMasses) {
    dom.btnHomeBackToMasses.addEventListener("click", () => openMassesScreen());
  }

  if (dom.btnOpenDatesModal) {
    dom.btnOpenDatesModal.addEventListener("click", () => openMassesScreen());
  }
  if (dom.navOpenCalendar) {
    dom.navOpenCalendar.addEventListener("click", () => openMassesScreen());
  }
  if (dom.btnCloseDatesModal) {
    dom.btnCloseDatesModal.addEventListener("click", () => dom.datesModal.classList.add("hidden"));
  }

  // Atalhos para Ouvir Áudios da Missa
  if (dom.btnHomeOpenAudio) {
    dom.btnHomeOpenAudio.addEventListener("click", () => openAudioScreen(0, false));
  }
  if (dom.navOpenAudioFromHome) {
    dom.navOpenAudioFromHome.addEventListener("click", () => openAudioScreen(0, false));
  }

  // Abertura do Modo Cifras & Execução da Missa
  if (dom.btnPlayRoteiro) {
    dom.btnPlayRoteiro.addEventListener("click", () => openStageMode(0, "home"));
  }
  if (dom.navOpenRoteiro) {
    dom.navOpenRoteiro.addEventListener("click", () => openStageMode(0, "home"));
  }

  // Ajustes de Boletim Litúrgico e Preferências
  if (dom.navOpenAjustes) dom.navOpenAjustes.addEventListener("click", () => dom.settingsModal.classList.remove("hidden"));
  if (dom.btnCloseSettingsModal) dom.btnCloseSettingsModal.addEventListener("click", () => dom.settingsModal.classList.add("hidden"));
  if (dom.btnSaveSettings) dom.btnSaveSettings.addEventListener("click", saveBulletinPreference);
  if (dom.settingsModal) {
    dom.settingsModal.addEventListener("click", (e) => {
      if (e.target === dom.settingsModal) dom.settingsModal.classList.add("hidden");
    });
  }

  // Sincronizar seletor de folheto da Home
  if (dom.folhetoSelect) {
    dom.folhetoSelect.addEventListener("change", (e) => {
      switchActiveFolheto(e.target.value);
    });
  }

  // Voltar do Modo Cifras para a tela de origem (Missas, Áudio ou Roteiro)
  if (dom.btnBackFromStage) {
    dom.btnBackFromStage.addEventListener("click", () => {
      stopRehearsalAudio();
      stopAutoScroll();

      if (appState.stageOriginScreen === "masses") {
        openMassesScreen();
      } else if (appState.stageOriginScreen === "audio") {
        openAudioScreen(appState.currentStageIndex, false);
      } else {
        openHomeScreenForMass(appState.activeDateKey);
      }
    });
  }

  // Busca e Filtros no Roteiro
  if (dom.searchInput) {
    dom.searchInput.addEventListener("input", (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (dom.btnClearSearch) dom.btnClearSearch.classList.toggle("hidden", query.length === 0);
      renderHomeSongs(query);
    });
  }

  if (dom.btnClearSearch) {
    dom.btnClearSearch.addEventListener("click", () => {
      if (dom.searchInput) dom.searchInput.value = "";
      dom.btnClearSearch.classList.add("hidden");
      renderHomeSongs();
    });
  }
}

// Renderizar músicas na tela de Planejamento de Roteiro
function renderHomeSongs(query = "") {
  if (!dom.songsContainer) return;
  dom.songsContainer.innerHTML = "";

  appState.activeMissa.forEach((song, index) => {
    if (query) {
      const match = song.title.toLowerCase().includes(query) ||
                    song.moment.toLowerCase().includes(query) ||
                    song.author.toLowerCase().includes(query) ||
                    song.cifra.toLowerCase().includes(query);
      if (!match) return;
    }

    const card = document.createElement("div");
    card.className = "song-card";
    card.innerHTML = `
      <div class="song-main-info">
        <h4 class="song-title">${index + 1}. ${song.moment}: ${song.title}</h4>
        <div class="song-meta">
          <span class="badge-tone">Tom: ${song.tone}</span>
          <span>${song.author}</span>
        </div>
      </div>
      <div class="song-card-actions">
        <button type="button" class="btn-song-swap-inline" data-swap-idx="${index}" title="Substituir música deste momento">⇄ Trocar</button>
        <button type="button" class="btn-song-audio-inline" data-audio-idx="${index}" title="Ouvir áudio desta música">🎧</button>
        <button type="button" class="btn-open-cifra" data-stage-idx="${index}">🎼 Cifra</button>
      </div>
    `;

    card.addEventListener("click", (e) => {
      const swapBtn = e.target.closest(".btn-song-swap-inline");
      if (swapBtn) {
        e.stopPropagation();
        appState.currentStageIndex = index;
        openSwapModal();
        return;
      }

      const audioBtn = e.target.closest(".btn-song-audio-inline");
      if (audioBtn) {
        e.stopPropagation();
        openAudioScreen(index, true);
        return;
      }

      openStageMode(index, "home");
    });

    dom.songsContainer.appendChild(card);
  });
}

// ========================================================
// SETUP DO MODO CIFRAS & EXECUÇÃO (Antigo Modo Palco)
// ========================================================
function setupStageEvents() {
  // Transposição de Tom no Palco
  dom.btnStageToneUp.addEventListener("click", () => transposeStageSong(1));
  dom.btnStageToneDown.addEventListener("click", () => transposeStageSong(-1));
  dom.btnStageToneReset.addEventListener("click", () => {
    const currentSong = appState.activeMissa[appState.currentStageIndex];
    appState.stageTranspositions[currentSong.id] = 0;
    appState.stageCapos[currentSong.id] = 0;
    localStorage.removeItem(getToneStorageKey(currentSong.id));
    localStorage.removeItem(getCapoStorageKey(currentSong.id));
    renderCurrentStageSong();
    showToast(`Tom e Capo de ${currentSong.moment} restaurados para o original (${currentSong.tone})`);
  });

  // Controle de Capotraste (0 a 7 casas)
  if (dom.btnCapoUp) {
    dom.btnCapoUp.addEventListener("click", () => changeStageCapo(1));
  }
  if (dom.btnCapoDown) {
    dom.btnCapoDown.addEventListener("click", () => changeStageCapo(-1));
  }

  // Botão Explícito de Salvar Tom & Capotraste
  if (dom.btnSaveTone) {
    dom.btnSaveTone.addEventListener("click", saveCurrentStageTone);
  }

  // Alternância do Vídeo do YouTube (Recolher / Expandir Miniplayer)
  if (dom.btnToggleVideo) {
    dom.btnToggleVideo.addEventListener("click", () => {
      if (!dom.stageYoutubeContainer) return;
      const isCollapsed = dom.stageYoutubeContainer.classList.toggle("video-collapsed");
      if (dom.btnToggleVideoText) {
        dom.btnToggleVideoText.innerText = isCollapsed ? "Mostrar Vídeo" : "Ocultar Vídeo";
      }
    });
  }

  // Tamanho de Fonte
  dom.btnStageFontUp.addEventListener("click", () => {
    if (appState.stageFontSize < 24) {
      appState.stageFontSize += 2;
      dom.stageCifraPre.style.fontSize = `${appState.stageFontSize}px`;
    }
  });

  dom.btnStageFontDown.addEventListener("click", () => {
    if (appState.stageFontSize > 10) {
      appState.stageFontSize -= 2;
      dom.stageCifraPre.style.fontSize = `${appState.stageFontSize}px`;
    }
  });

  // Rolagem Automática Flutuante (Auto-Scroll)
  if (dom.autoscrollToggleBtn) {
    dom.autoscrollToggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggleAutoScroll();
    });
  }
  if (dom.btnScrollSpeedDown) {
    dom.btnScrollSpeedDown.addEventListener("click", (e) => {
      e.stopPropagation();
      changeScrollSpeed(-1);
    });
  }
  if (dom.btnScrollSpeedUp) {
    dom.btnScrollSpeedUp.addEventListener("click", (e) => {
      e.stopPropagation();
      changeScrollSpeed(1);
    });
  }
  updateScrollSpeedUI();

  // Navegação da Missa (Anterior / Próximo)
  dom.btnStagePrev.addEventListener("click", () => {
    if (appState.currentStageIndex > 0) {
      openStageMode(appState.currentStageIndex - 1, appState.stageOriginScreen);
    }
  });

  dom.btnStageNext.addEventListener("click", () => {
    if (appState.currentStageIndex < appState.activeMissa.length - 1) {
      openStageMode(appState.currentStageIndex + 1, appState.stageOriginScreen);
    } else {
      alert("Fim da celebração! A missa foi concluída com louvor.");
      dom.btnBackFromStage.click();
    }
  });

  // Áudio de Ensaio
  dom.btnAudioPlay.addEventListener("click", toggleRehearsalAudio);
  dom.btnAudioSpeed.addEventListener("click", cycleAudioSpeed);
  dom.audioProgressContainer.addEventListener("click", seekRehearsalAudio);

  // Troca Pontual [⇄ Trocar]
  dom.btnSwapSongTrigger.addEventListener("click", openSwapModal);
  dom.btnCloseSwapModal.addEventListener("click", () => dom.swapModal.classList.add("hidden"));
  dom.swapModal.addEventListener("click", (e) => {
    if (e.target === dom.swapModal) dom.swapModal.classList.add("hidden");
  });
}

// Abrir o Modo Cifras & Execução no índice indicado
function openStageMode(songIndex, originScreen = null) {
  stopRehearsalAudio();
  stopAutoScroll();

  if (originScreen) {
    appState.stageOriginScreen = originScreen;
  } else if (appState.currentScreen && appState.currentScreen !== "stage") {
    appState.stageOriginScreen = appState.currentScreen;
  } else if (!appState.stageOriginScreen) {
    appState.stageOriginScreen = "masses";
  }

  appState.currentStageIndex = songIndex;
  appState.currentScreen = "stage";

  // Esconder categoricamente todas as outras telas para garantir 100% de tela cheia no celular
  hideAllScreens();
  if (dom.stageScreen) dom.stageScreen.classList.remove("hidden");

  // Ajustar o botão de voltar do header do palco
  if (dom.btnBackFromStage) {
    if (appState.stageOriginScreen === "masses") {
      dom.btnBackFromStage.innerHTML = `<span>←</span> Missas`;
      dom.btnBackFromStage.title = "Voltar à seleção de missas";
    } else if (appState.stageOriginScreen === "audio") {
      dom.btnBackFromStage.innerHTML = `<span>←</span> Áudios`;
      dom.btnBackFromStage.title = "Voltar ao Estúdio de Áudio";
    } else {
      dom.btnBackFromStage.innerHTML = `<span>←</span> Roteiro`;
      dom.btnBackFromStage.title = "Voltar ao Roteiro da Missa";
    }
  }

  renderMomentsStepper();
  renderCurrentStageSong();

  // Rola o conteúdo suavemente para o topo
  if (dom.stageContentScroll) {
    dom.stageContentScroll.scrollTop = 0;
  }
}

// Renderizar o Stepper de Momentos no topo
function renderMomentsStepper() {
  dom.momentsStepper.innerHTML = "";

  appState.activeMissa.forEach((song, idx) => {
    const chip = document.createElement("button");
    chip.className = `step-chip ${idx === appState.currentStageIndex ? "active" : ""}`;
    chip.innerText = `${song.step}. ${song.moment}`;

    chip.addEventListener("click", () => {
      openStageMode(idx, appState.stageOriginScreen);
    });

    dom.momentsStepper.appendChild(chip);
  });

  // Centralizar o chip ativo no scroll horizontal
  const activeChip = dom.momentsStepper.children[appState.currentStageIndex];
  if (activeChip) {
    activeChip.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }
}

// ========================================================
// PERSISTÊNCIA DE TOM & NOTIFICAÇÕES TOAST
// ========================================================
let toastTimer = null;
function showToast(message, duration = 2500) {
  if (!dom.appToast) return;
  dom.appToast.innerText = message;
  dom.appToast.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    dom.appToast.classList.add("hidden");
  }, duration);
}

function getToneStorageKey(songId) {
  return `tom_missa_${appState.activeDateKey}_${songId}`;
}

function getCapoStorageKey(songId) {
  return `capo_missa_${appState.activeDateKey}_${songId}`;
}

function saveCurrentStageTone() {
  const song = appState.activeMissa[appState.currentStageIndex];
  const transposition = appState.stageTranspositions[song.id] || 0;
  const capo = appState.stageCapos[song.id] || 0;

  localStorage.setItem(getToneStorageKey(song.id), transposition);
  localStorage.setItem(getCapoStorageKey(song.id), capo);

  const currentTone = transposeChord(song.tone, transposition);
  if (capo > 0) {
    const fingeringChord = transposeChord(currentTone, -capo);
    showToast(`💾 Tom [${currentTone}] (Capo ${capo}ª • Forma de ${fingeringChord}) salvo para ${song.moment}!`);
  } else {
    showToast(`💾 Tom [${currentTone}] salvo para ${song.moment}!`);
  }
}

function changeStageCapo(delta) {
  const currentSong = appState.activeMissa[appState.currentStageIndex];
  const currentCapo = appState.stageCapos[currentSong.id] || 0;
  let newCapo = currentCapo + delta;
  if (newCapo < 0) newCapo = 0;
  if (newCapo > 7) newCapo = 7;

  appState.stageCapos[currentSong.id] = newCapo;
  localStorage.setItem(getCapoStorageKey(currentSong.id), newCapo);
  renderCurrentStageSong();

  if (newCapo > 0) {
    showToast(`🎸 Capotraste na ${newCapo}ª casa ativado!`);
  } else {
    showToast(`🎸 Capotraste desativado`);
  }
}

// Renderizar a música ativa no Modo Palco
function renderCurrentStageSong() {
  const song = appState.activeMissa[appState.currentStageIndex];

  // Recupera tom e capo salvos previamente para esta música nesta celebração
  if (appState.stageTranspositions[song.id] === undefined) {
    const saved = localStorage.getItem(getToneStorageKey(song.id));
    appState.stageTranspositions[song.id] = (saved !== null) ? parseInt(saved, 10) : 0;
  }
  if (appState.stageCapos[song.id] === undefined) {
    const savedCapo = localStorage.getItem(getCapoStorageKey(song.id));
    appState.stageCapos[song.id] = (savedCapo !== null) ? parseInt(savedCapo, 10) : 0;
  }

  const transposition = appState.stageTranspositions[song.id] || 0;
  const capo = appState.stageCapos[song.id] || 0;

  // Transposição de dedilhado para violão/guitarra com capotraste
  // Se o tom real é D e o capo é 2, os dedos tocam acorde C (transposition - capo)
  const fingeringTransposition = transposition - capo;

  // Informações do Header da Música
  dom.stageMomentBadge.innerText = `${song.step}. Canto de ${song.moment}`;
  dom.stageFolhetoTag.innerText = song.folhetoLabel;
  dom.stageSongTitle.innerText = song.title;

  // Tom Atual Transposto (Real que soa para a assembleia)
  const currentTone = transposeChord(song.tone, transposition);
  dom.stageToneDisplay.innerText = currentTone;
  if (dom.stageCapoDisplay) {
    dom.stageCapoDisplay.innerText = capo;
  }

  if (capo > 0) {
    const fingeringTone = transposeChord(currentTone, -capo);
    dom.stageSongAuthor.innerText = `${song.author} • Tom Real: ${currentTone} • Capo: ${capo}ª casa (Dedilhar em ${fingeringTone}) • Original: ${song.tone}`;
  } else {
    dom.stageSongAuthor.innerText = `${song.author} • Tom: ${currentTone} • Original: ${song.tone}`;
  }

  // Renderizar a Cifra com os acordes dedilhados (com ou sem capo) e formatação litúrgica avançada
  dom.stageCifraPre.innerHTML = formatCifraDisplay(song.cifra, fingeringTransposition);
  dom.stageCifraPre.style.fontSize = `${appState.stageFontSize}px`;

  // Tratamento Híbrido de Mídia:
  // 1. Cântico com Vídeo do YouTube (O Domingo / Paulus / Streaming)
  if (song.youtubeId) {
    if (dom.rehearsalAudioPlayer) dom.rehearsalAudioPlayer.classList.add("hidden");
    if (dom.stageYoutubeContainer) dom.stageYoutubeContainer.classList.remove("hidden");

    if (dom.stageYoutubeIframe) {
      const targetSrc = `https://www.youtube-nocookie.com/embed/${song.youtubeId}`;
      if (!dom.stageYoutubeIframe.src || !dom.stageYoutubeIframe.src.includes(song.youtubeId)) {
        dom.stageYoutubeIframe.src = targetSrc;
      }
    }

    if (dom.youtubeTagTitle) {
      dom.youtubeTagTitle.innerText = `Vídeo de Ensaio Oficial: ${song.title}`;
    }

    // Chips de Streaming (Spotify e YouTube)
    if (dom.chipSpotifyLink) {
      if (song.spotifyUrl) {
        dom.chipSpotifyLink.href = song.spotifyUrl;
        dom.chipSpotifyLink.style.display = "inline-flex";
      } else {
        dom.chipSpotifyLink.style.display = "none";
      }
    }
    if (dom.chipYoutubeLink) {
      if (song.youtubeUrl || song.youtubeId) {
        dom.chipYoutubeLink.href = song.youtubeUrl || `https://www.youtube.com/watch?v=${song.youtubeId}`;
        dom.chipYoutubeLink.style.display = "inline-flex";
      } else {
        dom.chipYoutubeLink.style.display = "none";
      }
    }

    // Pausar MP3 caso estivesse tocando
    if (dom.realAudioElement) {
      try { dom.realAudioElement.pause(); } catch(e){}
      dom.realAudioElement.src = "";
    }
  } else {
    // 2. Cântico com MP3 da Comunidade ou Tom Guia Harmônico
    if (dom.stageYoutubeContainer) {
      dom.stageYoutubeContainer.classList.add("hidden");
      if (dom.stageYoutubeIframe) dom.stageYoutubeIframe.src = "";
    }
    if (dom.rehearsalAudioPlayer) dom.rehearsalAudioPlayer.classList.remove("hidden");

    // Limpar áudio anterior para não vazar se a música atual não tiver MP3
    if (dom.realAudioElement) {
      try { dom.realAudioElement.pause(); } catch(e){}
      if (!song.audioFile) {
        dom.realAudioElement.src = "";
      }
    }

    // Atualizar etiqueta de áudio
    if (dom.stageAudioTagText) {
      if (song.audioFile) {
        dom.stageAudioTagText.innerText = "Áudio de Ensaio (Melodia & Ritmo)";
      } else {
        dom.stageAudioTagText.innerText = "Tom Guia Harmônico (Sem áudio MP3)";
      }
    }

    // Atualizar Player de Áudio para a música atual
    appState.audioDuration = song.duration || 36;
    appState.audioCurrentTime = 0;
    updateAudioDisplay();
  }

  // Atualizar Botões de Navegação Inferior
  dom.btnStagePrev.disabled = (appState.currentStageIndex === 0);
  dom.btnStagePrev.style.opacity = (appState.currentStageIndex === 0) ? "0.5" : "1";

  if (appState.currentStageIndex < appState.activeMissa.length - 1) {
    const nextSong = appState.activeMissa[appState.currentStageIndex + 1];
    dom.nextButtonLabel.innerText = `Próximo: ${nextSong.moment}`;
  } else {
    dom.nextButtonLabel.innerText = "Concluir Missa";
  }
}

// Transposição de Tom (com salvamento automático para o músico)
function transposeStageSong(semitones) {
  const currentSong = appState.activeMissa[appState.currentStageIndex];
  const currentVal = appState.stageTranspositions[currentSong.id] || 0;
  const newVal = currentVal + semitones;
  appState.stageTranspositions[currentSong.id] = newVal;
  
  // Salva automaticamente ao mudar o tom
  localStorage.setItem(getToneStorageKey(currentSong.id), newVal);
  
  renderCurrentStageSong();
}

// ========================================================
// WIDGET FLUTUANTE DE ROLAGEM AUTOMÁTICA (AUTO-SCROLL)
// ========================================================
const SCROLL_SPEEDS = [14, 24, 40, 62, 90]; // Níveis 1 a 5 (pixels por segundo)

function updateScrollSpeedUI() {
  if (dom.scrollSpeedDisplay) {
    dom.scrollSpeedDisplay.innerText = `Vel ${appState.autoScrollSpeedLevel}`;
  }
}

function changeScrollSpeed(delta) {
  let newLevel = appState.autoScrollSpeedLevel + delta;
  if (newLevel < 1) newLevel = 1;
  if (newLevel > 5) newLevel = 5;
  appState.autoScrollSpeedLevel = newLevel;
  updateScrollSpeedUI();
}

function toggleAutoScroll() {
  if (appState.autoScrollActive) {
    pauseAutoScroll();
  } else {
    startAutoScroll();
  }
}

function startAutoScroll() {
  appState.autoScrollActive = true;
  appState.lastScrollTimestamp = null;
  appState.fractionalScrollAccumulator = 0;

  if (dom.autoscrollWidget) {
    dom.autoscrollWidget.classList.add("is-scrolling");
  }
  if (dom.autoscrollToggleBtn) {
    dom.autoscrollToggleBtn.classList.add("scrolling");
  }
  if (dom.autoscrollBtnText) {
    dom.autoscrollBtnText.innerText = "Pausar";
  }

  function scrollLoop(timestamp) {
    if (!appState.autoScrollActive) return;

    if (!appState.lastScrollTimestamp) {
      appState.lastScrollTimestamp = timestamp;
    }

    const elapsedMs = Math.min(timestamp - appState.lastScrollTimestamp, 100);
    appState.lastScrollTimestamp = timestamp;

    const speedPxPerSec = SCROLL_SPEEDS[appState.autoScrollSpeedLevel - 1] || 24;
    const pixelsToMove = (speedPxPerSec * elapsedMs) / 1000;
    appState.fractionalScrollAccumulator += pixelsToMove;

    const wholePixels = Math.floor(appState.fractionalScrollAccumulator);
    if (wholePixels >= 1) {
      appState.fractionalScrollAccumulator -= wholePixels;

      const container = dom.stageContentScroll;
      let atBottom = false;

      if (container && container.scrollHeight > container.clientHeight) {
        container.scrollTop += wholePixels;
        if (container.scrollTop + container.clientHeight >= container.scrollHeight - 2) {
          atBottom = true;
        }
      } else {
        window.scrollBy(0, wholePixels);
        const scrollPos = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
        if (window.innerHeight + scrollPos >= (document.documentElement.scrollHeight || document.body.offsetHeight) - 5) {
          atBottom = true;
        }
      }

      if (atBottom) {
        pauseAutoScroll();
        showToast("Fim da letra alcançado!");
        return;
      }
    }

    appState.autoScrollAnimFrame = requestAnimationFrame(scrollLoop);
  }

  appState.autoScrollAnimFrame = requestAnimationFrame(scrollLoop);
}

function pauseAutoScroll() {
  appState.autoScrollActive = false;
  if (appState.autoScrollAnimFrame) {
    cancelAnimationFrame(appState.autoScrollAnimFrame);
    appState.autoScrollAnimFrame = null;
  }
  if (dom.autoscrollWidget) {
    dom.autoscrollWidget.classList.remove("is-scrolling");
  }
  if (dom.autoscrollToggleBtn) {
    dom.autoscrollToggleBtn.classList.remove("scrolling");
  }
  if (dom.autoscrollBtnText) {
    dom.autoscrollBtnText.innerText = "Rolar";
  }
}

function stopAutoScroll() {
  pauseAutoScroll();
}

// ========================================================
// PLAYER DE ÁUDIO DE ENSAIO (MP3 REAL + FALLBACK SINTETIZADOR)
// ========================================================
function toggleRehearsalAudio() {
  if (appState.isPlayingAudio) {
    stopRehearsalAudio();
  } else {
    startRehearsalAudio();
  }
}

function handleAudioTrackEnded() {
  stopRehearsalAudio();
  appState.audioCurrentTime = 0;
  updateAudioDisplay();

  if (appState.currentScreen === "audio" && appState.audioAutoPlaySequence && appState.activeMissa.length > 0) {
    const nextIdx = (appState.currentAudioTrackIndex + 1) % appState.activeMissa.length;
    loadAudioStudioTrack(nextIdx, true);
  } else if (appState.currentScreen === "audio") {
    renderAudioTracksList();
  }
}

function startRehearsalAudio() {
  appState.isPlayingAudio = true;
  if (dom.audioPlayIcon) dom.audioPlayIcon.innerText = "⏸";
  if (dom.deckPlayIcon) dom.deckPlayIcon.innerText = "⏸";

  const activeIdx = appState.currentScreen === "audio" ? appState.currentAudioTrackIndex : appState.currentStageIndex;
  const song = appState.activeMissa[activeIdx] || appState.activeMissa[0];

  if (dom.deckStatusBadge && song) {
    dom.deckStatusBadge.innerText = song.audioFile ? "🔊 Tocando MP3 Oficial" : "🎵 Tocando Guia Harmônico";
  }

  if (appState.currentScreen === "audio") {
    renderAudioTracksList();
  }

  // Se a música possuir arquivo MP3 real mapeado
  if (song && song.audioFile && dom.realAudioElement) {
    if (!dom.realAudioElement.src.includes(song.audioFile)) {
      dom.realAudioElement.src = song.audioFile;
    }
    dom.realAudioElement.playbackRate = appState.audioPlaybackRate;
    dom.realAudioElement.currentTime = appState.audioCurrentTime;

    dom.realAudioElement.play().then(() => {
      // Áudio MP3 tocando com sucesso!
    }).catch(err => {
      console.log("Nota: executando sintetizador harmônico como alternativa:", err);
      playHarmonicArpeggio();
    });

    dom.realAudioElement.ontimeupdate = () => {
      appState.audioCurrentTime = dom.realAudioElement.currentTime;
      if (dom.realAudioElement.duration && !isNaN(dom.realAudioElement.duration)) {
        appState.audioDuration = dom.realAudioElement.duration;
      }
      updateAudioDisplay();
    };

    dom.realAudioElement.onended = () => {
      handleAudioTrackEnded();
    };
  } else {
    // Fallback: Sintetizador acústico harmônico em tempo real
    playHarmonicArpeggio();
    appState.audioInterval = setInterval(() => {
      appState.audioCurrentTime += 0.5 * appState.audioPlaybackRate;
      if (appState.audioCurrentTime >= appState.audioDuration) {
        handleAudioTrackEnded();
        return;
      }
      updateAudioDisplay();
    }, 500);
  }
}

function stopRehearsalAudio() {
  appState.isPlayingAudio = false;
  if (dom.audioPlayIcon) dom.audioPlayIcon.innerText = "▶";
  if (dom.deckPlayIcon) dom.deckPlayIcon.innerText = "▶";

  const activeIdx = appState.currentScreen === "audio" ? appState.currentAudioTrackIndex : appState.currentStageIndex;
  const song = appState.activeMissa[activeIdx] || appState.activeMissa[0];
  if (dom.deckStatusBadge && song) {
    dom.deckStatusBadge.innerText = song.audioFile ? "🔊 MP3 Oficial Pronto" : "🎵 Tom Guia Harmônico";
  }

  if (dom.realAudioElement) {
    try { dom.realAudioElement.pause(); } catch(e){}
  }
  if (appState.audioInterval) {
    clearInterval(appState.audioInterval);
    appState.audioInterval = null;
  }
  if (dom.stageYoutubeIframe && dom.stageYoutubeIframe.contentWindow) {
    try {
      dom.stageYoutubeIframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    } catch(e){}
  }
  if (appState.currentScreen === "audio") {
    renderAudioTracksList();
  }
}

function updateAudioDisplay() {
  const currentMin = Math.floor(appState.audioCurrentTime / 60);
  const currentSec = Math.floor(appState.audioCurrentTime % 60).toString().padStart(2, "0");
  const durMin = Math.floor(appState.audioDuration / 60);
  const durSec = Math.floor(appState.audioDuration % 60).toString().padStart(2, "0");

  if (dom.audioTimeDisplay) {
    dom.audioTimeDisplay.innerText = `${currentMin}:${currentSec} / ${durMin}:${durSec}`;
  }

  const pct = Math.min(100, (appState.audioCurrentTime / (appState.audioDuration || 1)) * 100);
  if (dom.audioProgressBar) {
    dom.audioProgressBar.style.width = `${pct}%`;
  }

  // Atualizar também o Master Audio Deck na Tela 3 (Ouvir Músicas)
  if (dom.deckCurrentTime) {
    dom.deckCurrentTime.innerText = `${currentMin}:${currentSec}`;
  }
  if (dom.deckTotalTime) {
    dom.deckTotalTime.innerText = `${durMin}:${durSec}`;
  }
  if (dom.deckProgressBar) {
    dom.deckProgressBar.style.width = `${pct}%`;
  }
}

function seekRehearsalAudio(e) {
  const rect = dom.audioProgressContainer.getBoundingClientRect();
  const clickX = e.clientX - rect.left;
  const pct = Math.max(0, Math.min(1, clickX / rect.width));
  appState.audioCurrentTime = pct * appState.audioDuration;

  if (dom.realAudioElement && !isNaN(dom.realAudioElement.duration)) {
    dom.realAudioElement.currentTime = appState.audioCurrentTime;
  }
  updateAudioDisplay();
}

function cycleAudioSpeed() {
  const speeds = [1.0, 1.25, 0.75];
  const currentIdx = speeds.indexOf(appState.audioPlaybackRate);
  appState.audioPlaybackRate = speeds[(currentIdx + 1) % speeds.length];
  if (dom.btnAudioSpeed) dom.btnAudioSpeed.innerText = `${appState.audioPlaybackRate}x`;

  if (dom.realAudioElement) {
    dom.realAudioElement.playbackRate = appState.audioPlaybackRate;
  }
}

// Síntese acústica para tocar um arpejo suave no tom do cântico
function playHarmonicArpeggio() {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    if (!appState.audioCtx) appState.audioCtx = new AudioContext();

    if (appState.audioCtx.state === "suspended") {
      appState.audioCtx.resume();
    }

    const activeIdx = appState.currentScreen === "audio" ? appState.currentAudioTrackIndex : appState.currentStageIndex;
    const currentSong = appState.activeMissa[activeIdx] || appState.activeMissa[0];
    if (!currentSong) return;

    const transposition = appState.stageTranspositions[currentSong.id] || 0;
    const effectiveTone = transposeChord(currentSong.tone, transposition);

    // Mapeamento de frequência básica
    const noteFreqs = {
      "C": 261.63, "C#": 277.18, "D": 293.66, "D#": 311.13,
      "E": 329.63, "F": 349.23, "F#": 369.99, "G": 392.00,
      "G#": 415.30, "A": 440.00, "A#": 466.16, "B": 493.88
    };

    const rootNote = effectiveTone.replace(/m|7/g, "");
    const baseFreq = noteFreqs[rootNote] || 392.00;

    // Toca acorde suave arpejado (fundamental, terça, quinta)
    const offsets = [1, 1.25, 1.5, 2];
    offsets.forEach((ratio, i) => {
      const osc = appState.audioCtx.createOscillator();
      const gain = appState.audioCtx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(baseFreq * ratio, appState.audioCtx.currentTime + (i * 0.18));

      gain.gain.setValueAtTime(0, appState.audioCtx.currentTime + (i * 0.18));
      gain.gain.linearRampToValueAtTime(0.12, appState.audioCtx.currentTime + (i * 0.18) + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, appState.audioCtx.currentTime + (i * 0.18) + 1.2);

      osc.connect(gain);
      gain.connect(appState.audioCtx.destination);

      osc.start(appState.audioCtx.currentTime + (i * 0.18));
      osc.stop(appState.audioCtx.currentTime + (i * 0.18) + 1.3);
    });
  } catch (err) {
    console.log("Audio synthesis notice:", err);
  }
}

// ========================================================
// MODAL DE TROCA PONTUAL DE MÚSICA [⇄ Trocar]
// ========================================================
function openSwapModal() {
  const currentSong = appState.activeMissa[appState.currentStageIndex];
  dom.swapModalTitle.innerText = `Trocar Canto de ${currentSong.moment}`;
  dom.swapOptionsContainer.innerHTML = "";

  const alternatives = swapAlternatives[currentSong.moment] || [
    { title: "Cântico Tradicional Alternativo", author: "Hinário Diocesano", tone: "C", folhetoLabel: "Repertório Local", cifra: "[C] [G] [Am] [F]\nCanto alternativo sugerido..." },
    { title: "Canto Comunitário da Paróquia", author: "Comunidade", tone: "G", folhetoLabel: "Repertório Local", cifra: "[G] [D] [Em] [C]\nGlória e louvor ao Senhor..." }
  ];

  alternatives.forEach(alt => {
    const card = document.createElement("div");
    card.className = "swap-item-card";
    card.innerHTML = `
      <div class="swap-item-info">
        <h4>${alt.title}</h4>
        <p>${alt.author} • Tom sugerido: ${alt.tone} • ${alt.folhetoLabel}</p>
      </div>
      <button class="btn-select-swap">Escolher</button>
    `;

    card.addEventListener("click", () => {
      // Substituir a música pontualmente mantendo as demais da missa
      appState.activeMissa[appState.currentStageIndex] = {
        ...currentSong,
        title: alt.title,
        author: alt.author,
        tone: alt.tone,
        folhetoLabel: `${alt.folhetoLabel} (Personalizado)`,
        cifra: alt.cifra
      };

      // Resetar transposição da música substituída
      appState.stageTranspositions[currentSong.id] = 0;

      dom.swapModal.classList.add("hidden");
      renderMomentsStepper();
      renderCurrentStageSong();
      renderHomeSongs();
      renderAudioTracksList();

      showToast(`✅ "${alt.title}" definido para ${currentSong.moment}!`);
    });

    dom.swapOptionsContainer.appendChild(card);
  });

  dom.swapModal.classList.remove("hidden");
}

// ========================================================
// FUNÇÕES AUXILIARES DE TRANSPOSIÇÃO
// ========================================================
function transposeChord(rootNote, semitones) {
  const noteMatch = rootNote.match(/^[A-G][#b]?/);
  if (!noteMatch) return rootNote;

  const originalRoot = noteMatch[0];
  const suffix = rootNote.slice(originalRoot.length);

  let normalizedRoot = originalRoot;
  if (normalizedRoot === "Bb") normalizedRoot = "A#";
  if (normalizedRoot === "Db") normalizedRoot = "C#";
  if (normalizedRoot === "Eb") normalizedRoot = "D#";
  if (normalizedRoot === "Gb") normalizedRoot = "F#";
  if (normalizedRoot === "Ab") normalizedRoot = "G#";

  const currentIndex = chromaticScale.indexOf(normalizedRoot);
  if (currentIndex === -1) return rootNote;

  let newIndex = (currentIndex + semitones) % 12;
  if (newIndex < 0) newIndex += 12;

  return chromaticScale[newIndex] + suffix;
}

function transposeChordString(chordString, semitones) {
  const parts = chordString.split("/");
  const mainChord = transposeChord(parts[0], semitones);
  if (parts.length > 1) {
    const bassNote = transposeChord(parts[1], semitones);
    return `${mainChord}/${bassNote}`;
  }
  return mainChord;
}

// Reconhecimento de acordes musicais (maiores, menores, com sétima, inversões, etc.)
function isChordToken(token) {
  return /^[A-G][b#]?(?:m|maj|min|dim|aug|sus[24]?|add\d+|\d+)*(?:\/[A-G][b#]?)?$/.test(token);
}

// Formatação e transposição completa da cifra
function formatCifraDisplay(cifraText, transposition = 0) {
  if (!cifraText) return "";

  return cifraText.split("\n").map(line => {
    // 1. Tag de Seção Litúrgica em linha isolada: [Refrão], [Estrofe 1], [Solo], etc.
    if (/^\s*\[(Refrão|Estrofe|Estrofes|Solo|Todos|Conclusão|Pós-Comunhão|Final)[^\]]*\]\s*$/i.test(line.trim())) {
      return `<span class="cifra-section-tag">${line.trim()}</span>`;
    }

    // 2. Introdução [Intro] com acordes na mesma linha
    if (/^\s*\[(Intro|Introdução)[^\]]*\]/i.test(line)) {
      const tagMatch = line.match(/^(\s*\[[^\]]+\])(.*)$/);
      if (tagMatch) {
        const tag = `<span class="cifra-section-tag">${tagMatch[1]}</span>`;
        const rest = tagMatch[2].replace(/\b([A-G][b#]?(?:m|maj|min|dim|aug|sus[24]?|add\d+|\d+)*(?:\/[A-G][b#]?)?)\b/g, m => {
          const trans = transposeChordString(m, transposition);
          return `<span class="cifra-chord">${trans}</span>`;
        });
        return tag + rest;
      }
    }

    // 3. Acordes entre colchetes embutidos: [G], [Am7], [D/F#]
    if (/\[[A-G][b#]?[^\]]*\]/.test(line)) {
      return line.replace(/\[([A-G][b#]?[^\]]*)\]/g, (match, chord) => {
        const transChord = transposeChordString(chord, transposition);
        return `<span class="cifra-chord">${transChord}</span>`;
      });
    }

    // 4. Linha de acordes tradicionais sem colchetes (ex: "        Em          Bm           Am    D")
    const nonMarkerTokens = line.trim().split(/\s+/).filter(t => t && !/^\(?(\d+ª|bis|R\.|\*|\+)\)?$/i.test(t));
    if (nonMarkerTokens.length > 0 && nonMarkerTokens.every(isChordToken)) {
      return line.replace(/\b([A-G][b#]?(?:m|maj|min|dim|aug|sus[24]?|add\d+|\d+)*(?:\/[A-G][b#]?)?)\b/g, m => {
        const trans = transposeChordString(m, transposition);
        return `<span class="cifra-chord">${trans}</span>`;
      });
    }

    return line;
  }).join("\n");
}
