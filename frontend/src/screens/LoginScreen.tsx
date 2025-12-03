import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const nav = useNavigation<any>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#1c1c1e", padding: 20 }}>
      <Text style={{ fontSize: 28, fontWeight: "700", color: "#fff", marginBottom: 40 }}>Bienvenido</Text>
      <TouchableOpacity
        onPress={() => nav.navigate("Tabs")}
        style={{ backgroundColor: "#ff6b6b", paddingVertical: 15, paddingHorizontal: 40, borderRadius: 12 }}
      >
        <Text style={{ color: "#fff", fontSize: 18, fontWeight: "600" }}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
