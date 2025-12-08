import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ShareButton from "../components/ShareButton";

export default function HomeScreen() {
  const nav = useNavigation<any>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#1c1c1e", padding: 20 }}>
      
      <Text style={{ fontSize: 24, fontWeight: "600", color: "#fff", marginBottom: 30 }}>¿Cómo te sientes hoy?</Text>
      
      <View
        style={{
          backgroundColor: "#000",
          padding: 25,
          borderRadius: 20,
          width: "100%",
          alignItems: "center",
          shadowColor: "#fff",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 4,
          elevation: 5,
        }}
      >
        <TouchableOpacity
          onPress={() => nav.navigate("Emotion")}
          style={{ backgroundColor: "#00bcd4", paddingVertical: 15, paddingHorizontal: 40, borderRadius: 12, marginBottom: 20, width: "80%" }}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600", textAlign: "center" }}>Elegir emoción</Text>
        </TouchableOpacity>

        <ShareButton />
      </View>

      <Text style={{ color: "gray", fontSize: 14, marginTop: 20, textAlign: "center" }}>
        Explora tus emociones y comparte tus frases favoritas
      </Text>
    </View>
  );
}
