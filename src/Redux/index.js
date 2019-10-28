import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const ThemeContext = React.createContext();

class Redux extends React.Component {
  state = {
    themeValue: 'light',
  };

  toggleThemeValue = () => {
    const value = this.state.themeValue === 'dark' ? 'light' : 'dark';
    this.setState({ themeValue: value });
  }

  render() {
    return (
      <ThemeContext.Provider value={{
        themeValue: this.state.themeValue,
        toggleThemeValue: this.toggleThemeValue,
      }}>
        <View style={styles.container}>
          <Text>Hello, World!</Text>
        </View>
        <Child1 />
      </ThemeContext.Provider>
    );
  }
};

const Child1 = () => <Child2 />;
const Child2 = () => (
  <ThemeContext.Consumer>
    {(val) => (
      <View style={[styles.container, val.themeValue === 'dark' && { backgroundColor: 'black' }]}>
        <Text style={styles.text}>
          Hello from Child2.
        </Text>
        <Text style={styles.text} onPress={val.toggleThemeValue}>
          Toggle Theme Value
        </Text>
      </View>
    )}
  </ThemeContext.Consumer>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  text: {
    fontSize: 22,
    color: '#666',
  }
});

export default Redux;
