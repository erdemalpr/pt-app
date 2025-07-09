import { Text, View } from 'react-native';

export default function ProgressScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#fff', fontSize: 24 }}>Progress</Text>
    </View>
  );
}

ProgressScreen.options = {
  title: 'Progress',
};
