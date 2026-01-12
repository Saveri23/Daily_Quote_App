import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Theme } from "../theme";

type Quote = { content: string; author: string };

export default function QuoteCard({ quote, theme }: { quote: Quote; theme: Theme }) {
  return (
    <View style={[styles.card, { backgroundColor: theme.card }]}>
      <Text style={[styles.quote, { color: theme.text }]}>"{quote.content}"</Text>
      <Text style={[styles.author, { color: theme.text }]}>— {quote.author}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { padding: 18, borderRadius: 14, marginBottom: 15, elevation: 4 },
  quote: { fontSize: 16 },
  author: { marginTop: 8, textAlign: "right", fontStyle: "italic" },
});
