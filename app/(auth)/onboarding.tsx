import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const options = [
  { key: 'weight',      label: 'Weight Loss',        icon: 'body' },
  { key: 'muscle',      label: 'Build Muscle',       icon: 'barbell' },
  { key: 'endurance',   label: 'Improve Endurance',  icon: 'walk' },
  { key: 'flexibility', label: 'Enhance Flexibility',icon: 'repeat' },
  { key: 'general',     label: 'General Fitness',    icon: 'heart' },
];

export default function Onboarding() {
  const [sel, setSel] = useState<string | null>(null);
  const router = useRouter();

  const renderItem = ({ item }: { item: typeof options[0] }) => {
    const active = item.key === sel;
    return (

      <TouchableOpacity
        className={`flex-row items-center bg-black p-3 rounded-lg mb-3 ${
          active ? 'border-2 border-[#F97316]' : ''
        }`}
        onPress={() => setSel(item.key)}
      >
        <Ionicons
          name={
            (active ? item.icon : item.icon + '-outline') as keyof typeof Ionicons.glyphMap
          }
          size={24}
          color={active ? '#F97316' : '#FFFFFF'}
          style={{ width: 30 }}
        />
        <View className="flex-1 ml-3">
          <Text
            className={`text-base font-medium ${
              active ? 'text-[#F97316]' : 'text-white'
            }`}
          >
            {item.label}
          </Text>
          <Text className="text-xs text-[#AAAAAA]">
            {{
              weight: 'Achieve a healthier weight.',
              muscle: 'Gain strength and size.',
              endurance: 'Boost your stamina.',
              flexibility: 'Increase your mobility.',
              general: 'Stay active and fit.',
            }[item.key]}
          </Text>
        </View>
        {active && <Ionicons name="radio-button-on" size={20} color="#F97316" />}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView 
      style={{ flex: 1, backgroundColor: '#1C1C1C' }} 
      edges={['top']}
     
    >
        <LinearGradient
            colors={['#1C1C1C', '#121212']}
            className="flex-1 p-5 justify-center"
          >
    
      <View className="flex-1 p-5">
        <Text className="text-white text-xl mb-5">What are your fitness goals?</Text>

        <FlatList
          data={options}
          renderItem={renderItem}
          keyExtractor={(i) => i.key}
        />

        <TouchableOpacity
          className="bg-[#F97316] py-3.5 rounded-lg items-center mt-2.5"
          onPress={() => {
           
          }}
        >
          <Text className="text-black text-base font-semibold">İleri</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            // atla logic
            router.replace('/login');
          }}
        >
          <Text className="text-[#555555] text-center mt-2">İptal</Text>
        </TouchableOpacity>
      </View>
      </LinearGradient>
    </SafeAreaView>
  );
}
