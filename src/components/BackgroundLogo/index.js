import React from 'react';
import { View, StyleSheet, SafeAreaView, ImageBackground } from 'react-native';

const background = require('../../../assets/page_back.png');
const detail = require('../../../assets/page_back_detail.png');

export default function BackgroundLogo({ children, data }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        // source={data === 'detail' ? detail : background}
        style={{ width: '100%', height: '128%' }}>
        {children}
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
