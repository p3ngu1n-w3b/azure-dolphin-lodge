import { LODGE_ADDRESS } from "../data/locations";

/** Production origin used for canonical URLs, Open Graph, and sitemap. */
export const SITE_URL = "https://azurdolphin.com";

export const SITE_NAME = "Azur Dolphin Lodge";

export const SITE_TAGLINE =
  "Tranquil valley living, just minutes from the beach";

export const DEFAULT_DESCRIPTION =
  "Azur Dolphin Lodge is a private self-catering lodge in Klein Brak River on the Garden Route — quiet valley comfort minutes from the beach, near Mossel Bay, Hartenbos, and George Airport.";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/lodge-exterior.jpg`;

export const SITE_EMAIL = "azurdolphin@gmail.com";
export const SITE_PHONE = "+27827802022";
export const SITE_PHONE_DISPLAY = "+27 82 780 2022";
export const SITE_WHATSAPP_URL = "https://wa.me/27827802022";

export type PageSeo = {
  path: string;
  title: string;
  description: string;
  image?: string;
  noindex?: boolean;
};

export const pageSeo: Record<string, PageSeo> = {
  "/": {
    path: "/",
    title: "Azur Dolphin Lodge | Self-Catering on the Garden Route",
    description: DEFAULT_DESCRIPTION,
    image: DEFAULT_OG_IMAGE,
  },
  "/lodge": {
    path: "/lodge",
    title: "The Lodge | Azur Dolphin Lodge Klein Brak River",
    description:
      "Explore Azur Dolphin Lodge: private entrance, queen bedroom, full bathroom, equipped kitchen, lounge with sleeper couch, and outdoor seating in Klein Brak River on the Garden Route.",
    image: `${SITE_URL}/images/bedroom-queen.jpg`,
  },
  "/contact": {
    path: "/contact",
    title: "Contact & Book | Azur Dolphin Lodge",
    description:
      "Book Azur Dolphin Lodge online via NightsBridge, or enquire by WhatsApp and email. Find check-in times, distances, and the lodge map in Klein Brak River.",
    image: DEFAULT_OG_IMAGE,
  },
};

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized === "/" ? `${SITE_URL}/` : `${SITE_URL}${normalized}`;
}

export function getPageSeo(pathname: string): PageSeo {
  const key = pathname.endsWith("/") && pathname !== "/"
    ? pathname.slice(0, -1)
    : pathname;
  return pageSeo[key] ?? {
    path: key,
    title: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    image: DEFAULT_OG_IMAGE,
  };
}

/** LodgingBusiness JSON-LD for local SEO. */
export function getLodgingBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": `${SITE_URL}/#lodge`,
    name: SITE_NAME,
    alternateName: "AZUR Dolphin Lodge",
    description: DEFAULT_DESCRIPTION,
    url: `${SITE_URL}/`,
    image: [
      DEFAULT_OG_IMAGE,
      `${SITE_URL}/images/bedroom-queen.jpg`,
      `${SITE_URL}/images/kitchen-dining.jpg`,
      `${SITE_URL}/images/valley-view.jpg`,
    ],
    telephone: SITE_PHONE,
    email: SITE_EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "25 Hildagard Ave",
      addressLocality: "Klein Brak River",
      addressRegion: "Western Cape",
      postalCode: "6503",
      addressCountry: "ZA",
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(LODGE_ADDRESS)}`,
    geo: {
      "@type": "GeoCoordinates",
      latitude: -34.076145,
      longitude: 22.16149,
    },
    checkinTime: "14:00",
    checkoutTime: "10:00",
    petsAllowed: false,
    smokingAllowed: false,
    numberOfRooms: 1,
    amenityFeature: [
      { "@type": "LocationFeatureSpecification", name: "Private entrance", value: true },
      { "@type": "LocationFeatureSpecification", name: "Self catering kitchen", value: true },
      { "@type": "LocationFeatureSpecification", name: "Free parking", value: true },
      { "@type": "LocationFeatureSpecification", name: "WiFi", value: true },
    ],
    areaServed: [
      "Klein Brak River",
      "Garden Route",
      "Mossel Bay",
      "Hartenbos",
      "George",
    ],
    sameAs: ["https://book.nightsbridge.com/40630"],
  };
}

export function getWebsiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: `${SITE_URL}/`,
    description: DEFAULT_DESCRIPTION,
    publisher: { "@id": `${SITE_URL}/#lodge` },
    inLanguage: "en-ZA",
  };
}
