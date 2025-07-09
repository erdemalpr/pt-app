// app/(auth)/login.tsx
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Text, TextInput, TouchableOpacity,
  View
} from 'react-native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [pw, setPw] = useState('');
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#1C1C1C', '#121212']}
      className="flex-1 p-5 justify-center"
    >
      <Text className="text-red-50 text-2xl font-semibold mb-8">
        Welcome back! Sign in to get started.
      </Text>

      <View className="flex-row items-center bg-[#1E1E1E] rounded-lg px-2.5 mb-4">
        <Ionicons name="mail-outline" size={20} color="#888888" />
        <TextInput
          className="flex-1 text-white h-11 ml-2"
          placeholder="Enter email"
          placeholderTextColor="#555555"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View className="flex-row items-center bg-[#1E1E1E] rounded-lg px-2.5 mb-4">
        <Ionicons name="lock-closed-outline" size={20} color="#888888" />
        <TextInput
          className="flex-1 text-white h-11 ml-2"
          placeholder="Enter password"
          placeholderTextColor="#555555"
          secureTextEntry
          value={pw}
          onChangeText={setPw}
        />
      </View>

      <TouchableOpacity
        className="bg-[#F97316] py-3.5 rounded-lg items-center mt-2.5"
        onPress={() => {router.replace('/pages/homepage/(tabs)/overview');}}
      >
        <Text className="text-black text-base font-semibold">
          Continue
        </Text>
      </TouchableOpacity>

      <Text className="text-center text-[#555555] my-4">Or</Text>

      <View className="flex-row justify-around mb-5">
        <FontAwesome name="google" size={32} color="#FFFFFF" />
        <FontAwesome name="apple" size={32} color="#FFFFFF" />
        <FontAwesome name="facebook" size={32} color="#FFFFFF" />
      </View>

      <TouchableOpacity onPress={() => router.replace('/(auth)/onboarding')}>
        <Text className="text-center text-[#AAAAAA]">
          Don’t have an account?{' '}
          <Text className="text-[#F97316]">Sign up now</Text>
        </Text>
      </TouchableOpacity>
    </LinearGradient>
  );
}
