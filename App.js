import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import Tabs from './src';

const key = 'state';

export default class App extends React.Component {
  state = {
    cities: [],
  }

  getData = async () => {
    try {
      let cities = await AsyncStorage.getItem(key);

      if (cities !== null) {
        cities = JSON.parse(cities);
        this.setState({ cities });
      }
    } catch (e) {
      console.error('AsyncStorage getItem error: ', e);
    }
  }

  componentDidMount() {
    this.getData();
  }

  addCity = (city) => {
    const cities = this.state.cities;
    cities.push(city);
    this.setState({ cities });

    AsyncStorage.setItem(key, JSON.stringify(cities))
      .catch((e) => console.error('AsyncStorage setItem error: ', e));
  }

  addLocation = (location, city) => {
    const index = this.state.cities.findIndex(item => item.id === city.id);
    const chosenCity = this.state.cities[index];
    chosenCity.locations.push(location);
    const cities = [
      ...this.state.cities.slice(0, index),
      chosenCity,
      ...this.state.cities.slice(index + 1)
    ];
    this.setState({ cities }, () => {
      AsyncStorage.setItem(key, JSON.stringify(cities))
        .catch((e) => console.error('AsyncStorage setItem error: ', e));
    });
  }

  render() {
    return (
      <Tabs
        screenProps={{
          cities: this.state.cities,
          addCity: this.addCity,
          addLocation: this.addLocation,
        }}
      />
    );
  }
}
