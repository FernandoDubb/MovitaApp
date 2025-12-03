import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { getFavorites, removeFavorite, FavoriteItem } from "../services/favorites";
import { useIsFocused } from "@react-navigation/native";

export default function FavoritesScreen() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const isFocused = useIsFocused(); // <- Detecta cuando la pantalla se muestra

  useEffect(() => {
    if (isFocused) {
      getFavorites().then(setFavorites); // Se recarga cada vez que vuelve
    }
  }, [isFocused]);

  const handleRemoveFavorite = async (index: number) => {
    await removeFavorite(index);
    setFavorites(prev => prev.filter((_, i) => i !== index));
  };

  const renderItem = ({ item, index }: { item: FavoriteItem; index: number }) => (
    <View
      style={{
        padding: 12,
        backgroundColor: "#1a1a1a",
        borderRadius: 12,
        marginBottom: 12,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
      }}
    >
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 16, fontWeight: "500", color: "#fff" }}>{item.phrase}</Text>
        <Text style={{ color: "gray", marginTop: 2, fontSize: 12 }}>({item.emotion})</Text>
      </View>

      <TouchableOpacity
        onPress={() => handleRemoveFavorite(index)}
        style={{ marginLeft: 12, padding: 6, backgroundColor: "#ff6b6b", borderRadius: 6 }}
      >
        <Text style={{ color: "#fff", fontWeight: "600", fontSize: 14 }}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#000" }}>
      <Text style={{ fontSize: 22, fontWeight: "600", marginTop: 25, marginBottom: 15, color: "#fff" }}>
        Frases favoritas
      </Text>

      <FlatList
        data={favorites}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", color: "gray", marginTop: 50, fontSize: 16 }}>
            No tienes frases favoritas aún 
          </Text>
        }
      />
    </View>
  );
}
