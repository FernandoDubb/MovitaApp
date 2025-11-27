import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const nav = useNavigation<any>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>¿Cómo te sientes hoy?</Text>
      <Button title="Elegir emoción" onPress={() => nav.navigate("Emotion")} />
    </View>
  );
}
