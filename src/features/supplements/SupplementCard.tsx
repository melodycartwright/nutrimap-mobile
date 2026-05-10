import { StyleSheet, Text, View } from "react-native";

import type { Supplement } from "./types";

type SupplementCardProps = {
  supplement: Supplement;
};

export default function SupplementCard({ supplement }: SupplementCardProps) {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.name}>{supplement.name}</Text>
        <Text style={styles.status}>
          {supplement.takenToday ? "Taken" : "Not taken"}
        </Text>
      </View>

      <Text style={styles.detail}>Dose: {supplement.dosage}</Text>
      <Text style={styles.detail}>Time: {supplement.timeOfDay}</Text>
      <Text style={styles.detail}>
        {supplement.withFood ? "Take with food" : "Can be taken without food"}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    padding: 16,
    gap: 6,
  },
  header: {
    gap: 4,
  },
  name: {
    fontSize: 17,
    fontWeight: "700",
    color: "#2F2A28",
  },
  status: {
    fontSize: 14,
    fontWeight: "600",
    color: "#7A5C58",
  },
  detail: {
    fontSize: 14,
    lineHeight: 20,
    color: "#6B625D",
  },
});
