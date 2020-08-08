import React, {useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Easing,
  Pressable,
  TouchableOpacity,
  PanResponder,
} from 'react-native';

const ChangePosition = () => {
  const aniValue = useRef(new Animated.Value(0)).current;

  function jumpToSpecifyPosition() {
    Animated.timing(aniValue, {
      toValue: Math.floor(Math.random() * 300),
      duration: 1000,
      delay: 0,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }

  return (
    <View style={{alignItems: 'center', margin: 16}}>
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
      <TouchableOpacity
        onPress={jumpToSpecifyPosition}
        style={{paddingTop: 16}}>
        <Text>Move to random position</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ChangePosition;
