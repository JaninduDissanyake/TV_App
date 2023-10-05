import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

const Details = ({route}) => {
  const {name, overview, popularity, backdropPoster} = route.params;
  return (
    <ScrollView style={styles.container}>
      <Image
        source={{uri: `https://image.tmdb.org/t/p/original//${backdropPoster}`}}
        style={styles.backdropImage}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{name}</Text>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <Text style={{color: 'maroon'}}>Genres: </Text>
          <Text style={{color: 'black', marginLeft: 50}}>
            ⭐ Popularity: {popularity}
          </Text>
        </View>

        <Text
          style={{
            fontSize: 16,
            marginTop: 20,
            marginBottom: 5,
            color: 'black',
          }}>
          Overview
        </Text>
        <Text style={{color: 'black'}}>{overview}</Text>
      </View>
      <TouchableOpacity style={styles.discoverBtn}>
        <Text style={styles.discoveTxt}>Discover</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: 'black',
  },
  backdropImage: {
    marginTop: 20,
    marginVertical: 10,
    width: 300,
    height: 180,
    borderRadius: 10,
    alignSelf: 'center',
  },
  detailsContainer: {
    padding: 16,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
  },
  discoverBtn: {
    borderRadius: 5,
    backgroundColor: '#E55604',
    width: 220,
    height: 40,
    marginVertical: 20,

    alignSelf: 'center',
  },
  discoveTxt: {
    alignSelf: 'center',
    padding: 10,
    color: 'white',
  },
});
