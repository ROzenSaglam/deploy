import React from 'react';
import { ScreenContainer, withTheme } from '@draftbit/ui';
import { Platform, Text } from 'react-native';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useWindowDimensions from '../utils/useWindowDimensions';

const BlankScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return (
    <ScreenContainer hasSafeArea={false} scrollable={false}>
      <Text
        accessible={true}
        selectable={false}
        {...GlobalStyles.TextStyles(theme)['Text'].props}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.TextStyles(theme)['Text'].style,
            theme.typography.body1,
            {
              color:
                Platform.OS === 'web'
                  ? palettes.Amber[200]
                  : Platform.OS === 'ios'
                  ? theme.colors.text.danger
                  : Platform.OS === 'android'
                  ? palettes.App['Custom Color_8']
                  : undefined,
            }
          ),
          dimensions.width
        )}
      >
        {'Lorem ipsum dolor sit amet'}
      </Text>
    </ScreenContainer>
  );
};

export default withTheme(BlankScreen);
