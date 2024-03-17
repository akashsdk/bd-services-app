import { View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
      <Text style={styles.text}>Hello, world! ok</Text>
      
      
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop:100,
  },
  text: {
    fontSize: 20,
    color: 'red',
  },
});