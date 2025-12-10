export interface Wine {
  id: number;
  name: string;
  producer: string;
  region: string;
  type: 'Rosso' | 'Bianco' | 'Spumante' | 'Naturale';
  price: number;
  description: string;
  image: string;
}

export interface MenuItem {
  id: number;
  name: string;
  price?: number;
  description: string;
  pairing?: string;
  category: 'Cicchetti' | 'Piatti' | 'Stagionali';
  isSeasonal?: boolean;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

export interface ReservationData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  occasion: string;
  notes: string;
}