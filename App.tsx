import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import HomeCard from "./src/components/HomeCard";
import SupplementCard from "./src/features/supplements/SupplementCard";
import { supplements } from "./src/features/supplements/mockData";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.appName}>Nutrimap Mobile</Text>
          <Text style={styles.title}>Your daily wellness companion</Text>
          <Text style={styles.subtitle}>
            Track supplements, daily habits, and small progress steps in one
            calm place.
          </Text>
        </View>

        <HomeCard
          title="Today"
          description="See what is planned for your day."
        />

        <HomeCard
          title="Supplements"
          description="View your supplement routine and schedules."
        />

        <HomeCard
          title="Progress"
          description="Notice patterns, consistency, and small wins over time."
        />

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Today&apos;s supplements</Text>

          {supplements.map((supplement) => (
            <SupplementCard key={supplement.id} supplement={supplement} />
          ))}
        </View>

        <StatusBar style="dark" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8F3EE",
  },
  container: {
    padding: 24,
    gap: 16,
  },
  header: {
    marginBottom: 12,
  },
  appName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#7A5C58",
    marginBottom: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#2F2A28",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    color: "#5F5753",
  },
  section: {
    marginTop: 12,
    gap: 12,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#2F2A28",
  },
});
