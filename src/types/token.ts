export interface Token {
  id: string;
  name: string;
  ticker: string;
  image: string;
  age: string;
  marketCap: number;
  price: number;
  volume: number;
  holders: number;
  likes: number;
  replies: number;
  category: 'new' | 'final' | 'migrated';
  priceChange: number;
  bondingProgress: number;
  isPaid?: boolean;
  socials: {
    twitter?: string;
    telegram?: string;
    website?: string;
  };
  stats: {
    txCount: number;
    liquidity: number;
    fdv: number;
  };
}

export interface ColumnConfig {
  title: string;
  subtitle?: string;
  category: 'new' | 'final' | 'migrated';
  sortBy: string;
}
