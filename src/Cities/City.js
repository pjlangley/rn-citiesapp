import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import CenterMessage from '../components/CenterMessage';
import { colours } from '../theme';

export default class City extends React.Component {
  static navigationProperties = (props) => {
    const { city } = props.navigation.state.params;

    return {
      title: city.city,
      headerTitleStyle: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400',
      },
    };
  }

  state = {
    name: '',
    info: '',
  }

  onChangeText = (key, value) => {
    this.setState({ [key]: value });
  }

  addLocation = () => {
    if (this.state.name === '' || this.state.info === '') return;

    const { city } = this.props.navigation.state.params;
    const location = {
      name: this.state.name,
      info: this.state.info,
    };
    this.props.screenProps.addLocation(location, city);
    this.setState({ name: '', info: '' });
  }

  render() {
    const { city } = this.props.navigation.state.params;

    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={[!city.locations.length && { flex: 1 }]}>
          <View style={[!city.locations.length && { flex: 1, justifyContent: 'center' }]}>
            {!city.locations.length && (
              <CenterMessage message="No locations for this city!" />
            )}

            {city.locations.map((location, index) => (
              <View key={index} style={styles.locationsContainer}>
                <Text style={styles.locationName}>{location.name}</Text>
                <Text style={styles.locationInfo}>{location.info}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
        <TextInput
          onChangeText={val => this.onChangeText('name', val)}
          placeholder="Location Name"
          value={this.state.name}
          style={styles.input}
          placeholderTextColor='white'
        />
        <TextInput
          onChangeText={val => this.onChangeText('info', val)}
          placeholder="Location Info"
          value={this.state.info}
          style={styles.input}
          placeholderTextColor='white'
        />
        <View>
          <TouchableOpacity onPress={this.addLocation}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Add Location</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  input: {
    backgroundColor: colours.primary,
    paddingHorizontal: 8,
    height: 50,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    color: 'white',
  },
  locationsContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colours.primary,
  },
  locationName: {
    fontSize: 20,
  },
  locationInfo: {
    color: 'rgba(0, 0, 0, 0.5)',
  },
});
