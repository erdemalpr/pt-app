// app/pages/components/HeaderBar.tsx
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HeaderBar() {
  const navigation = useNavigation();

  return (
    <SafeAreaView edges={['top']} className="bg-[#111111]">
      <View className="h-14 px-4 flex-row items-center justify-between">
        {/* Menü Butonu */}
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Ionicons name="menu" size={28} color="#FFFFFF" />
        </TouchableOpacity>

        {/* Başlık */}
        <Text className="flex-1 text-white text-lg font-semibold text-center">
          Başlık
        </Text>

        {/* Sağ İkonlar */}
        <View className="flex-row items-center">
          <TouchableOpacity className="ml-3">
            <Ionicons name="search" size={22} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity className="ml-3">
            <Ionicons name="notifications-outline" size={22} color="#FFFFFF" />
          </TouchableOpacity>
          <TouchableOpacity className="ml-3">
            <FontAwesome name="user-circle" size={24} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
