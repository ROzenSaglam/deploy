import React from 'react';
import {
  DatePicker,
  ExpoImage,
  Picker,
  ScreenContainer,
  withTheme,
} from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import * as GlobalStyles from '../GlobalStyles.js';
import * as GlobalVariables from '../config/GlobalVariableContext';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const defaultProps = { test: null };

const BlankScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
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
      <DatePicker
        autoDismissKeyboard={true}
        disabled={false}
        hideLabel={false}
        inline={false}
        label={'Date'}
        leftIconMode={'inset'}
        mode={'date'}
        onDateChange={newDatePickerValue => {
          const date = newDatePickerValue;
          try {
            setDatePickerValue(newDatePickerValue);
          } catch (err) {
            console.error(err);
          }
        }}
        type={'solid'}
        {...GlobalStyles.DatePickerStyles(theme)['Date Picker'].props}
        date={myFunctionName(datePickerValue)}
        style={StyleSheet.applyWidth(
          StyleSheet.compose(
            GlobalStyles.DatePickerStyles(theme)['Date Picker'].style,
            theme.typography.body2,
            {}
          ),
          dimensions.width
        )}
      />
    </ScreenContainer>
  );
};

export default withTheme(BlankScreen);
