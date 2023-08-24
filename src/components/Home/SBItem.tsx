import React from 'react';
import {Image, StyleSheet, type ViewProps, View, Text} from 'react-native';
import {LongPressGestureHandler} from 'react-native-gesture-handler';
import type {AnimateProps} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';
import {MapPinIcon, CalendarDaysIcon} from 'react-native-heroicons/solid';

import {CAROUSEL_HEIGHT} from './LocationSwiper';
import {colors} from '../../consts/colors';

const IMAGE_HEIGHT = CAROUSEL_HEIGHT * 0.6;

interface Props extends AnimateProps<ViewProps> {
  index?: number;
  pretty?: boolean;
}

export const SBItem: React.FC<Props> = props => {
  const {...animatedViewProps} = props;
  const [isPretty, setIsPretty] = React.useState(false);
  return (
    <LongPressGestureHandler
      onActivated={() => {
        setIsPretty(!isPretty);
      }}>
      <Animated.View style={styles.animatedView} {...animatedViewProps}>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={require('../../assets/ht.png')}
            resizeMode="cover"
          />

          <View style={styles.row}>
            <Text style={styles.storeText}>Harris Teeter</Text>
          </View>
          <View style={styles.row}>
            <MapPinIcon size={18} color={colors.green[500]} />
            <Text style={styles.text}>123 Fake St</Text>
          </View>
          <View style={styles.row}>
            <CalendarDaysIcon size={18} color={colors.green[500]} />
            <Text style={styles.text}>08/25/2023</Text>
          </View>
        </View>
      </Animated.View>
    </LongPressGestureHandler>
  );
};

const styles = StyleSheet.create({
  animatedView: {
    flex: 1,
  },
  image: {
    width: '100%',
    height: IMAGE_HEIGHT,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  row: {
    width: '100%',
    paddingTop: 4,
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  storeText: {
    color: colors.green[500],
    fontSize: 18,
    fontWeight: '700',
  },
  text: {
    color: colors.gray[500],
    marginLeft: 4,
    fontSize: 14,
  },
});
