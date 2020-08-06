import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Home = () => {
  const {navigate} = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Pressable onPress={() => navigate('Timing')}>
        <Text>Go to Timing</Text>
      </Pressable>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
