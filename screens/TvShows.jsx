import {StyleSheet, Text, View, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import Card from '../components/Card';

const TvShows = () => {
  const [showList, setShowList] = React.useState([]);
  const url = 'https://api.themoviedb.org/3/discover/tv';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTNmMGRmMDRlMWE3MTBiZmYyNDE0YjJjNjk5ZGI5NSIsInN1YiI6IjY0ZmJmYzc4ZWZlYTdhMDBmZDE5NGQ1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vjITkPseRhTMClOK1gPcW1AfAK7LGcbDQXbuv-n0FO8',
    },
  };

  React.useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();
        setShowList(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchShows();
    // console.log(showList);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={showList}
        numColumns={2}
        renderItem={({item}) => (
          <Card
            name={item.name}
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

export default TvShows;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
