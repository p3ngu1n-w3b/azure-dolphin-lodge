export type LocationPoint = {
  name: string;
  distance: string;
  detail: string;
};

export const coastalLocations: LocationPoint[] = [
  {
    name: "Sea-view benches",
    distance: "1.4 km",
    detail: "Scenic ocean viewpoints with seating — a short hop when you want the coast.",
  },
  {
    name: "Klein Brak Blue Flag Beach",
    distance: "3.5 km",
    detail: "Where the river meets the sea — sand, lagoon, and easy beach days.",
  },
];

export const travelLocations: LocationPoint[] = [
  {
    name: "Hartenbos",
    distance: "10 km",
    detail: "Nearby coastal town with shops, restaurants, and family attractions.",
  },
  {
    name: "Mossel Bay central",
    distance: "18 km",
    detail: "Harbour town, museums, restaurants, and Garden Route sightseeing.",
  },
  {
    name: "George Airport",
    distance: "28 km",
    detail: "Convenient arrival point for Garden Route holidays — an easy drive to the lodge.",
  },
  {
    name: "George Central",
    distance: "33 km",
    detail: "Regional hub for shopping, services, and onward Garden Route travel.",
  },
];

export const everydayLocations: LocationPoint[] = [
  {
    name: "Pick n Pay, bottle store & pharmacy",
    distance: "2 km",
    detail: "Everyday essentials close by. Checkers Sixty60 and Pick n Pay asap! deliver to the lodge.",
  },
  {
    name: "Garden Walk Shopping Centre",
    distance: "8 km",
    detail:
      "Checkers, Food Lover's Market, Agrimark, Dis-Chem, Clicks, restaurants, and takeaways in Hartenbos.",
    // href handled in UI
  },
];

export const GARDEN_WALK_URL = "https://gardenwalk.co.za/";
export const VISIT_MOSSEL_BAY_URL = "https://visitmosselbay.co.za/";
