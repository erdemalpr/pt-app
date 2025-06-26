// app/+not-found.tsx
import { useRouter } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function NotFound() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
      }}
    >
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Sayfa Bulunamadı</Text>
      <TouchableOpacity onPress={() => router.replace('/')}>
        <Text style={{ color: '#F97316' }}>Ana Sayfaya Dön</Text>
      </TouchableOpacity>
    </View>
  );
}
