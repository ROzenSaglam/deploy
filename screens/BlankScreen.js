import React from 'react';
import { ExpoImage, Picker, ScreenContainer, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import * as GlobalStyles from '../GlobalStyles.js';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const defaultProps = { test: null };

const BlankScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [pickerValue, setPickerValue] = React.useState('');
  const isFocused = useIsFocused();
  React.useEffect(() => {
    try {
      if (!isFocused) {
        return;
      }
      console.log(/* invalid CustomFunctionCall */ undefined);
    } catch (err) {
      console.error(err);
    }
  }, [isFocused]);

  return (
    <ScreenContainer
      hasSafeArea={false}
      scrollable={false}
      style={StyleSheet.applyWidth(
        { alignItems: 'center', justifyContent: 'center' },
        dimensions.width
      )}
    >
      <ExpoImage
        allowDownscaling={true}
        cachePolicy={'disk'}
        contentPosition={'center'}
        resizeMode={'cover'}
        source={imageSource(
          'https://static.draftbit.com/images/placeholder-image.png'
        )}
        transitionDuration={300}
        transitionEffect={'cross-dissolve'}
        transitionTiming={'ease-in-out'}
        {...GlobalStyles.ExpoImageStyles(theme)['Image'].props}
        style={StyleSheet.applyWidth(
          GlobalStyles.ExpoImageStyles(theme)['Image'].style,
          dimensions.width
        )}
      />
    </ScreenContainer>
  );
};

export default withTheme(BlankScreen);
