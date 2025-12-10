import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";
import * as Sharing from "expo-sharing";

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const shareWhatsApp = async () => {
    const message = "Hoy me siento así, usando la app MotivaApp 🤍";
    await Sharing.shareAsync("", { dialogTitle: message });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Cómo te sientes hoy?</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Emotion")}
      >
        <Text style={styles.buttonText}>Elegir emoción</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={shareWhatsApp}>
        <Text style={styles.buttonText}>Compartir WhatsApp</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#1c1c1e" },
  title: { color: "#fff", fontSize: 26, marginBottom: 40, fontWeight: "600" },
  button: {
    backgroundColor: "#ff6b6b",
    padding: 15,
    width: "70%",
    borderRadius: 12,
    marginBottom: 20,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 18 },
});
