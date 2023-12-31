import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import LocationSwiper from '../components/Home/LocationSwiper';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <LocationSwiper />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
});
