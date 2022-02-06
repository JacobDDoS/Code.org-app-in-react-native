import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import HomeButton from '../components/HomeButton';

const HowTo = ({ navigation }) => {
  return <>
    <View style={{alignItems: 'center'}}>
      <Text style={{fontWeight: "900", fontSize: 50, color: "rgb(77, 87, 95)"}}>How to use it</Text>
    </View>
    <View>
      <Text style={textStyles.head}>- Addition/Subtraction</Text>
      <Text style={textStyles.tail}>int a = 5+3-2;</Text>
    </View>
    <View>
      <Text style={textStyles.head}>- Multiplication/Division</Text>
      <Text style={textStyles.tail}>double a = 5*3/7;</Text>
    </View>
    <View>
      <Text style={textStyles.head}>- Printing</Text>
      <Text style={textStyles.tail}>cout {'<<'} a {'<<'} endl;</Text>
    </View>
    <View>
      <Text style={textStyles.head}>- Types of variables</Text>
      <Text style={textStyles.tail}>int, float, double, long long, long double, string</Text>
    </View>
    <View style={{alignItems: 'center', marginTop: 25}}>
      <HomeButton onPressHandler={()=>navigation.navigate("Home")}/>
    </View>
  </>
};

const textStyles = StyleSheet.create({
  head: {
    marginLeft: 20,
    marginTop: 45,
    fontSize: 20,
    fontWeight: "900"
  },
  tail: {
    marginLeft: 40,
    marginRight: 20,
    marginTop: 5,
    fontSize: 20,
    fontWeight: "900"
  }
})

export default HowTo;
