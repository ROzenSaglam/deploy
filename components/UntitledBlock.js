import React from 'react';
import { withTheme } from '@draftbit/ui';
import { View } from 'react-native';
import palettes from '../themes/palettes';
import useWindowDimensions from '../utils/useWindowDimensions';

const UntitledBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();

  return <View />;
};

export default withTheme(UntitledBlock);
