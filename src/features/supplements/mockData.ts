import type { Supplement } from "./types";

export const supplements: Supplement[] = [
  {
    id: "magnesium",
    name: "Magnesium",
    dosage: "200mg",
    timeOfDay: "Evening",
    withFood: true,
    takenToday: false,
    notes: "Helps with sleep and muscle relaxation.",
  },
  {
    id: "vitaminD",
    name: "Vitamin D",
    dosage: "1000 IU",
    timeOfDay: "Morning",
    withFood: true,
    takenToday: true,
    notes: "Supports bone health and immune function.",
  },
  {
    id: "omega3",
    name: "Omega-3 Fish Oil",
    dosage: "1000mg",
    timeOfDay: "Afternoon",
    withFood: true,
    takenToday: false,
    notes: "Promotes heart health and reduces inflammation.",
  },
];
