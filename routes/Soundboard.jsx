import React from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import Sound from 'react-native-sound'
import styles from '../styles'
import soundboard from '../utils/soundboard'

Sound.setCategory('Playback')

export default function Soundboard() {
  function playSound(name) {
    var sound = new Sound(name + '.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error)
        return
      }
    })
    setTimeout(() => {
      sound.setVolume(1)
      sound.play()
    }, 100)
    
  }

  return (
    <View style={{ ...styles.rouge, ...styles.fullHeight }}>
      <Text style={{ ...styles.center, ...styles.title }}>Soundboard</Text>
      <ScrollView>
      <View style={styles.soundboard.container}>

        {/* Soundboard*/}
        {Object.keys(soundboard).map(i => {
          var row = soundboard[i]
          return <View
            style={styles.soundboard.row}
            key={'row' + i}>

            {/* Soundboard Row */}
            {Object.keys(row).map(s => {
              var soundEffect = row[s]
              return <TouchableOpacity
                  style={styles.soundboard.box}
                  key={s}
                  onPress={() => playSound(s)}>
                <Image
                  style={styles.soundboard.image}
                  source={soundEffect.image}
                ></Image>
              </TouchableOpacity>
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