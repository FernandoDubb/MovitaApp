import React from "react";
import { Button, Share } from "react-native";

export default function ShareButton() {
  const onShare = async () => {
    try {
      await Share.share({
        message: "Mira este contenido desde mi app MovitaApp",
      });
    } catch (error) {
      console.log("Error al compartir:", error);
    }
  };

  return <Button title="Compartir a WhatsApp" onPress={onShare} />;
}
