import React from 'react';
import type {StyleProp, ViewProps} from 'react-native';
import {LongPressGestureHandler} from 'react-native-gesture-handler';
import type {AnimateProps} from 'react-native-reanimated';
import Animated from 'react-native-reanimated';

import {SBImageItem} from './SBImageItem';
import {SBTextItem} from './SBTextItem';

interface Props extends AnimateProps<ViewProps> {
  index?: number;
  pretty?: boolean;
}

export const SBItem: React.FC<Props> = props => {
  const {style, index, testID, ...animatedViewProps} = props;
  const [isPretty, setIsPretty] = React.useState(false);
  return (
    <LongPressGestureHandler
      onActivated={() => {
        setIsPretty(!isPretty);
      }}>
      <Animated.View testID={testID} style={{flex: 1}} {...animatedViewProps}>
        {isPretty ? (
          <SBImageItem
            style={style as StyleProp<ViewProps>}
            index={index}
            showIndex={typeof index === 'number'}
          />
        ) : (
          <SBTextItem style={style as StyleProp<ViewProps>} index={index} />
        )}
      </Animated.View>
    </LongPressGestureHandler>
  );
};
