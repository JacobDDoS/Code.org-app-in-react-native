/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Home from './screens/Home';
import WhatIsIt from './screens/WhatIsIt';
import HowTo from './screens/HowTo';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="WhatIsIt" component={WhatIsIt} />
        <Stack.Screen name="HowTo" component={HowTo} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;
