export interface AcaiLocation {
  id: string;
  name: string;
  address: string;
  phone: string;
  hours: string;
  imageUrl: string;
  price: string;
  stars: number;
  additionalInfo?: string;
  lat: number;
  lng: number;
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
    additionalInfo: "Aceita cartão e PIX. Estacionamento gratuito na Av. Nazaré aos fins de semana.",
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
    additionalInfo: "Especialidade: açaí com granola artesanal. Delivery disponível via WhatsApp.",
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
    additionalInfo: "Produtos 100% orgânicos certificados. Açaí direto do Marajó. Aberto em feriados.",
    lat: -1.4618,
    lng: -48.4855,
  },
];
