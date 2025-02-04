export interface LobbyResponse {
  data: {
    subscriptionKey: string;
    widget: Widget[];
    footer: string;
    metaData: MetaData;
  };
}

export interface Widget {
  widgetType: number;
  items?: Item[];
  games?: Game[];
}

export interface Item {
  type: number;
  title: string;
  subTitle: string;
  imageUrl: string;
  sportId?: string;
  subscriptionKey?: string;
  url?: string;
  gameCode?: string;
}

export interface Game {
  id: number;
  code: string;
  title: string;
  active: boolean;
  imageUrl: string;
  gameType: string;
}

export interface MetaData {
  pageTitle: string;
}

export interface recentlyPlayedData {
  type: number;
  title: string;
  subTitle: string;
  imageUrl?: string;
  url?: string;
  gameCode?: string;
  sportId?: string;
}

export interface GameItem {
  id: number;
  code: string;
  active: boolean;
  title: string;
  imageUrl: string;
  gameType: string;
}

export interface TopPicksData {
  type: number;
  title: string;
  subTitle: string;
  isNew?: boolean;
  imageUrl: string;
  sportId: string;
  subscriptionKey: string;
  url: string;
}

export const topPicksData: TopPicksData[] = [
  {
    type: 1,
    title: "NBA Replay",
    subTitle: "Basquete",
    isNew: true,
    imageUrl:
      "https://develop-backoffice-staging.stoiximan.gr/casino/VirtualGameLeap/GameId_13553/0_2_Copy%20of%20Football%20Cup%20Euro%201_1.png",
    sportId: "BASK",
    subscriptionKey: "BASK_190037_196926",
    url: "/virtuals/basquete/nba-replay/",
  },
  {
    type: 1,
    title: "Brook Park",
    subTitle: "Galgos",
    imageUrl:
      "https://develop-backoffice-staging.stoiximan.gr/casino/VirtualGameLeap/GameId_16788/0_2_Copy%20of%20Virtuals%20Races%201_1.png",
    sportId: "GREY",
    subscriptionKey: "GREY_189544_195680",
    url: "/virtuals/corridas-de-galgos/brook-park/",
  },
  {
    type: 1,
    title: "Premier League",
    subTitle: "Futebol",
    imageUrl:
      "https://develop-backoffice-staging.stoiximan.gr/casino/VirtualGameLeap/GameId_16788/0_2_Copy%20of%20Virtuals%20Races%201_1.png",
    sportId: "FOOT",
    subscriptionKey: "FOOT_189540_195679",
    url: "/virtuals/futebol/premier/",
  },
  {
    type: 1,
    title: "Playford",
    subTitle: "Cavalos",
    imageUrl:
      "https://develop-backoffice-staging.stoiximan.gr/casino/VirtualGameLeap/GameId_13553/0_2_Copy%20of%20Football%20Cup%20Euro%201_1.png",
    sportId: "HORS",
    subscriptionKey: "HORS_189545_195681",
    url: "/virtuals/corrida-de-cavalo/",
  },
  {
    type: 1,
    title: "Valley Arena",
    subTitle: "Speedway",
    imageUrl:
      "https://develop-backoffice-staging.stoiximan.gr/casino/VirtualGameLeap/GameId_13553/0_2_Copy%20of%20Football%20Cup%20Euro%201_1.png",
    sportId: "SPED",
    subscriptionKey: "SPED_189546_195682",
    url: "/virtuals/speedway/",
  },
  {
    type: 1,
    title: "Stars League",
    subTitle: "Futebol",
    imageUrl:
      "https://develop-backoffice-staging.stoiximan.gr/casino/VirtualGameLeap/GameId_13559/0_2_Copy%20of%20Horses%20Streak%201_1.png",
    sportId: "FOOT",
    subscriptionKey: "FOOT_189888_196564",
    url: "/virtuals/futebol/copa-das-estrelas/",
  },
  {
    type: 1,
    title: "Replay Strike",
    subTitle: "Replay strike",
    imageUrl:
      "https://develop-backoffice-staging.stoiximan.gr/casino/VirtualGameLeap/GameId_13559/0_2_Copy%20of%20Horses%20Streak%201_1.png",
    sportId: "VCSG",
    subscriptionKey: "VCSG_189976_196774",
    url: "/virtuals/replay-strike/",
  },
  {
    type: 1,
    title: "Fairfield Velodrome",
    subTitle: "Ciclismo",
    imageUrl:
      "https://develop-backoffice-staging.stoiximan.gr/casino/VirtualGameLeap/GameId_26374/0_2_Copy%20of%20Golf%20Leap%201_1.png",
    sportId: "CYCL",
    subscriptionKey: "CYCL_189547_195683",
    url: "/virtuals/ciclismo/",
  },
  {
    type: 1,
    title: "NFL League",
    subTitle: "Futebol americano",
    imageUrl:
      "https://develop-backoffice-staging.stoiximan.gr/casino/VirtualGameLeap/GameId_26374/0_2_Copy%20of%20Golf%20Leap%201_1.png",
    sportId: "AMFO",
    subscriptionKey: "AMFO_189981_196779",
    url: "/virtuals/futebol-americano/",
  },
  {
    type: 1,
    title: "Internacional",
    subTitle: "Tênis",
    imageUrl:
      "https://develop-backoffice-staging.stoiximan.gr/casino/VirtualGameLeap/GameId_26374/0_2_Copy%20of%20Golf%20Leap%201_1.png",
    sportId: "TENN",
    subscriptionKey: "TENN_189543_195674",
    url: "/virtuals/tenis/",
  },
  {
    type: 1,
    title: "Super Clubs",
    subTitle: "Dia de jogo",
    imageUrl:
      "https://develop-backoffice-staging.stoiximan.gr/casino/VirtualGameLeap/GameId_26374/0_2_Copy%20of%20Golf%20Leap%201_1.png",
    sportId: "VMAD",
    subscriptionKey: "VMAD_189920_196637",
    url: "/virtuals/matchday/super-clubs/",
  },
];

export const recentlyPlayedData: recentlyPlayedData[] = [
  {
    type: 2,
    title: "Virtual Golf",
    subTitle: "Leap",
    imageUrl:
      "https://develop-backoffice-staging.stoiximan.gr/casino/VirtualGameLeap/GameId_26374/0_4_Virtual%20Games%20-%20525x144.jpg",
    gameCode: "5001",
  },
  {
    type: 1,
    title: "Premier League",
    subTitle: "Soccer",
    sportId: "FOOT",
    url: "/virtuals/soccer/premier/",
  },
  {
    type: 2,
    title: "Horses Streak",
    subTitle: "Playtech",
    imageUrl:
      "https://develop-backoffice-staging.stoiximan.gr/casino/VirtualGameLeap/GameId_13559/0_4_Copy%20of%20Horses%20Streak%20175x48.png",
    gameCode: "5061",
  },
  {
    type: 2,
    title: "Virtual Football League",
    subTitle: "Inspired",
    imageUrl:
      "https://develop-backoffice-staging.stoiximan.gr/casino/VirtualGameLeap/GameId_13563/0_4_Copy%20of%20Football%20League%20175x48.png",
    gameCode: "5081",
  },
];

export const sportsGridData: GameItem[] = [
  {
    id: 26374,
    code: "5001",
    title: "Virtual Golf",
    active: true,
    imageUrl:
      "https://develop-backoffice-staging.stoiximan.gr/casino/VirtualGameLeap/GameId_26374/0_1_Copy%20of%20Golf%20Leap%2016_9.png",
    gameType: "Leap",
  },
  {
    id: 13557,
    code: "5042",
    title: "Football Streak Champions",
    active: true,
    imageUrl:
      "https://develop-backoffice-staging.stoiximan.gr/casino/VirtualGameLeap/GameId_13557/0_1_Copy%20of%20Football%20Strike%20Champions%2016_9.png",
    gameType: "Playtech",
  },
  {
    id: 13563,
    code: "5081",
    title: "Virtual Football League",
    active: true,
    imageUrl:
      "https://develop-backoffice-staging.stoiximan.gr/casino/VirtualGameLeap/GameId_13563/0_1_Copy%20of%20Football%20League%2016_9.png",
    gameType: "Inspired",
  },
  {
    id: 13556,
    code: "5041",
    title: "Football Streak",
    active: true,
    imageUrl:
      "https://develop-backoffice-staging.stoiximan.gr/casino/VirtualGameLeap/GameId_13556/0_1_Copy%20of%20Football%20Strike%2016_9.png",
    gameType: "Playtech",
  },
  {
    id: 13553,
    code: "5021",
    title: "Euro Cups",
    active: true,
    imageUrl:
      "https://develop-backoffice-staging.stoiximan.gr/casino/VirtualGameLeap/GameId_13553/0_1_Copy%20of%20Football%20Cup%20Euro%2016_9.png",
    gameType: "Inspired",
  },
  {
    id: 13558,
    code: "5071",
    title: "Greyhounds Streak",
    active: true,
    imageUrl:
      "https://develop-backoffice-staging.stoiximan.gr/casino/VirtualGameLeap/GameId_13558/0_1_Copy%20of%20Greyhound%20Streak%2016_9.png",
    gameType: "Playtech",
  },
  {
    id: 13559,
    code: "5061",
    title: "Horses Streak",
    active: true,
    imageUrl:
      "https://develop-backoffice-staging.stoiximan.gr/casino/VirtualGameLeap/GameId_13559/0_1_Copy%20of%20Horses%20Streak%2016_9.png",
    gameType: "Playtech",
  },
  {
    id: 13561,
    code: "5031",
    title: "Nascar Streak",
    active: true,
    imageUrl:
      "https://develop-backoffice-staging.stoiximan.gr/casino/VirtualGameLeap/GameId_13561/0_1_Copy%20of%20Nascar%20Strike%2016_9.png",
    gameType: "Playtech",
  },
  {
    id: 13555,
    code: "5051",
    title: "Football Penalty Duel",
    active: true,
    imageUrl:
      "https://develop-backoffice-staging.stoiximan.gr/casino/VirtualGameLeap/GameId_13555/0_1_Copy%20of%20Football%20Penalty%20Duels%2016_9_.png",
    gameType: "Playtech",
  },
  {
    id: 13554,
    code: "5023",
    title: "Football Cup - World",
    active: true,
    imageUrl:
      "https://develop-backoffice-staging.stoiximan.gr/casino/VirtualGameLeap/GameId_13554/0_1_Football%20Cup%20World%2016_9.jpg",
    gameType: "Playtech",
  },
  {
    id: 13562,
    code: "5091",
    title: "Scheduled Euroleague",
    active: true,
    imageUrl:
      "https://develop-backoffice-staging.stoiximan.gr/casino/VirtualGameLeap/GameId_13562/0_1_Copy%20of%20Euroleague%20Scheduled%20Legends%2016_9.png",
    gameType: "Inspired",
  },
  {
    id: 13560,
    code: "5011",
    title: "Instant Euroleague Legends",
    active: true,
    imageUrl:
      "https://develop-backoffice-staging.stoiximan.gr/casino/VirtualGameLeap/GameId_13560/0_1_Copy%20of%20Euroleague%20Instant%20Legends%2016_9.png",
    gameType: "Playtech",
  },
  {
    id: 16788,
    code: "5111",
    title: "Virtual Races",
    active: true,
    imageUrl:
      "https://develop-backoffice-staging.stoiximan.gr/casino/VirtualGameLeap/GameId_16788/0_1_Copy%20of%20Virtuals%20Races%2016_9.png",
    gameType: "Inspired",
  },
];

export const racingGridData: GameItem[] = [
  {
    id: 26374,
    code: "5001",
    title: "Virtual Golf",
    active: true,
    imageUrl:
      "https://develop-backoffice-staging.stoiximan.gr/casino/VirtualGameLeap/GameId_26374/0_1_Copy%20of%20Golf%20Leap%2016_9.png",
    gameType: "Leap",
  },
  {
    id: 13557,
    code: "5042",
    title: "Football Streak Champions",
    active: true,
    imageUrl:
      "https://develop-backoffice-staging.stoiximan.gr/casino/VirtualGameLeap/GameId_13557/0_1_Copy%20of%20Football%20Strike%20Champions%2016_9.png",
    gameType: "Playtech",
  },
  {
    id: 13563,
    code: "5081",
    title: "Virtual Football League",
    active: true,
    imageUrl:
      "https://develop-backoffice-staging.stoiximan.gr/casino/VirtualGameLeap/GameId_13563/0_1_Copy%20of%20Football%20League%2016_9.png",
    gameType: "Inspired",
  },
  {
    id: 13556,
    code: "5041",
    title: "Football Streak",
    active: true,
    imageUrl:
      "https://develop-backoffice-staging.stoiximan.gr/casino/VirtualGameLeap/GameId_13556/0_1_Copy%20of%20Football%20Strike%2016_9.png",
    gameType: "Playtech",
  },
];
