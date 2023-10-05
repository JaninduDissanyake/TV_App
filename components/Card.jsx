import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Card = ({name, poster, id, overview, popularity, backdropPoster}) => {
  const navigation = useNavigation();
  const showDetails = () => {
    navigation.navigate('Details', {
      id,
      name,
      overview,
      popularity,
      backdropPoster,
    });
  };

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity style={styles.card} onPress={showDetails}>
        <Image
          source={{uri: `https://image.tmdb.org/t/p/original//${poster}`}}
          style={styles.img}
        />
        <Text style={styles.movieTitle}>{name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    margin: 8,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 16,
  },
  img: {
    width: 150,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 8,
    alignSelf: 'center',
  },
  movieTitle: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
