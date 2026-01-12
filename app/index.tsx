import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Share, Appearance } from "react-native";
import { Feather } from "@expo/vector-icons";
import QuoteCard from "../components/QuoteCard";
import { saveFavorite } from "../utils/storage";
import { getSystemTheme, lightTheme, darkTheme, Theme } from "../theme";

type Quote = { content: string; author: string };

export default function HomeScreen() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [theme, setTheme] = useState<Theme>(getSystemTheme());
  const [isDark, setIsDark] = useState(Appearance.getColorScheme() === "dark");

  const fetchQuote = async () => {
    try {
      const response = await fetch("https://zenquotes.io/api/random");
      const data = await response.json();
      setQuote({ content: data[0].q, author: data[0].a });
    } catch (error) {
      console.error("Failed to fetch quote", error);
    }
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    setTheme(!isDark ? darkTheme : lightTheme);
  };

  const shareQuote = async () => {
    if (!quote) return;
    await Share.share({ message: `"${quote.content}" — ${quote.author}` });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  if (!quote) return null;

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Dark Mode Toggle */}
      <TouchableOpacity style={styles.iconBtn} onPress={toggleTheme}>
        {isDark ? (
          <Feather name="sun" size={24} color="#facc15" />
        ) : (
          <Feather name="moon" size={24} color="#1e293b" />
        )}
      </TouchableOpacity>

      <QuoteCard quote={quote} theme={theme} />

      <TouchableOpacity
        style={[styles.primaryBtn, { backgroundColor: theme.button }]}
        onPress={fetchQuote}
      >
        <Text style={styles.btnText}>✨ New Quote</Text>
      </TouchableOpacity>

      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.secondaryBtn, { backgroundColor: theme.button }]}
          onPress={() => saveFavorite(quote)}
        >
          <Text style={styles.btnText}>❤️ Favorite</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.secondaryBtn, { backgroundColor: theme.button }]}
          onPress={shareQuote}
        >
          <Text style={styles.btnText}>📤 Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  primaryBtn: { padding: 15, borderRadius: 12, marginBottom: 12 },
  secondaryBtn: { padding: 14, borderRadius: 12, width: "48%" },
  btnText: { color: "#fff", textAlign: "center", fontWeight: "600", fontSize: 16 },
  row: { flexDirection: "row", justifyContent: "space-between" },
  iconBtn: { position: "absolute", top: 40, right: 20, zIndex: 10 },
});
