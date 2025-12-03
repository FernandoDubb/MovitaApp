import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { EmotionType } from "../services/emotions";

export default function EmotionScreen() {
  const nav = useNavigation<any>();

  const emotions: EmotionType[] = ["feliz", "triste", "enojado", "ansioso", "motivado"];

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#e0f7fa" }}>
      <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 30 }}>Selecciona una emoción:</Text>

      {emotions.map((e) => (
        <TouchableOpacity
          key={e}
          onPress={() => nav.navigate("Phrase", { emotion: e })}
          style={{ backgroundColor: "#00bcd4", paddingVertical: 12, paddingHorizontal: 25, borderRadius: 25, marginBottom: 15 }}
        >
          <Text style={{ color: "#fff", fontSize: 18, fontWeight: "500" }}>{e.toUpperCase()}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}