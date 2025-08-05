import React from 'react';
import { View, StyleSheet } from 'react-native';
import ForestGrid from '../../components/ForestGrid';

export default function ForestScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.innerContent}>
      <ForestGrid />
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6ffe6', // 연녹색 배경
    justifyContent: 'center',
    alignItems: 'center',
  },
   innerContent: {
    width: 360, // ✅ 모바일 기준 너비
    maxWidth: '100%',
    padding: 16,
  },
});
