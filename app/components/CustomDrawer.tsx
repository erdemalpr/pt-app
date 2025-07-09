import { FontAwesome } from '@expo/vector-icons';
import { usePathname, useRouter } from 'expo-router';
import React from 'react';
import { Platform, StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CustomDrawer() {
  const router = useRouter();
  const pathname = usePathname();

  const navigateTo = (path: string) => {
    if (pathname !== path) {
      router.push(path as any);
    }
  };

  const handleLogout = () => {
    router.replace('/(auth)/login');
  };

  return (
    <SafeAreaView
      edges={['top', 'bottom']}
      style={{
        flex: 1,
        backgroundColor: '#1C1C1C',
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // 👈 bu satır kritik
      }}
    >
      <View style={{ padding: 20,  alignItems: 'center' }}>
        <FontAwesome name="user-circle" size={64} color="#AAAAAA" />
        <Text style={{ color: '#FFF', fontSize: 16, fontWeight: '600', marginTop: 10 }}>
          Ahmet Yılmaz
        </Text>
      </View>

      <View style={{ paddingVertical: 20, paddingHorizontal: 16 }}>
        <DrawerItem
          label="Ana Sayfa"
          icon="home"
          active={pathname.startsWith('/pages/homepage')}
          onPress={() => navigateTo('/pages/homepage')}
        />
        <DrawerItem
          label="Profil"
          icon="user"
          active={pathname === '/pages/profile'}
          onPress={() => navigateTo('/pages/profile')}
        />
        <DrawerItem
          label="Ayarlar"
          icon="cog"
          active={pathname === '/pages/settings'}
          onPress={() => navigateTo('/pages/settings')}
        />
      </View>

      <TouchableOpacity
        onPress={handleLogout}
        style={{
          marginTop: 'auto',
          padding: 16,
          borderTopWidth: 1,
          borderColor: '#2E2E2E',
        }}
      >
        <Text style={{ color: '#F97316', textAlign: 'center', fontSize: 16 }}>
          Çıkış Yap
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

function DrawerItem({
  label,
  icon,
  active,
  onPress,
}: {
  label: string;
  icon: keyof typeof FontAwesome.glyphMap;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ flexDirection: 'row', alignItems: 'center', paddingVertical: 12 }}
    >
      <FontAwesome
        name={icon}
        size={20}
        color={active ? '#F97316' : '#AAAAAA'}
        style={{ marginRight: 12 }}
      />
      <Text style={{ fontSize: 16, color: active ? '#F97316' : '#FFFFFF' }}>{label}</Text>
    </TouchableOpacity>
  );
}
