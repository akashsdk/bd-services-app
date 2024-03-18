import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'

import Navigation from './Screen/Navigation';

export default function App() {
  return (
    <Navigation/>
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