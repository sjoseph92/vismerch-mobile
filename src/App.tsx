import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import AppNav from './navigation/AppNav';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.rootView}>
      <AppNav />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  rootView: {flex: 1},
});
