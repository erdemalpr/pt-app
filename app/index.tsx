// app/index.tsx
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import '../global.css'; // Ensure global styles are imported

export default function Splash() {
  const router = useRouter();
  return (
    <LinearGradient
      colors={['#1C1C1C', '#121212']}
      className="flex-1"
    >
      <View className="flex-1 justify-center items-center">
        <Text className="text-[#F97316] text-3xl font-bold">
          S
        </Text>
        <Text className="text-white text-lg mt-2">
          Start building a healthier, stronger you.
        </Text>
      </View>
      <TouchableOpacity
        className="bg-[#F97316] py-3.5 m-5 rounded-lg items-center"
        onPress={() => router.replace('/login')}
      >
        <Text className="text-black text-base font-semibold">
          Start Your Journey
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
