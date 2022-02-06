import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import HomeButton from '../components/HomeButton';

const WhatIsIt = ({ navigation }) => {
  return <View>
    <View style={{alignItems: 'center'}}>
      <Text style={{fontSize: 40, fontWeight: "900", color: "rgb(77, 87, 95)", margin: 20}}>What is it?</Text>
    </View>
    <View>
      <Text style={textStyles.bulletText}>- New Iteration of C</Text>
    </View>
    <View>
      <Text style={textStyles.bulletText}>- Adds Object Oriented Programming</Text>
    </View>
    <View style={{alignItems: 'center', marginTop: 30}}>
      <HomeButton onPressHandler={()=>navigation.navigate("Home")}/>
    </View>
  </View>
};

const textStyles = StyleSheet.create({
  bulletText: {
    fontSize: 40,
    marginLeft: 15,
    fontWeight: "900",
    color: "rgb(77, 87, 95)",
    margin: 30,
    marginLeft: 80
  }
})

export default WhatIsIt;
