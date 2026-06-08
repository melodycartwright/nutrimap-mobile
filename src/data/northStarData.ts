import type {
  JourneyItem,
  V1Simplification,
  WellnessGoal,
} from "../types/northStar";

export const wellnessGoals: WellnessGoal[] = [
  {
    id: "hair-health",
    title: "Hair health",
    shortDescription:
      "Support stronger, healthier hair with consistent daily habits.",
  },
  {
    id: "hormonal-balance",
    title: "Hormonal balance",
    shortDescription:
      "Track steady routines that help you feel more balanced over time.",
  },
  {
    id: "immunity",
    title: "Immunity",
    shortDescription:
      "Keep the focus on small habits that support your body’s defenses.",
  },
  {
    id: "nervous-system-support",
    title: "Nervous system support",
    shortDescription:
      "Build a calmer daily rhythm with simple, sustainable steps.",
  },
];
export const journeyItems: JourneyItem[] = [
  {
    id: "hair-health-starting",
    goalId: "hair-health",
    title: "Starting gently",
    stage: "starting",
    note: "Begin with one or two consistent habits instead of changing everything at once.",
    isCompleted: false,
  },
  {
    id: "hormonal-balance-building",
    goalId: "hormonal-balance",
    title: "Building consistency",
    stage: "building",
    note: "Notice patterns and keep a steady routine you can actually maintain.",
    isCompleted: false,
  },
  {
    id: "immunity-consistent",
    goalId: "immunity",
    title: "Keeping it steady",
    stage: "consistent",
    note: "Small repeated actions are easier to sustain than big bursts of effort.",
    isCompleted: false,
  },
  {
    id: "nervous-system-support-starting",
    goalId: "nervous-system-support",
    title: "Making space to recover",
    stage: "starting",
    note: "Focus on calm, simple habits that fit into real life.",
    isCompleted: false,
  },
];
export const v1Simplifications: V1Simplification[] = [
  {
    id: "no-barcode-scanner",
    title: "No barcode scanner",
    reason:
      "Later, if Nutrimap needs faster supplement entry, we can add scanning.",
    status: "later",
  },
  {
    id: "simple-achievements",
    title: "Simple achievements",
    reason:
      "Later, achievements can become richer if users need more motivation.",
    status: "later",
  },
];
