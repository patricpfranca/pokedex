import React from 'react';
import { View, StyleSheet, Image, SafeAreaView } from 'react-native';

const logo = require('../../../assets/substract.png');

export default function backgroundLogo({ children }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Image source={logo} />
      </View>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  logo: {
    alignItems: 'flex-end',
  },
});
