import React from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';

import { colours } from '../theme';

const styles = StyleSheet.create({
  emptyContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: colours.primary,
  },
  message: {
    alignSelf: 'center',
    fontSize: 20,
  },
});

const CenterMessage = ({ message }) => (
  <View style={styles.emptyContainer}>
    <Text style={styles.message}>
      {message}
    </Text>
  </View>
);

export default CenterMessage;
