import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";
import { EMOTIONS, EmotionType } from "../services/emotions";
import { addFavorite } from "../services/favorites";

type RouteParams = { emotion: EmotionType };

export default function PhraseScreen() {
  const route = useRoute<any>();
  const nav = useNavigation<any>();
  const { emotion } = route.params as RouteParams;

  const getRandomPhrase = (): string => {
    const phrases = EMOTIONS[emotion];
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
  };

  const [phrase, setPhrase] = useState<string>(getRandomPhrase());
  const [added, setAdded] = useState(false); 

  const handleAddFavorite = () => {
    addFavorite({ phrase, emotion });
    setAdded(true);
    Alert.alert("Agregado", "La frase se agregó a favoritos ✅");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 20, backgroundColor: "#000" }}>
      <Text style={{ fontSize: 22, textAlign: "center", color: "#fff", marginBottom: 20 }}>
        Tu frase para cuando estás <Text style={{ fontWeight: "bold", color: "#00bcd4" }}>{emotion}</Text>:
      </Text>

      <View style={{ backgroundColor: "#1a1a1a", padding: 25, borderRadius: 15, marginBottom: 30 }}>
        <Text style={{ fontSize: 18, fontStyle: "italic", textAlign: "center", color: "#fff" }}>"{phrase}"</Text>
      </View>

      <TouchableOpacity
        onPress={() => setPhrase(getRandomPhrase())}
        style={{ backgroundColor: "#00bcd4", paddingVertical: 14, borderRadius: 12, marginBottom: 15 }}
      >
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600", textAlign: "center" }}>Ver otra frase</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleAddFavorite}
        style={{ backgroundColor: "#4caf50", paddingVertical: 14, borderRadius: 12, marginBottom: 15 }}
      >
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600", textAlign: "center" }}>
          {added ? "Agregado ✅" : "Agregar a favoritos"}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ paddingVertical: 12 }} onPress={() => nav.goBack()}>
        <Text style={{ fontSize: 16, color: "#fff", textAlign: "center" }}>Volver</Text>
      </TouchableOpacity>
    </View>
  );
}
