import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Card from '../components/Card';

const Movies = ({navigation}) => {
  const [movieList, setMovieList] = React.useState([]);
  const url = 'https://api.themoviedb.org/3/discover/movie';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTNmMGRmMDRlMWE3MTBiZmYyNDE0YjJjNjk5ZGI5NSIsInN1YiI6IjY0ZmJmYzc4ZWZlYTdhMDBmZDE5NGQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vjITkPseRhTMClOK1gPcW1AfAK7LGcbDQXbuv-n0FO8',
    },
  };

  React.useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setMovieList(data.results);
        //console.log(movieList);
      } catch (error) {
        console.error('error: ' + error);
      }
    };
    fetchMovies();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={movieList}
        numColumns={2}
        renderItem={({item}) => (
          <Card
            name={item.original_title}
            poster={item.poster_path}
            id={item.id}
            overview={item.overview}
            backdropPoster={item.backdrop_path}
            popularity={item.popularity}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default Movies;

// const Row = ({children}) => {
//   return <View style={{flexDirection: 'row'}}>{children}</View>;
// };

// const Col = ({children, numCol}) => {
//   return <View style={styles[`${numCol}col`]}>{children}</View>;
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
{
  /* <Row>
            <Col numCol={1}>
              <Card name={movie.name} />
            </Col>
            <Col numCol={2}>
              <Card name={movie.name} />
            </Col>
          </Row> */
}
