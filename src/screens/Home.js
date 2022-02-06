import React from 'react';
import { styles } from '../styles/Main';
import {
  Text,
  View,
  Image,
  Pressable
} from 'react-native';

const Home = ({ navigation }) => {

  const onPressHandler = (screen) => {
    navigation.navigate(screen)
  }

  return <>
    <View style={styles.homeLogo}>
      <Image source={require('../media/C++_Logo.png')} style={styles.image} resizeMode='stretch'/>
      {/* <Text>Hello</Text> */}
    </View>
    <View style={styles.buttonGroup}>
      <Pressable
        style={[{backgroundColor: "red"}, styles.button]}
        onPress={() => onPressHandler("Origins")}
        android_ripple={{color: "#fff"}}
      >
        <Text style={styles.buttonText}>Origins</Text>
      </Pressable>
      <Pressable
        style={[{backgroundColor: "orange"}, styles.button]}
        onPress={() => onPressHandler("WhatIsIt")}
        android_ripple={{color: "#fff"}}
      >
        <Text style={styles.buttonText}>What is it?</Text>
      </Pressable>
      <Pressable
        style={[{backgroundColor: "#00ff00"}, styles.button]}
        onPress={() => onPressHandler("HowTo")}
        android_ripple={{color: "#fff"}}
      >
        <Text style={styles.buttonText}>How to use it</Text>
      </Pressable>
    </View>
  </> 
};



export default Home;
