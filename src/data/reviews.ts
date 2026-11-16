export type Review = {
  quote: string;
  name: string;
  place: string;
};

/** Guest reviews published on the previous littlefieldsuite.com site. */
export const reviews: Review[] = [
  {
    quote:
      "Very nice, helpful hosts, home from home, wonderful stay.",
    name: "R Mardamootoo",
    place: "Mauritius",
  },
  {
    quote:
      "Had great stay – very convenient to everything.",
    name: "V Amabile",
    place: "Canada",
  },
  {
    quote:
      "Thank you for stay at Littlefield Suite. It was really wonderful and we enjoyed it as home from home. Lovely garden, friendly, hospitable and helpful people. Everything Tops! Excellent value for money.",
    name: "R Coppoolse",
    place: "Somerset West, South Africa",
  },
  {
    quote: "Very nice stay and Helpful Hosts.",
    name: "H Sterner",
    place: "Sweden",
  },
  {
    quote: "Value for Money.",
    name: "R Lindemann",
    place: "East London, South Africa",
  },
  {
    quote:
      "Hospitality means we take people into our lives and our hearts and it is the first step towards dismantling the barriers of the world. Thank you so much.",
    name: "D Reed",
    place: "Johannesburg, South Africa",
  },
];
