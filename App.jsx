import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Movies, MovieDetails, Details, TvShows} from './screens';
import TabBar from './components/TabBar';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Movies"
        tabBar={props => <TabBar {...props} />}>
        <Tab.Screen
          name="Movies"
          component={Movies}
          options={{title: 'Movies'}}
        />
        <Tab.Screen
          name="TvShows"
          component={TvShows}
          options={{title: 'TV Shows'}}
        />
        <Tab.Screen
          name="Details"
          component={Details}
          options={({route}) => ({
            title: route.params.name,
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});

const x = '<--';
