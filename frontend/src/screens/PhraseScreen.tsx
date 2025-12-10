import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { EMOTIONS } from "../services/emotions";
import { addFavorite } from "../services/favorites";
import * as Notifications from "expo-notifications";

export default function PhraseScreen() {
  const route = useRoute<any>();
  const emotion: string = route.params?.emotion;

  const [phrase, setPhrase] = useState("");

  useEffect(() => {
    showRandomPhrase();
  }, []);

  const showRandomPhrase = () => {
    const arr = EMOTIONS[emotion as keyof typeof EMOTIONS];
    const random = arr[Math.floor(Math.random() * arr.length)];
    setPhrase(random);
  };

  const setReminder = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: "Tu recordatorio motivacional 💫",
        body: "Regresa a MotivaApp por un mensaje especial.",
      },
      trigger: {
        type: Notifications.SchedulableTriggerInputTypes.TIME_INTERVAL,
        seconds: 10,
        repeats: false,
      },
    });

    alert("Recordatorio activado!");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tu frase cuando estás:</Text>
      <Text style={styles.emotion}>{emotion.toUpperCase()}</Text>

      <View style={styles.phraseBox}>
        <Text style={styles.phrase}>{phrase}</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={showRandomPhrase}>
        <Text style={styles.btnText}>Ver otra frase</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          addFavorite({ phrase, emotion });
          alert("Agregado a favoritos");
        }}
      >
        <Text style={styles.btnText}>Agregar a favoritos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btn} onPress={setReminder}>
        <Text style={styles.btnText}>Recordatorio motivacional</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1c1c1e", alignItems: "center", paddingTop: 60 },
  title: { color: "#fff", fontSize: 22 },
  emotion: { color: "#ff6b6b", fontSize: 30, marginVertical: 10 },
  phraseBox: {
    backgroundColor: "#333",
    padding: 20,
    borderRadius: 12,
    width: "85%",
    marginVertical: 30,
  },
  phrase: { color: "#fff", fontSize: 18, textAlign: "center" },
  btn: {
    backgroundColor: "#ff6b6b",
    padding: 15,
    borderRadius: 12,
    width: "70%",
    marginTop: 15,
    alignItems: "center",
  },
  btnText: { color: "#fff", fontSize: 16 },
});
