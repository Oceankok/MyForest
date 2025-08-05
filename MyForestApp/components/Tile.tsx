import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Tile() {
  return <View style={styles.tile} />;
}

const styles = StyleSheet.create({
  tile: {
    width: 30,
    height: 30,
    backgroundColor: '#a8e6a3',
    margin: 1,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: '#88c788',
  },
});
