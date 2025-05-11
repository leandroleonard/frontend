import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="(tabs)" screenOptions={{
      headerShown: false
    }}>
        <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
