import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { EmotionType } from "../services/emotions";

export default function EmotionScreen() {
  const nav = useNavigation<any>();
  const emotions: EmotionType[] = ["feliz", "triste", "enojado", "ansioso", "motivado"];

  const emotionColors: Record<EmotionType, string> = {
    feliz: "#FFD700",     
    triste: "#1E90FF",    
    enojado: "#FF4500",   
    ansioso: "#800080",   
    motivado: "#32CD32",  
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", padding: 20, backgroundColor: "#000" }}>
      <Text style={{ fontSize: 22, fontWeight: "600", marginBottom: 30, color: "#fff" }}>
        Selecciona una emoción:
      </Text>

      {emotions.map((e) => (
        <TouchableOpacity
          key={e}
          onPress={() => nav.navigate("Phrase", { emotion: e })}
          style={{
            backgroundColor: emotionColors[e],
            paddingVertical: 12,
            paddingHorizontal: 25,
            borderRadius: 25,
            marginBottom: 15,
            width: "70%",
          }}
        >
          <Text style={{ color: "#000", fontSize: 18, fontWeight: "500", textAlign: "center" }}>
            {e.toUpperCase()}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
