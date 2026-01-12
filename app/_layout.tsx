import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Quotes" }} />
      <Tabs.Screen name="favorites" options={{ title: "Favorites" }} />
    </Tabs>
  );
}
