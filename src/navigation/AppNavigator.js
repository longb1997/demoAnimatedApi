import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../features/Home';
import PanResponders from '../features/Home/PanResponders';
import Animations from '../features/Animations';
import ScrollHeader from '../features/Home/ScrollHeader.js';

const Stack = createStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Animations" component={Animations} />
        <Stack.Screen name="PanRes" component={PanResponders} />
        <Stack.Screen name="Heading" component={ScrollHeader} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({});
