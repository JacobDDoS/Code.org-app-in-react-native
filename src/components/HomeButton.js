import React from 'react';
import { styles } from '../styles/Main';
import {
  Text,
  Pressable
} from 'react-native';

const HomeButton = ({ onPressHandler }) => {
  return (
      <Pressable
        style={[{backgroundColor: "rgb(0, 184, 255)"}, styles.button]}
        onPress={onPressHandler}
        android_ripple={{color: "#fff"}}
      >
        <Text style={styles.buttonText}>Home</Text>
      </Pressable>
  )
};



export default HomeButton;
