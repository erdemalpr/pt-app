import { Ionicons } from '@expo/vector-icons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HeaderBar() {
  const navigation = useNavigation();

  return (
    <SafeAreaView edges={['top']} className="bg-black">
      <View className="flex-row justify-between items-center p-4">
        <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Ionicons name="menu" size={28} color="#FFF" />
        </TouchableOpacity>

        <View className="flex-row items-center">
          <TouchableOpacity className="mr-4">
            <Ionicons name="search" size={24} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity className="mr-4">
            <Ionicons name="notifications-outline" size={24} color="#FFF" />
          </TouchableOpacity>
          <Image source={{ uri: 'https://i.pravatar.cc/100' }} className="w-8 h-8 rounded-full" />
        </View>
      </View>
    </SafeAreaView>
  );
}
