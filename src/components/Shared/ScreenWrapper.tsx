import React, {FC, PropsWithChildren} from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const ScreenWrapper: FC<PropsWithChildren> = ({children}) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default ScreenWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    backgroundColor: 'red',
    position: 'relative',
  },
});
