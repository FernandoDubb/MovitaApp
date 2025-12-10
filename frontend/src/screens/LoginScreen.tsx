import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/AppNavigator";

export default function LoginScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bienvenido a MotivaApp</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Tabs")}
      >
        <Text style={styles.btnText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#1c1c1e" },
  title: { fontSize: 28, fontWeight: "700", color: "#fff", marginBottom: 40 },
  button: { backgroundColor: "#ff6b6b", paddingVertical: 15, paddingHorizontal: 40, borderRadius: 12 },
  btnText: { color: "#fff", fontSize: 18, fontWeight: "600" },
});
