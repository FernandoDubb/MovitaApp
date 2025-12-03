import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ShareButton from "../components/ShareButton";

export default function HomeScreen() {
  const nav = useNavigation<any>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#1c1c1e", padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "600", color: "#fff", marginBottom: 40 }}>¿Cómo te sientes hoy?</Text>

      <TouchableOpacity
        onPress={() => nav.navigate("Emotion")}
        style={{ backgroundColor: "#00bcd4", paddingVertical: 15, paddingHorizontal: 40, borderRadius: 12, marginBottom: 20 }}
      >
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>Elegir emoción</Text>
      </TouchableOpacity>

      <ShareButton />
    </View>
  );
}
