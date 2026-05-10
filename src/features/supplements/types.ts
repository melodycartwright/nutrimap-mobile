export type SupplementTimeOfDay = "Morning" | "Afternoon" | "Evening" | "Night";

export type Supplement = {
  id: string;
  name: string;
  dosage: string;
  timeOfDay: SupplementTimeOfDay;
  withFood: boolean;
  takenToday: boolean;
  notes?: string;
};
