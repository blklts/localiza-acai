export interface MenuItem {
  name: string;
  imageUrl: string;
  price: string;
  unit: string;
}

export interface AcaiLocation {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  imageUrl: string;
  price: string;
  stars: number;
  menu?: MenuItem[];
  lat: number;
  lng: number;
  instagram?: string;
}

export const locations: AcaiLocation[] = [
  {
    id: "1",
    name: "Açaí do João",
    address: "Av. Nazaré, 456 – Nazaré, Belém",
    phone: "(91) 98765-4321",
    hours: "Seg–Sex 09h–22h, Sáb–Dom 09h–23h",
    imageUrl: "https://placehold.co/300x160?text=Acai+do+Joao",
    price: "R$ 12 – R$ 28",
    stars: 4,
    menu: [
      { name: "Açaí Puro",        imageUrl: "https://placehold.co/80x80?text=Puro",    price: "R$ 18,00", unit: "kg"     },
      { name: "Açaí com Granola", imageUrl: "https://placehold.co/80x80?text=Granola", price: "R$ 12,00", unit: "500ml"  },
      { name: "Castanha do Pará", imageUrl: "https://placehold.co/80x80?text=Castanha", price: "R$ 25,00", unit: "kg"   },
      { name: "Cupuaçu",         imageUrl: "https://placehold.co/80x80?text=Cupuacu",  price: "R$ 15,00", unit: "litro" },
    ],
    lat: -1.4528,
    lng: -48.4872,
  },
  {
    id: "2",
    name: "Açaí da Maria",
    address: "Rua dos Mundurucus, 1200 – Jurunas, Belém",
    phone: "(91) 99123-4567",
    hours: "Seg–Dom 08h–21h",
    imageUrl: "https://placehold.co/300x160?text=Acai+da+Maria",
    price: "R$ 8 – R$ 20",
    stars: 5,
    menu: [
      { name: "Açaí Puro",       imageUrl: "https://placehold.co/80x80?text=Puro",    price: "R$ 14,00", unit: "kg"        },
      { name: "Açaí na Tigela",  imageUrl: "https://placehold.co/80x80?text=Tigela",  price: "R$ 8,00",  unit: "unidade"   },
      { name: "Tapioca",         imageUrl: "https://placehold.co/80x80?text=Tapioca", price: "R$ 6,00",  unit: "unidade"   },
      { name: "Suco de Taperebá",imageUrl: "https://placehold.co/80x80?text=Suco",    price: "R$ 7,00",  unit: "300ml"     },
    ],
    lat: -1.4601,
    lng: -48.4935,
  },
  {
    id: "3",
    name: "Paraíso do Açaí",
    address: "Tv. Benjamin Constant, 789 – Cidade Velha, Belém",
    phone: "(91) 98234-5678",
    hours: "Ter–Dom 10h–22h",
    imageUrl: "https://placehold.co/300x160?text=Paraiso+do+Acai",
    price: "R$ 15 – R$ 35",
    stars: 3,
    menu: [
      { name: "Açaí com Granola Artesanal", imageUrl: "https://placehold.co/80x80?text=Granola", price: "R$ 15,00", unit: "500ml" },
      { name: "Açaí Puro",                 imageUrl: "https://placehold.co/80x80?text=Puro",    price: "R$ 22,00", unit: "kg"    },
      { name: "Mix de Frutas",             imageUrl: "https://placehold.co/80x80?text=Frutas",  price: "R$ 18,00", unit: "kg"    },
      { name: "Açaí Cremoso",              imageUrl: "https://placehold.co/80x80?text=Cremoso", price: "R$ 20,00", unit: "litro" },
    ],
    lat: -1.4487,
    lng: -48.5021,
  },
  {
    id: "4",
    name: "Açaí Nativo",
    address: "Rua Serzedelo Corrêa, 34 – Batista Campos, Belém",
    phone: "(91) 99345-6789",
    hours: "Seg–Sáb 11h–23h",
    imageUrl: "https://placehold.co/300x160?text=Acai+Nativo",
    price: "R$ 10 – R$ 25",
    stars: 4,
    menu: [
      { name: "Açaí Puro",       imageUrl: "https://placehold.co/80x80?text=Puro",    price: "R$ 16,00", unit: "kg"      },
      { name: "Açaí na Tigela",  imageUrl: "https://placehold.co/80x80?text=Tigela",  price: "R$ 10,00", unit: "unidade" },
      { name: "Bacuri",          imageUrl: "https://placehold.co/80x80?text=Bacuri",  price: "R$ 12,00", unit: "unidade" },
      { name: "Muruci",          imageUrl: "https://placehold.co/80x80?text=Muruci",  price: "R$ 20,00", unit: "kg"      },
    ],
    lat: -1.4545,
    lng: -48.4798,
  },
  {
    id: "5",
    name: "Sabor da Floresta",
    address: "Av. Senador Lemos, 567 – Umarizal, Belém",
    phone: "(91) 98456-7890",
    hours: "Seg–Dom 09h–22h30",
    imageUrl: "https://placehold.co/300x160?text=Sabor+da+Floresta",
    price: "R$ 18 – R$ 42",
    stars: 5,
    menu: [
      { name: "Açaí Orgânico Puro",  imageUrl: "https://placehold.co/80x80?text=Organico", price: "R$ 28,00", unit: "kg"     },
      { name: "Açaí do Marajó",      imageUrl: "https://placehold.co/80x80?text=Marajo",   price: "R$ 35,00", unit: "kg"     },
      { name: "Suco de Açaí",        imageUrl: "https://placehold.co/80x80?text=Suco",     price: "R$ 18,00", unit: "litro"  },
      { name: "Polpa Congelada",     imageUrl: "https://placehold.co/80x80?text=Polpa",    price: "R$ 22,00", unit: "500g"   },
    ],
    lat: -1.4618,
    lng: -48.4855,
  },
];
