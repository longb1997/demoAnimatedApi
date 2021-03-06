// Import react
import React, {useRef} from 'react';
// Import react-native components
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';

const ScrollHeader = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const onDeltaY = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollY}}}],
    {listener: (event) => console.log('event', event)},
  );

  return (
    <SafeAreaView style={styles.safe_area_view}>
      <Animated.ScrollView
        style={styles.scroll_view}
        showsVerticalScrollIndicator={false}
        bounces={false}
        onScroll={onDeltaY}
        scrollEventThrottle={16}>
        <Animated.View
          style={[
            styles.header,
            {
              transform: [
                {
                  translateY: scrollY.interpolate({
                    inputRange: [-100, 0, 100, 150],
                    outputRange: [-100 / 2, 0, 0.75, 0.75],
                  }),
                },
                {
                  scale: scrollY.interpolate({
                    inputRange: [-100, 100],
                    outputRange: [2, 0],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            },
          ]}>
          <Text style={{fontSize: 40}}>HEADER</Text>
        </Animated.View>
        <View style={[styles.fake_post, {backgroundColor: '#222222'}]} />
        <View style={[styles.fake_post, {backgroundColor: '#333333'}]} />
        <View style={[styles.fake_post, {backgroundColor: '#444444'}]} />
        <View style={[styles.fake_post, {backgroundColor: '#555555'}]} />
        <View style={[styles.fake_post, {backgroundColor: '#666666'}]} />
      </Animated.ScrollView>
    </SafeAreaView>
  );
};

export default ScrollHeader;

const styles = StyleSheet.create({
  safe_area_view: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 100,
  },
  fake_post: {
    height: 250,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
  },
});
