import React from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import styles from '../styles'
import soundboard from '../utils/soundboard'

export default function Soundboard() {
  return (
    <View style={{ ...styles.rouge, ...styles.fullHeight }}>
      <Text style={{ ...styles.center, ...styles.title }}>Soundboard</Text>
      <ScrollView>
      <View style={styles.soundboard.container}>
        {/* Soundboard*/}
        {Object.keys(soundboard.images).map(i => {
          var row = soundboard.images[i]
          return <View
            style={styles.soundboard.row}
            key={'soundboardRow' + i}>

            {/* Soundboard Row */}
            {Object.keys(row).map(s => {
              var soundImage = row[s]

              return <Image
                key={'soundboardItem' + s}
                style={styles.soundboard.box}
                source={soundImage.image}
              ></Image>
              
            }
            )}
          </View>
        }
        )}
      </View>
      </ScrollView>
    </View>
      
  )
}