import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function searchField({ icon, rest }) {
  return (
    <View style={styles.search} {...rest}>
      {icon && <MaterialIcons name={icon} size={30} color="#303943" />}
      <TextInput style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    width: 324,
    height: 45,
    left: 26,
    top: 40,
    backgroundColor: '#f5f5f5',
    borderRadius: 100,
    flexDirection: 'row',
    paddingLeft: 18,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingLeft: 18,
    color: '#303943',
  },
});
