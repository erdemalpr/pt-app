import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import HeaderBar from './components/HeaderBar';

// SAYFA BİLEŞENLERİ — .tsx uzantısı yazmanıza gerek yok
import HomeScreen from './pages/homePage'; // ./pages/index.tsx
import ProfileScreen from './pages/profile';
import Settings from './pages/setting';


const Drawer = createDrawerNavigator();

export default function HomeLayout() {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: () => <HeaderBar />,
        drawerActiveTintColor: '#F97316',
        drawerStyle: { backgroundColor: '#0a0a0a' },
        drawerLabelStyle: { color: 'white' },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Anasayfa' }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ title: 'Profilim' }}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{ title: 'Ayarlar' }}
      />
    </Drawer.Navigator>
  );
}
