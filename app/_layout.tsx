// app/_layout.tsx
import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* index.tsx (Splash) */}
      <Stack.Screen name="index" />
      {/* (auth) klasöründeki flow */}

    </Stack>
  );
}
