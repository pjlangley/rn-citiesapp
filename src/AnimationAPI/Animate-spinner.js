import React from 'react';
import {
  Animated,
  Easing,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class Animate extends React.Component {
  state = {
    loading: true,
  };

  componentDidMount() {
    this.animate();
    setTimeout(() => this.setState({ loading: false }), 5000);
  }

  animatedRotation = new Animated.Value(0);

  animate = () => {
    Animated.loop(
      Animated.timing(
        this.animatedRotation,
        {
          toValue: 1,
          duration: 1800,
          easing: Easing.linear,
        }
      )
    ).start();
  };

  render() {
    const rotation = this.animatedRotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg'],
    });
    const { loading } = this.state;

    return (
      <View style={styles.container}>
        {
          loading ? (
            <Animated.Image
              source={require('../spinner.png')}
              style={{
                width: 40,
                height: 40,
                transform: [{ rotate: rotation }]
              }}
            />
          ) : (
            <Text>Welcome</Text>
          )
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    padding: 10,
    paddingTop: 50,
  },
});
