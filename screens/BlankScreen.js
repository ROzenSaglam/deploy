import React from 'react';
import {
  DatePicker,
  ExpoImage,
  Picker,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import * as CustomCode from '../custom-files/CustomCode';
import palettes from '../themes/palettes';
import * as Utils from '../utils';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useIsFocused from '../utils/useIsFocused';
import useNavigation from '../utils/useNavigation';
import useParams from '../utils/useParams';
import useWindowDimensions from '../utils/useWindowDimensions';

const defaultProps = { test: null };

const BlankScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const params = useParams();
  const Constants = GlobalVariables.useValues();
  const Variables = Constants;
  const [datePickerValue, setDatePickerValue] = React.useState(new Date());
  const [pickerValue, setPickerValue] = React.useState('');
  const [date, setDate] = React.useState(new Date());
  const myFunctionName = date => {
    if (date === null || date === undefined || date === '') {
      return null;
    }
    const dateData = new Date(date);
    console.log(dateData);
    return dateData;
  };
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
      <Utils.CustomCodeErrorBoundary>
        <CustomCode.MyExampleComponent />
      </Utils.CustomCodeErrorBoundary>
    </ScreenContainer>
  );
};

export default withTheme(BlankScreen);
