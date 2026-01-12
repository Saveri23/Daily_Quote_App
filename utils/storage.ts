import AsyncStorage from "@react-native-async-storage/async-storage";

type Quote = {
  content: string;
  author: string;
};

const KEY = "FAVORITES";

export const saveFavorite = async (quote: Quote) => {
  const existing = await getFavorites();
  await AsyncStorage.setItem(KEY, JSON.stringify([...existing, quote]));
};

export const getFavorites = async (): Promise<Quote[]> => {
  const data = await AsyncStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
};
