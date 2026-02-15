export interface Venue {
  id: number;
  name: string;
  nameArm: string;
  description: string;
  descriptionArm: string;
  address: string;
  addressArm: string;
  coordinates: [number, number]; // [lng, lat]
  capacity: string;
  capacityArm: string;
  ownerEmail: string;
  pricing: "free" | "paid";
  locationType: "outdoor" | "indoor";
  region: string;
  regionArm: string;
}

export const venues: Venue[] = [
  {
    id: 1,
    name: "Opera Garden",
    nameArm: "",
    description:
      "Open-air venue adjacent to the Yerevan Opera Theater, ideal for cultural events and community meetings.",
    descriptionArm: "",
    address: "54 Tumanyan St, Yerevan",
    addressArm: "",
    coordinates: [44.5134, 40.1872],
    capacity: "150 guests",
    capacityArm: "",
    ownerEmail: "m.marine.harutyunyan@gmail.com",
    pricing: "free",
    locationType: "outdoor",
    region: "Yerevan",
    regionArm: "",
  },
  {
    id: 2,
    name: "Erebuni Events Center",
    nameArm: "",
    description:
      "Spacious hall in the historic Erebuni District, great for workshops and large-scale civic initiatives.",
    descriptionArm: "",
    address: "38 Erebuni Ave, Yerevan",
    addressArm: "",
    coordinates: [44.5089, 40.1361],
    capacity: "300 guests",
    capacityArm: "",
    ownerEmail: "m.marine.harutyunyan@gmail.com",
    pricing: "free",
    locationType: "indoor",
    region: "Yerevan",
    regionArm: "",
  },
  {
    id: 3,
    name: "Hrazdan Cultural Hub",
    nameArm: "",
    description: "Dynamic space near Hrazdan Stadium, designed for creative collaborations and activist meetups.",
    descriptionArm: "",
    address: "5 Azatutyan Ave, Yerevan",
    addressArm: "",
    coordinates: [44.4791, 40.1928],
    capacity: "180 guests",
    capacityArm: "",
    ownerEmail: "m.marine.harutyunyan@gmail.com",
    pricing: "free",
    locationType: "indoor",
    region: "Yerevan",
    regionArm: "",
  },
];
