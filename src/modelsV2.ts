// Widget Item Model
export interface WidgetItem {
  type: number;
  title: string;
  subTitle: string;
  isNew: boolean;
  imageUrl: string;
  gameId: number;
  providerId: number;
  gameCode: string;
}

// Game Model
export interface Game {
  gameId: number;
  providerId: number;
  gameCode: string;
  title: string;
  providerName: string;
  imageUrl: string;
  gameType: string;
}

// Category Model
export interface Category {
  categoryId: number;
  name: string;
  slug: string;
}

// Widget Model
export interface Widget {
  widgetType: number;
  items?: WidgetItem[];
  category?: Category;
  games?: Game[];
}

// Main Lobby Model
export interface Lobby {
  widgets: Widget[];
  footer: string;
}

// Recently Played Model
export interface RecentlyPlayed {
  items: WidgetItem[];
}

// Games by Category Model
export interface GamesByCategory {
  category: Category;
  games: Game[];
  requiresLoginForFunMode: boolean;
  footer: string;
}

// Launch URL Model
export interface GameLaunch {
  launchUrl: string;
  game: Game;
}
