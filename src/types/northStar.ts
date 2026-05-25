export type WellnessGoalId =
  | "hair-health"
  | "hormonal-balance"
  | "immunity"
  | "nervous-system-support";

export type JourneyStage = "starting" | "building" | "consistent";

export type V1SimplificationId = "no-barcode-scanner" | "simple-achievements";

export type WellnessGoal = {
  id: WellnessGoalId;
  title: string;
  shortDescription: string;
};
export type JourneyItem = {
  id: string;
  goalId: WellnessGoalId;
  title: string;
  stage: JourneyStage;
  note: string;
  isCompleted: boolean;
};

export type V1Simplification = {
  id: V1SimplificationId;
  title: string;
  reason: string;
  status: "later";
};
