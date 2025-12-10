import AsyncStorage from "@react-native-async-storage/async-storage";

export type FavoriteItem = {
  phrase: string;
  emotion: string;
};

const STORAGE_KEY = "favorites_motivaapp";

export const getFavorites = async (): Promise<FavoriteItem[]> => {
  try {
    const json = await AsyncStorage.getItem(STORAGE_KEY);
    return json ? JSON.parse(json) : [];
  } catch (e) {
    return [];
  }
};

export const addFavorite = async (item: FavoriteItem) => {
  const current = await getFavorites();
  current.push(item);
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(current));
};

export const removeFavorite = async (index: number) => {
  const current = await getFavorites();
  current.splice(index, 1);
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(current));
};
