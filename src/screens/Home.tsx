import React from 'react';

import ScreenWrapper from '../components/Shared/ScreenWrapper';
import LocationSwiper from '../components/Home/LocationSwiper';
import {View} from 'react-native';

const HomeScreen = () => {
  return (
    <ScreenWrapper>
      <LocationSwiper />
    </ScreenWrapper>
  );
};

export default HomeScreen;
