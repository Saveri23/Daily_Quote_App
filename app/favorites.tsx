import React, { useEffect, useState } from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
import { getFavorites } from "../utils/storage";
import { getSystemTheme } from "../theme"; // ✅ CORRECT

type Quote = { content: string; author: string };

export default function FavoritesScreen() {
  const [favorites, setFavorites] = useState<Quote[]>([]);
  const theme = getSystemTheme(); // ✅ CORRECT

  useEffect(() => {
    getFavorites().then(setFavorites);
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <FlatList
        data={favorites}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <View style={[styles.card, { backgroundColor: theme.card }]}>
            <Text style={[styles.quote, { color: theme.text }]}>
              "{item.content}"
            </Text>
            <Text style={[styles.author, { color: theme.text }]}>
              — {item.author}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: { padding: 18, borderRadius: 14, marginBottom: 15, elevation: 4 },
  quote: { fontSize: 16 },
  author: { marginTop: 8, textAlign: "right", fontStyle: "italic" },
});
