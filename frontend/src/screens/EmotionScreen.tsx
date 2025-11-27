import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function EmotionScreen() {
  const nav = useNavigation<any>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Selecciona una emoción</Text>
      <Button title="Ver frase" onPress={() => nav.navigate("Phrase")} />
    </View>
  );
}
