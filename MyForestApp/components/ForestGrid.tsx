import React from 'react';
import { View, StyleSheet } from 'react-native';
import Tile from './Tile';

const GRID_SIZE = 10;

export default function ForestGrid() {
  return (
    <View style={styles.grid}>
      {Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, index) => (
        <Tile key={index} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  grid: {
  width: '100%', // ✅ 부모의 360px에 맞춰짐
  aspectRatio: 1, // ✅ 정사각형 유지
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
}
});
