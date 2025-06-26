// app/home/pages/index.tsx
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

const categories: { id: string; title: string; icon: 'heart-outline' | 'leaf-outline' | 'barbell-outline' }[] = [
  { id: 'cardio', title: 'Cardio', icon: 'heart-outline' },
  { id: 'yoga', title: 'Yoga', icon: 'leaf-outline' },
  { id: 'gym', title: 'Gym', icon: 'barbell-outline' },
];

const mostPopularData = [
  {
    id: '1',
    title: 'Body Pump Training',
    duration: 60,
    image: 'https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg',
  },
  {
    id: '2',
    title: 'Playground Strength',
    duration: 45,
    image: 'https://images.pexels.com/photos/703014/pexels-photo-703014.jpeg',
  },
  // ...daha fazlası
];

export default function HomePage() {
  return (
    <ScrollView className="flex-1 bg-black" showsVerticalScrollIndicator={false}>
      {/* --- Kategori Kartları --- */}
      <View className="flex-row justify-between px-4 mt-4">
        {categories.map(cat => (
          <TouchableOpacity
            key={cat.id}
            className="flex-1 bg-zinc-900 items-center py-5 mx-1 rounded-xl"
          >
            <Ionicons name={cat.icon} size={28} color="#F97316" />
            <Text className="text-white mt-2 text-sm">{cat.title}</Text>
            <Text className="text-gray-500 text-xs">Steps</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* --- Most Popular Başlığı --- */}
      <View className="flex-row justify-between items-center px-4 mt-6">
        <Text className="text-white text-xl font-semibold">Most Popular</Text>
        <TouchableOpacity>
          <Text className="text-orange-500">See All</Text>
        </TouchableOpacity>
      </View>

      {/* --- Most Popular Liste (Yatay) --- */}
      <FlatList
        data={mostPopularData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 16 }}
        renderItem={({ item }) => (
          <TouchableOpacity className="w-[200px] bg-zinc-900 rounded-xl mr-4 overflow-hidden">
            <Image source={{ uri: item.image }} className="w-full h-[120px]" />
            <View className="p-3">
              <Text className="text-white text-base font-medium">{item.title}</Text>
              <Text className="text-gray-500 text-xs mt-1">{item.duration} Minutes</Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {/* --- İstatistik Kartları --- */}
      <View className="flex-row justify-between px-4 mt-2">
        {[
          { label: 'Exercise', value: '324' },
          { label: 'Kkal', value: '3.30' },
          { label: 'Duration', value: '60' },
        ].map(stat => (
          <View key={stat.label} className="flex-1 bg-zinc-900 rounded-xl items-center py-4 mx-1">
            <Text className="text-white text-lg font-bold">{stat.value}</Text>
            <Text className="text-gray-500 text-xs">{stat.label}</Text>
          </View>
        ))}
      </View>

      {/* --- Today’s Workout --- */}
      <View className="flex-row justify-between items-center px-4 mt-6">
        <Text className="text-white text-xl font-semibold">Today’s Workout</Text>
        <TouchableOpacity>
          <Text className="text-orange-500">See All</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity className="flex-row bg-zinc-900 m-4 rounded-xl p-3 items-center">
        <Image
          source={{ uri: 'https://images.pexels.com/photos/703014/pexels-photo-703014.jpeg' }}
          className="w-20 h-20 rounded-lg"
        />
        <View className="ml-3 flex-1">
          <Text className="text-white text-base font-medium">30 Menit Cardio Intens</Text>
          <Text className="text-orange-500 mt-1">Cardio</Text>
          <Text className="text-gray-500 mt-1">30 Minutes - Day 1</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}
