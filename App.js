import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import Notepad from './routes/Notepad'
import Soundboard from './routes/Soundboard'

const Drawer = createDrawerNavigator();

const Home = () => {
  return (<View style={{...styles.rouge, ...styles.fullHeight}}>
    <View style={styles.center}>
      <Text style={styles.title}>Torr's Swiss Army App</Text>
      <Image
        style={{...styles.logo, ...styles.center}}
        source={require('./assets/images/logo.png')}
      />
    </View>
  </View>)
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Notepad" component={Notepad} />
        <Drawer.Screen name="Soundboard" component={Soundboard} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  rouge: {
    backgroundColor: '#902240',
  },
  title: {
    marginTop: 20,
    marginBottom: 20,
    fontSize: 24,
    fontFamily: 'Roboto',
    color: '#ffd',
  },
  center: {
    alignSelf: 'center',
  },
  fullHeight: {
    height: '100%',
  },
  logo: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
  }
})