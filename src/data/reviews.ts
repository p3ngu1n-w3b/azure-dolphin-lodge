export type Review = {
  quote: string;
  name: string;
  place: string;
  /** Whole-star rating from 1 to 5 */
  stars: 1 | 2 | 3 | 4 | 5;
};

export const reviews: Review[] = [
  {
    quote:
      "Peaceful valley mornings and Klein Brak beach just a short drive away. Exactly the quiet break we needed.",
    name: "Sarah M.",
    place: "Cape Town",
    stars: 5,
  },
  {
    quote:
      "Clean, private, and well equipped. Easy hop from George Airport and close enough to Mossel Bay for dinner out.",
    name: "Johan & Anel",
    place: "Pretoria",
    stars: 5,
  },
  {
    quote:
      "Loved the garden seating and the calm setting. Best of both worlds — nature and the coast.",
    name: "Emily R.",
    place: "Johannesburg",
    stars: 4,
  },
];
