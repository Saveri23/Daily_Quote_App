import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Share,
  Appearance,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import QuoteCard from "../components/QuoteCard";
import { saveFavorite } from "../utils/storage";
import { getSystemTheme, lightTheme, darkTheme, Theme } from "../theme";
import { localQuotes } from "../utils/localQuotes";

type Quote = {
  content: string;
  author: string;
};

export default function HomeScreen() {
  const [quote, setQuote] = useState<Quote | null>(null);
  const [theme, setTheme] = useState<Theme>(getSystemTheme());
  const [isDark, setIsDark] = useState(
    Appearance.getColorScheme() === "dark"
  );

  // ✅ Fetch Quote (Reliable API)

const fetchQuote = async () => {
  try {
    const response = await fetch("https://api.quotable.io/random");

    if (!response.ok) throw new Error("API failed");

    const data = await response.json();

    setQuote({
      content: data.content,
      author: data.author,
    });
  } catch (error) {
    console.log("Quote fetch failed:", error);

    // ✅ Fallback local quote
    const random =
      localQuotes[Math.floor(Math.random() * localQuotes.length)];

    setQuote(random);
  }
};


  // ✅ System theme listener
  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      const dark = colorScheme === "dark";
      setIsDark(dark);
      setTheme(dark ? darkTheme : lightTheme);
    });

    return () => subscription.remove();
  }, []);

  // ✅ Load first quote
  useEffect(() => {
    fetchQuote();
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    setTheme(!isDark ? darkTheme : lightTheme);
  };

  const shareQuote = async () => {
    if (!quote) return;
    await Share.share({
      message: `"${quote.content}" — ${quote.author}`,
    });
  };

  // ✅ NEVER return null (prevents white screen)
  if (!quote) {
    return (
      <View style={[styles.container, { backgroundColor: theme.background }]}>
        <Text style={{ color: theme.text, textAlign: "center", fontSize: 16 }}>
          Loading quote...
        </Text>
      </View>
    );
  }

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* 🌙 Theme Toggle */}
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
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  primaryBtn: {
    padding: 15,
    borderRadius: 12,
    marginBottom: 12,
  },
  secondaryBtn: {
    padding: 14,
    borderRadius: 12,
    width: "48%",
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "600",
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  iconBtn: {
    position: "absolute",
    top: 40,
    right: 20,
    zIndex: 10,
  },
});
