import React from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';
import HomeButton from '../components/HomeButton';

const Origins = ({ navigation }) => {
  return <>
    <View>
        <Text style={{fontSize: 37, fontWeight: "900", color: "rgb(77, 87, 95)", textAlign: 'center'}}>C++ was created by</Text>
        <Text style={{fontSize: 33, fontWeight: "900", color: "rgb(77, 87, 95)", textAlign: 'center'}}>Bjarne Stroustrup</Text>
    </View>
    <View style={{ alignItems: 'center', justifyContent: 'center', height: '51%', marginBottom: 20}}>
        <Image
            source={require('../media/Bjarne.jpg')}
        />
    </View>
    <View>
        <Text style={{fontSize: 28, fontWeight:"900", color: "rgb(77, 87, 95)", margin: 10}}>It was created because it was meant to be an extension of C</Text>
    </View>
    <View style={{alignItems: 'center'}}>
        <HomeButton onPressHandler={()=>navigation.navigate("Home")} />
    </View>
  </>
};

export default Origins;
