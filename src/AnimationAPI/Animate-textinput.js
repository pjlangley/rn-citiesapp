import React from 'react';
import {
  Animated,
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import { colours } from '../theme';

export default class Animate extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  animatedWidth = new Animated.Value(200);

  animate = (value) => {
    Animated.timing(
      this.animatedWidth,
      {
        toValue: value,
        duration: 750,
      }
    ).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.heading}>Animation Playground</Text>
        </View>
        <Animated.View style={{ width: this.animatedWidth }}>
          <TextInput
            ref={this.inputRef}
            style={[styles.input]}
            onBlur={() => this.animate(200)}
            onFocus={() => this.animate(225)}
          />
        </Animated.View>
        <Button title="Blur TextInput" color="white" onPress={() => this.inputRef.current.blur()} />
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
  input: {
    height: 50,
    marginHorizontal: 15,
    backgroundColor: '#ededed',
    marginTop: 10,
    paddingHorizontal: 9,
  },
});
