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

  //   const diffClampScrollY = Animated.diffClamp(scrollY, 0, 50);

  const onDeltaY = Animated.event(
    [{nativeEvent: {contentOffset: {y: scrollY}}}],
    {useNativeDriver: true},
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
                    inputRange: [-100, 0, 100, 150],
                    outputRange: [2, 1, 0.5, 0.5],
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
    backgroundColor: '#Fff',
    height: 100,
  },
  fake_icon_box: {
    backgroundColor: '#e4e6eb',
    width: 40,
    height: 40,
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll_view: {
    flex: 1,
  },
  fake_post: {
    height: 250,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
  },
});
