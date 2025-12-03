import AsyncStorage from "@react-native-async-storage/async-storage";

const KEY = "FAVORITE_PHRASES";

export type FavoriteItem = {
  phrase: string;
  emotion: string;
};

export async function addFavorite(item: FavoriteItem) {
  const data = await AsyncStorage.getItem(KEY);
  const list = data ? JSON.parse(data) : [];

  list.push(item);

  await AsyncStorage.setItem(KEY, JSON.stringify(list));
}

export async function getFavorites(): Promise<FavoriteItem[]> {
  const data = await AsyncStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
}

export async function removeFavorite(index: number) {
  const data = await AsyncStorage.getItem(KEY);
  const list = data ? JSON.parse(data) : [];

  list.splice(index, 1);

  await AsyncStorage.setItem(KEY, JSON.stringify(list));
}
