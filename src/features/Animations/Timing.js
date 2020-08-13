import React, {useRef, useState} from 'react';
import {Animated, Easing, Text, TouchableOpacity, View} from 'react-native';

const Timing = () => {
  const aniValue = useRef(new Animated.Value(0)).current;

  function moveToRandomPosition() {
    Animated.timing(aniValue, {
      toValue: Math.floor(Math.random() * 300),
      duration: 2000,
      delay: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }

  return (
    <View style={{margin: 16}}>
      <Animated.View
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: 'red',
          transform: [
            {
              translateX: aniValue,
            },
          ],
        }}
      />
      <TouchableOpacity onPress={moveToRandomPosition} style={{paddingTop: 16}}>
        <Text>Move to random position on 2s with delay 2s</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Timing;
