import { StyleSheet, Text, View } from "react-native";

type HomeCardProps = {
  title: string;
  description: string;
};

export default function HomeCard({ title, description }: HomeCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardText}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    padding: 20,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#2F2A28",
    marginBottom: 6,
  },
  cardText: {
    fontSize: 15,
    lineHeight: 22,
    color: "#6B625D",
  },
});
