import { Text, View } from 'react-native';

export default function OverviewScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#fff', fontSize: 24 }}>Overview</Text>
    </View>
  );
}

OverviewScreen.options = {
  title: 'Overview',
};
