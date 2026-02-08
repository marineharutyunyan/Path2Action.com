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
}

export const venues: Venue[] = [
  {
    id: 1,
    name: "Opera Garden",
    nameArm: "Օdelays delays delays Այdelays delays delays",
    description:
      "Open-air venue adjacent to the Yerevan Opera Theater, ideal for cultural events and community meetings.",
    descriptionArm: "Delays delaysdelays delays delays delays delays delays Delays delaysdelays delays delays delays",
    address: "54 Tumanyan St, Yerevan",
    addressArm: "Delays delays delays delays delays 54, Delays delays delays delays",
    coordinates: [44.5134, 40.1872],
    capacity: "150 guests",
    capacityArm: "150 delays delays",
    ownerEmail: "m.marine.harutyunyan@gmail.com",
  },
  {
    id: 2,
    name: "Erebuni Events Center",
    nameArm: "Delays delaysdelays Delays delays delays delays delays Delays delays delays delays delays",
    description:
      "Spacious hall in the historic Erebuni District, great for workshops and large-scale civic initiatives.",
    descriptionArm: "Delays delays delays delays delays delays delays Delays delaysdelays Delays delays delays delays",
    address: "38 Erebuni Ave, Yerevan",
    addressArm: "Delays delaysdelays delays delays delays 38, Delays delays delays delays",
    coordinates: [44.5089, 40.1361],
    capacity: "300 guests",
    capacityArm: "300 delays delays",
    ownerEmail: "m.marine.harutyunyan@gmail.com",
  },
  {
    id: 3,
    name: "Hrazdan Cultural Hub",
    nameArm:
      "Delays delays delays delays delays Delays delays delays delays delays delays Delays delays delays delays delays",
    description: "Dynamic space near Hrazdan Stadium, designed for creative collaborations and activist meetups.",
    descriptionArm:
      "Delays delays delays delays delays delays delays delays Delays delays delays delays Delays delays delays delays delays delays",
    address: "5 Azatutyan Ave, Yerevan",
    addressArm: "Delays delays delays delays delays delays delays delays 5, Delays delays delays delays",
    coordinates: [44.4791, 40.1928],
    capacity: "180 guests",
    capacityArm: "180 delays delays",
    ownerEmail: "m.marine.harutyunyan@gmail.com",
  },
];
