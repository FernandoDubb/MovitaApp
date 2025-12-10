import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";

export default function EmotionScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const emotions = [
    { key: "feliz", label: "Feliz" },
    { key: "triste", label: "Triste" },
    { key: "enojado", label: "Enojado" },
    { key: "ansioso", label: "Ansioso" },
    { key: "motivado", label: "Motivado" },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Selecciona una emoción</Text>

      {emotions.map((item) => (
        <TouchableOpacity
          key={item.key}
          style={styles.button}
          onPress={() => navigation.navigate("Phrase", { emotion: item.key })}
        >
          <Text style={styles.buttonText}>{item.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#1c1c1e", paddingTop: 80, alignItems: "center" },
  title: { fontSize: 24, color: "#fff", marginBottom: 30 },
  button: {
    backgroundColor: "#333",
    paddingVertical: 15,
    width: "80%",
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontSize: 18 },
});
