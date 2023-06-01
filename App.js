import React from 'react'
import { Text, View, Image } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import styles from './styles'
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