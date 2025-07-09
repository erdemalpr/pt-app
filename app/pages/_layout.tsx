// app/pages/_layout.tsx
import { Drawer } from 'expo-router/drawer';
import CustomDrawer from '../components/CustomDrawer';
import HeaderBar from '../components/HeaderBar';

export default function PagesLayout() {
  return (
    <Drawer
      drawerContent={() => <CustomDrawer />}
      screenOptions={{
        // Drawer içindeki her sayfa için özel header
        header: ()=> <HeaderBar />,
        drawerType: 'slide',
        drawerStyle: {
          backgroundColor: '#fff',
          width: 240,
        },
      }}
    />
  );
}
