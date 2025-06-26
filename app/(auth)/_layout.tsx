// app/(auth)/_layout.tsx
import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* login.tsx */}
      <Stack.Screen name="login" />
      {/* onboarding.tsx */}
      <Stack.Screen name="onboarding" />
    </Stack>
  );
}
