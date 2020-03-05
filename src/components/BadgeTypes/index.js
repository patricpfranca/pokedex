import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function BadgeTypes({ value, size, ...ref }) {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ccc',
      borderRadius: 38,
      height: size === 'xl' ? 25 : 16,
      width: size === 'xl' ? 70 : 49,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: size === 'xl' ? 9 : 6,
      marginRight: size === 'xl' ? 7 : null,
    },
    type: {
      fontFamily: 'roboto-regular',
      fontSize: size === 'xl' ? 12 : 8,
      lineHeight: 28,
      color: '#fff',
      textTransform: 'capitalize',
    },
  });

  return (
    <View style={styles.container} {...ref}>
      <Text style={styles.type}>{value}</Text>
    </View>
  );
}
