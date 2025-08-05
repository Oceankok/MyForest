import { Slot, useRouter, usePathname } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RootLayout() {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const check = async () => {
      await AsyncStorage.removeItem('token'); //로그인부터 하고 싶으면 주석 제거

      const token = await AsyncStorage.getItem('token');
      console.log('🔥 token:', token);
      console.log('📍 current path:', pathname);

      if (!token && pathname !== '/login') {
        router.replace('/login');
        return;
      }

      if (token && pathname === '/login') {
        router.replace('/(tabs)');
        return;
      }

      setLoading(false);
    };

    check();
  }, [pathname]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return <Slot />;
}
