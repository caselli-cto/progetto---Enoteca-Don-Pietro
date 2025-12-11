import { Wine, MenuItem, BlogPost } from './types';

export const WINES: Wine[] = [
  {
    id: 1,
    name: "Barolo Riserva 2016",
    producer: "Giacomo Conterno",
    region: "Piemonte",
    type: "Rosso",
    price: 85,
    description: "Un'icona delle Langhe. Strutturato, tannini eleganti, note di rosa appassita e catrame.",
    image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=800&auto=format&fit=crop" // Dark red wine bottle
  },
  {
    id: 2,
    name: "Etna Bianco Superiore",
    producer: "Benanti",
    region: "Sicilia",
    type: "Bianco",
    price: 45,
    description: "Minerale, salino, con sentori di ginestra e mela cotogna. Vulcanico.",
    image: "https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?q=80&w=800&auto=format&fit=crop" // Elegant white wine bottle
  },
  {
    id: 3,
    name: "Franciacorta Satèn",
    producer: "Ca' del Bosco",
    region: "Lombardia",
    type: "Spumante",
    price: 60,
    description: "Perlage finissimo, cremoso, note di pasticceria e agrumi canditi.",
    image: "https://images.unsplash.com/photo-1606758671604-037746535548?q=80&w=800&auto=format&fit=crop" // Champagne/Sparkling style
  },
  {
    id: 4,
    name: "Ribolla Gialla Anfora",
    producer: "Gravner",
    region: "Friuli",
    type: "Naturale",
    price: 95,
    description: "Orange wine complesso, macerato in anfora georgiana. Albicocca secca ed erbe.",
    image: "https://images.unsplash.com/photo-1566914565749-9f796c9f6580?q=80&w=800&auto=format&fit=crop" // Amber/Orange wine
  },
  {
    id: 5,
    name: "Chianti Classico Gran Selezione",
    producer: "Castello di Ama",
    region: "Toscana",
    type: "Rosso",
    price: 55,
    description: "Eleganza pura. Ciliegia scura, tabacco e spezie dolci.",
    image: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?q=80&w=800&auto=format&fit=crop" // Classic Red
  },
  {
    id: 6,
    name: "Verdicchio dei Castelli di Jesi",
    producer: "Villa Bucci",
    region: "Marche",
    type: "Bianco",
    price: 38,
    description: "Grande potenziale di invecchiamento. Mandorla, anice e pietra focaia.",
    image: "https://images.unsplash.com/photo-1572569992823-3758b9f7a554?q=80&w=800&auto=format&fit=crop" // White wine
  }
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    category: "Cicchetti",
    name: "Assortimento Salumi Selezionati",
    price: 12,
    description: "Speck artigianale, soppressata calabrese, culatello su pane tostato.",
    pairing: "Lambrusco Grasparossa"
  },
  {
    id: 2,
    category: "Cicchetti",
    name: "Formaggi del Territorio",
    price: 14,
    description: "Selezione di 4 formaggi stagionali con mostarde.",
  },
  {
    id: 3,
    category: "Cicchetti",
    name: "Pinchos Spagnoli",
    price: 10,
    description: "4 pezzi. Tapas ricercate con ingredienti premium.",
  },
  {
    id: 4,
    category: "Piatti",
    name: "Carpaccio di Tonno",
    price: 16,
    description: "Tonno fresco, caviale, zest di agrumi.",
    pairing: "Vermentino di Gallura"
  },
  {
    id: 5,
    category: "Piatti",
    name: "Crostini Misti",
    price: 11,
    description: "Mix di 4 crostini con spread locali e paté.",
  },
  {
    id: 6,
    category: "Stagionali",
    name: "Risotto alla Milanese con Ossobuco",
    price: 24,
    description: "La tradizione milanese nel piatto. Zafferano pistilli e gremolada.",
    isSeasonal: true
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Come scegliere il vino perfetto",
    excerpt: "Guida per principianti per non sbagliare mai un abbinamento a cena.",
    date: "12 Nov 2023",
    category: "Guide",
    image: "https://picsum.photos/400/250?random=10"
  },
  {
    id: 2,
    title: "Novembre a Enoteca Don Pietro",
    excerpt: "Le novità dell'autunno: funghi porcini e Nebbiolo.",
    date: "01 Nov 2023",
    category: "News",
    image: "https://picsum.photos/400/250?random=11"
  },
  {
    id: 3,
    title: "Natural Wines: Cosa sono?",
    excerpt: "Perché ne siamo affascinati e perché dovreste provarli.",
    date: "20 Ott 2023",
    category: "Tendenze",
    image: "https://picsum.photos/400/250?random=12"
  }
];