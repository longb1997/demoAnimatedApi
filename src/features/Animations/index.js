import React, {useState} from 'react';
import {StyleSheet, Text, View, Animated} from 'react-native';
import Timing from './Timing';
import Spring from './Spring';
import Interpolation from './Interpolation';
import Composing from './Composing';
import {ScrollView} from 'react-native-gesture-handler';

const Animations = () => {
  return (
    <ScrollView>
      <View style={{flex: 1}}>
        <Timing />
        <Spring />
        <Interpolation />
        <Composing />
      </View>
    </ScrollView>
  );
};

export default Animations;
