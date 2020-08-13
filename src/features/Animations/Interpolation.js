import React, {useRef} from 'react';
import {Animated, Easing, Text, TouchableOpacity, View} from 'react-native';

const Interpolation = () => {
  const aniValue = useRef(new Animated.Value(0)).current;

  function moveToRandomPosition() {
    Animated.timing(aniValue, {
      toValue: 1,
      duration: 3000,
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
              translateX: aniValue.interpolate({
                inputRange: [0, 0.2, 0.8, 1],
                outputRange: [0, 200, 0, 200],
              }),
            },
          ],
        }}
      />
      <TouchableOpacity onPress={moveToRandomPosition} style={{paddingTop: 16}}>
        <Text>Move and scale to specified value with interpolation</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Interpolation;
