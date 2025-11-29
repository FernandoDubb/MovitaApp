Para este proyecto se integró el plugin expo-sharing, el cual permite compartir contenido desde la aplicación hacia otras apps del dispositivo, como WhatsApp, Facebook, Instagram, etc.
npx expo install expo-sharing expo-file-system
¿Para qué sirve?

Este plugin permite que el usuario pueda compartir una frase motivacional directamente desde MovitaApp.
Es una funcionalidad clave para mejorar la experiencia del usuario.
Implementación en Código

Componente creado:

frontend/src/components/ShareButton.tsx
import React from "react";
import { Button, Share } from "react-native";

export default function ShareButton() {
  const onShare = async () => {
    try {
      await Share.share({
        message: "Mira este contenido desde mi app MovitaApp!",
      });
    } catch (error) {
      console.log("Error al compartir:", error);
    }
  };

  return <Button title="Compartir a WhatsApp" onPress={onShare} />;
}
Integra este botón en HomeScreen:
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ShareButton from "../components/ShareButton";

export default function HomeScreen() {
  const nav = useNavigation<any>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>¿Cómo te sientes hoy?</Text>

      <Button title="Elegir emoción" onPress={() => nav.navigate("Emotion")} />

      <View style={{ marginTop: 20 }}>
        <ShareButton />
      </View>
    </View>
  );
}
