import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
      <Text style={styles.text}>Hello, world! ok ok </Text>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:160,
  },
  text: {
    fontSize: 20,
    color: 'red',
  },
});