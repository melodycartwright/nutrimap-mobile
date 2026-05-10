import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.appName}> Nutrimap Mobile </Text>
          <Text style={styles.title}> Your daily wellness companion</Text>
          <Text style={styles.subtitles}>
            Track supplements, daily habits, and small progress steps in one
            calm place.
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Today</Text>
          <Text style={styles.cardText}>See what is planned for your day.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Supplements</Text>
          <Text style={styles.cardText}>
            View your supplement routine and schedules.
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Progress</Text>
          <Text style={styles.cardText}>
            Notice patterns, consistency, and small wins over time.
          </Text>
        </View>

        <StatusBar style="dark" />
      </ScrollView>
    </SafeAreaView>
  ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
