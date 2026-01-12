import { Appearance } from "react-native";

export type Theme = {
  background: string;
  card: string;
  text: string;
  button: string;
};

export const lightTheme: Theme = {
  background: "#f5f7fb",
  card: "#ffffff",
  text: "#111111",
  button: "#4f46e5",
};

export const darkTheme: Theme = {
  background: "#0f172a",
  card: "#1e293b",
  text: "#f8fafc",
  button: "#6366f1",
};

export const getSystemTheme = (): Theme =>
  Appearance.getColorScheme() === "dark" ? darkTheme : lightTheme;
