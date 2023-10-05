import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const TabBar = ({state, navigation}) => {
  const gotoMovies = () => {
    console.log('sdasd');
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.bottomBtn}
        onPress={() => navigation.navigate('Movies')}>
        <Text>Movies</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.bottomBtn}
        onPress={() => navigation.navigate('TvShows')}>
        <Text>TV Shows</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#f0f0f0',
  },
  bottomBtn: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
