import React, {useRef} from 'react';
import {Animated, Easing, Text, TouchableOpacity, View} from 'react-native';

const Spring = () => {
  const aniValue = useRef(new Animated.Value(0)).current;

  function moveToRandomPosition() {
    Animated.spring(aniValue, {
      toValue: Math.floor(Math.random() * 300),
      speed: 30,
      bounciness: 20,
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
        <Text>Move to random position have bounce</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Spring;
