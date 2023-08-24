import * as React from 'react';
import {Dimensions, StyleSheet, View} from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

import {SBItem} from './SBItem';

export const PAGE_WIDTH = Dimensions.get('window').width;
export const CAROUSEL_HEIGHT = PAGE_WIDTH * 0.625;

const colors = [
  '#26292E',
  '#899F9C',
  '#B3C680',
  '#5C6265',
  '#F5D399',
  '#F1F1F1',
];

const LocationSwiper = () => {
  return (
    <View style={styles.container}>
      <Carousel
        vertical={false}
        width={PAGE_WIDTH}
        height={CAROUSEL_HEIGHT}
        style={styles.carousel}
        pagingEnabled={true}
        snapEnabled={true}
        loop={false}
        mode="parallax"
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 50,
        }}
        data={colors}
        renderItem={({index}) => <SBItem index={index} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {width: PAGE_WIDTH, position: 'absolute', bottom: 30},
  carousel: {width: PAGE_WIDTH},
});

export default LocationSwiper;
