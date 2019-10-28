import React from 'react';
import {
  Animated,
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colours } from '../theme';

export default class Animate extends React.Component {
  marginTop = new Animated.Value(20);

  animate = () => {
    Animated.timing(
      this.marginTop,
      {
        toValue: 200,
        duration: 200,
      }
    ).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>Animation Playground</Text>
        </View>
        <Button
          color='white'
          title="Animate Box"
          onPress={this.animate}
        />
        <Animated.View style={[styles.box, { marginTop: this.marginTop }]} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.primary,
    flex: 1,
    padding: 30,
  },
  heading: {
    fontSize: 20,
    color: '#fff'
  },
  box: {
    width: 150,
    height: 150,
    backgroundColor: 'red',
  },
});
