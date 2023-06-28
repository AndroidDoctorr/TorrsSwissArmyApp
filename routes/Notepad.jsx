import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import styles from '../styles'

export default function Notepad() {
  return (
    <View style={{ ...styles.rouge, ...styles.fullHeight }}>
      <Text style={{ ...styles.center, ...styles.title }}>Notepad</Text>
      <ScrollView style={styles.scrollBox}>
      </ScrollView>
    </View>
  )
}