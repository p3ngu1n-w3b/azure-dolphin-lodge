export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  filter?: "valley" | "bright" | "warm" | "aqua" | "exterior";
  wide?: boolean;
};

export const lodgeGallery: GalleryImage[] = [
  {
    src: "/images/lodge-exterior.jpg",
    alt: "Azur Dolphin Lodge exterior with mint green walls and balcony",
    caption: "The lodge exterior",
    filter: "exterior",
    wide: true,
  },
  {
    src: "/images/lodge-entrance.jpg",
    alt: "Private entrance door with security gate",
    caption: "Private entrance",
    filter: "bright",
  },
  {
    src: "/images/bedroom-queen.jpg",
    alt: "Queen bedroom with dolphin-themed bedding",
    caption: "Cozy queen bedroom",
    filter: "warm",
  },
  {
    src: "/images/kitchen-dining.jpg",
    alt: "Self-catering kitchenette and dining table",
    caption: "Kitchen & dining for easy self-catering",
    filter: "bright",
  },
  {
    src: "/images/bathroom-bath.jpg",
    alt: "Full bathroom with bath, basin and bidet",
    caption: "Expansive bathroom with bath and shower",
    filter: "warm",
  },
  {
    src: "/images/lounge-art.jpg",
    alt: "Lounge area with dolphin canvas artwork",
    caption: "Living space with sleeper couch",
    filter: "aqua",
  },
  {
    src: "/images/valley-view.jpg",
    alt: "Partial valley views over green Garden Route hills",
    caption: "Partial valley views from the lodge",
    filter: "valley",
  },
  {
    src: "/images/bathroom-vanity.jpg",
    alt: "Bathroom vanity with vessel basin and lace curtains",
    caption: "Bright vanity space",
    filter: "warm",
  },
  {
    src: "/images/bedroom-light.jpg",
    alt: "Bedroom corner with wardrobe and soft daylight",
    caption: "Soft morning light in the bedroom",
    filter: "bright",
  },
  {
    src: "/images/kitchen-counter.jpg",
    alt: "Kitchen counter with toaster oven, microwave and kettle",
    caption: "Well-equipped kitchen appliances",
    filter: "bright",
  },
  {
    src: "/images/bathroom-shower.jpg",
    alt: "Glass shower stall in the tiled bathroom",
    caption: "Separate shower",
    filter: "warm",
  },
  {
    src: "/images/bedroom-tv.jpg",
    alt: "Bedroom with wall-mounted television and soft curtains",
    caption: "In-room television",
    filter: "bright",
  },
];
