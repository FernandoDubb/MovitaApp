import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { getFavorites, removeFavorite, FavoriteItem } from "../services/favorites";
import { useIsFocused } from "@react-navigation/native";

export default function FavoritesScreen() {
  const [favorites, setFavorites] = useState<FavoriteItem[]>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) getFavorites().then(setFavorites);
  }, [isFocused]);

  const handleRemoveFavorite = async (index: number) => {
    await removeFavorite(index);
    setFavorites(prev => prev.filter((_, i) => i !== index));
  };

  const renderItem = ({ item, index }: { item: FavoriteItem; index: number }) => (
    <View
      style={{
        padding: 16,
        backgroundColor: "#1a1a1a",
        borderRadius: 15,
        marginBottom: 16,
        shadowColor: "#000",
        shadowOpacity: 0.4,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 6,
        elevation: 6,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "600", color: "#fff" }}>{item.phrase}</Text>
      <Text style={{ color: "#888", marginTop: 4, fontSize: 12 }}>{item.emotion.toUpperCase()}</Text>

      <TouchableOpacity
        onPress={() => handleRemoveFavorite(index)}
        style={{
          marginTop: 10,
          alignSelf: "flex-end",
          paddingVertical: 6,
          paddingHorizontal: 12,
          backgroundColor: "#FF6B6B",
          borderRadius: 8,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "600", fontSize: 14 }}>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: "#121212" }}>
      <Text style={{ fontSize: 22, fontWeight: "700", marginBottom: 20, color: "#fff" }}>
        Frases favoritas
      </Text>

      <FlatList
        data={favorites}
        keyExtractor={(_, i) => i.toString()}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={{ textAlign: "center", color: "#888", marginTop: 50, fontSize: 16 }}>
            No tienes frases favoritas aún
          </Text>
        }
      />
    </View>
  );
}
