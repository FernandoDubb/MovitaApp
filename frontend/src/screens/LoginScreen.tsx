import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const nav = useNavigation<any>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Pantalla de Login</Text>
      <Button title="Entrar" onPress={() => nav.navigate("Tabs")} />
    </View>
  );
}
