import React from 'react';
import {StyleSheet, Text, View, Pressable, FlatList} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Block = (props) => {
  const {data} = props;
  const {title, navigate} = data;
  return (
    <Pressable
      style={{
        borderRadius: 8,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: 150,
        height: 100,
        marginLeft: 16,
        marginBottom: 16,
      }}
      onPress={navigate}>
      <Text>{title}</Text>
    </Pressable>
  );
};

const Home = () => {
  const {navigate} = useNavigation();
  const BLOCK = [
    {id: 1, title: 'Timing', navigate: () => navigate('Timing')},
    {id: 2, title: 'Spring', navigate: () => navigate('Timing')},
    {id: 3, title: 'Decay', navigate: () => navigate('Timing')},
    {id: 4, title: 'PanResponder', navigate: () => navigate('PanRes')},
  ];
  return (
    <View style={styles.container}>
      <View style={{margin: 16}}>
        <FlatList
          data={BLOCK}
          renderItem={({item}) => <Block data={item} />}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
  },
});
