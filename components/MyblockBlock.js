import React from 'react';
import { Circle, Icon, Touchable, withTheme } from '@draftbit/ui';
import { Text, View } from 'react-native';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import useNavigation from '../utils/useNavigation';
import useWindowDimensions from '../utils/useWindowDimensions';

const defaultProps = {
  OtherUserImage:
    'https://s3-us-west-1.amazonaws.com/example-data.draftbit.com/people_photos/square/model-005.jpg',
  otherUser: 'Dr. Ken Dragon',
};

const MyblockBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();

  return (
    <View
      style={StyleSheet.applyWidth(
        {
          alignItems: 'center',
          backgroundColor: palettes.App['Custom Color'],
          borderBottomLeftRadius: 24,
          borderBottomRightRadius: 24,
          flexDirection: 'row',
          height: 72,
          justifyContent: 'space-between',
          paddingLeft: 16,
          paddingRight: 16,
        },
        dimensions.width
      )}
    >
      {/* Left View */}
      <View
        style={StyleSheet.applyWidth(
          {
            alignItems: 'center',
            flexDirection: 'row',
            height: 48,
            justifyContent: 'center',
          },
          dimensions.width
        )}
      >
        {/* Back */}
        <Touchable
          onPress={() => {
            try {
              navigation.goBack();
            } catch (err) {
              console.error(err);
            }
          }}
        >
          <Circle size={50}>
            <Icon
              size={24}
              color={theme.colors.text.strong}
              name={'Ionicons/arrow-back-sharp'}
            />
          </Circle>
        </Touchable>

        <View
          style={StyleSheet.applyWidth(
            { alignItems: 'center', flexDirection: 'row', marginLeft: 8 },
            dimensions.width
          )}
        >
          {/* Heading */}
          <Text
            accessible={true}
            selectable={false}
            style={StyleSheet.applyWidth(
              {
                color: theme.colors.text.strong,
                fontFamily: 'Inter_500Medium',
                fontSize: 16,
                marginLeft: 10,
              },
              dimensions.width
            )}
          >
            {'Order Track'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default withTheme(MyblockBlock);
