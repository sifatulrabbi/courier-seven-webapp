import { locations } from "./locations";

const areas = locations[0].areas.sort();
export const calculatorData = [
  {
    select: false,
    name: "price",
    id: "price",
    label: "Product price (TK)",
    required: true,
    type: "number",
  },
  {
    select: false,
    name: "weight",
    id: "weight",
    label: "Product weight (gm)",
    required: true,
    type: "number",
  },
  {
    select: true,
    name: "district",
    id: "district",
    label: "District",
    required: true,
    options: ["Dhaka"],
  },
  {
    select: true,
    name: "area",
    id: "area",
    label: "Area",
    required: true,
    options: areas,
  },
];
