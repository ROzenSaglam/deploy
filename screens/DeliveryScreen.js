import React from 'react';
import { MapView } from '@draftbit/maps';
import {
  Circle,
  Icon,
  ScreenContainer,
  Touchable,
  withTheme,
} from '@draftbit/ui';
import { Image, Text, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useNavigation from '../utils/useNavigation';
import useParams from '../utils/useParams';
import useWindowDimensions from '../utils/useWindowDimensions';

const defaultProps = {
  OtherUserImage:
    'https://s3-us-west-1.amazonaws.com/example-data.draftbit.com/people_photos/square/model-005.jpg',
  otherUser: 'Dr. Ken Dragon',
};

const DeliveryScreen = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const navigation = useNavigation();
  const params = useParams();
  const [switchValue, setSwitchValue] = React.useState(false);
  const [textInputValue, setTextInputValue] = React.useState('');

  return (
    <ScreenContainer
      scrollable={false}
      hasBottomSafeArea={false}
      hasSafeArea={true}
      hasTopSafeArea={false}
      style={StyleSheet.applyWidth(
        { justifyContent: 'space-between' },
        dimensions.width
      )}
    >
      {/* Header */}
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

      <KeyboardAwareScrollView
        enableAutomaticScroll={false}
        enableOnAndroid={false}
        enableResetScrollToCoords={false}
        keyboardShouldPersistTaps={'never'}
        showsVerticalScrollIndicator={true}
        viewIsInsideTabBar={false}
        contentContainerStyle={StyleSheet.applyWidth(
          { flex: 1, justifyContent: 'space-between' },
          dimensions.width
        )}
      >
        {/* Map */}
        <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
          <MapView
            autoClusterMarkers={false}
            autoClusterMarkersDistanceMeters={10000}
            latitude={37.40241}
            loadingEnabled={true}
            longitude={-122.12125}
            moveOnMarkerPress={true}
            rotateEnabled={true}
            scrollEnabled={true}
            showsCompass={false}
            showsPointsOfInterest={true}
            showsUserLocation={false}
            zoom={8}
            zoomEnabled={true}
            apiKey={process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}
            style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}
          />
        </View>
        {/* Details */}
        <View
          style={StyleSheet.applyWidth(
            {
              alignItems: 'center',
              backgroundColor: palettes.App['Custom Color'],
              borderTopLeftRadius: 24,
              borderTopRightRadius: 24,
              flexDirection: 'column',
              justifyContent: 'space-between',
              paddingBottom: 20,
              paddingLeft: 20,
              paddingRight: 20,
              paddingTop: 20,
            },
            dimensions.width
          )}
        >
          {/* Delivery Partner */}
          <View
            style={StyleSheet.applyWidth(
              {
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: 25,
                paddingLeft: 10,
                paddingRight: 10,
                width: '100%',
              },
              dimensions.width
            )}
          >
            {/* Partner Details */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row' },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={imageSource(Images['Ellipse21'])}
                style={StyleSheet.applyWidth(
                  { borderRadius: 12, height: 64, width: 64 },
                  dimensions.width
                )}
              />
              <View
                style={StyleSheet.applyWidth(
                  { marginLeft: 10 },
                  dimensions.width
                )}
              >
                {/* Name */}
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.text.strong,
                      fontFamily: 'Inter_500Medium',
                      fontSize: 16,
                    },
                    dimensions.width
                  )}
                >
                  {'Sam Soon'}
                </Text>
                {/* code */}
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.text.strong,
                      fontFamily: 'Inter_400Regular',
                      fontSize: 12,
                      marginTop: 4,
                      opacity: 0.6,
                    },
                    dimensions.width
                  )}
                >
                  {'N8982DW'}
                </Text>
              </View>
            </View>
            {/* Chat Btn */}
            <View>
              <Touchable
                onPress={() => {
                  try {
                    navigation.navigate('BlankScreen');
                  } catch (err) {
                    console.error(err);
                  }
                }}
                activeOpacity={0.8}
                disabledOpacity={0.8}
              >
                <View
                  style={StyleSheet.applyWidth(
                    {
                      alignItems: 'center',
                      backgroundColor: theme.colors.branding.primary,
                      borderRadius: 8,
                      height: 36,
                      justifyContent: 'center',
                      width: 36,
                    },
                    dimensions.width
                  )}
                >
                  <Icon
                    color={palettes.App['Custom #ffffff']}
                    name={'Ionicons/chatbox-ellipses-outline'}
                    size={20}
                  />
                </View>
              </Touchable>
            </View>
          </View>
          {/* Timeline */}
          <View
            style={StyleSheet.applyWidth(
              {
                marginBottom: 12,
                paddingLeft: 20,
                paddingRight: 20,
                width: '100%',
              },
              dimensions.width
            )}
          >
            {/* Status Tracking Icons */}
            <View
              style={StyleSheet.applyWidth(
                {
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginLeft: 20,
                  marginRight: 20,
                },
                dimensions.width
              )}
            >
              <Icon
                color={theme.colors.branding.primary}
                name={'AntDesign/checkcircle'}
                size={20}
              />
              <View
                style={StyleSheet.applyWidth(
                  {
                    borderBottomWidth: 1,
                    borderColor: theme.colors.text.strong,
                    borderStyle: 'dashed',
                    flex: 1,
                  },
                  dimensions.width
                )}
              />
              <Icon
                color={theme.colors.text.medium}
                name={'AntDesign/checkcircleo'}
                size={20}
              />
              <View
                style={StyleSheet.applyWidth(
                  {
                    borderBottomWidth: 1,
                    borderColor: theme.colors.text.strong,
                    borderStyle: 'dashed',
                    flex: 1,
                  },
                  dimensions.width
                )}
              />
              <Icon
                color={theme.colors.text.medium}
                name={'AntDesign/checkcircleo'}
                size={20}
              />
            </View>
            {/* Status Titles */}
            <View
              style={StyleSheet.applyWidth(
                {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginRight: 20,
                  marginTop: 8,
                },
                dimensions.width
              )}
            >
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.text.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 12,
                  },
                  dimensions.width
                )}
              >
                {'Accepted'}
              </Text>

              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.text.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 12,
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
              >
                {'Taked'}
              </Text>

              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.text.strong,
                    fontFamily: 'Inter_400Regular',
                    fontSize: 12,
                    textAlign: 'right',
                  },
                  dimensions.width
                )}
              >
                {'Done'}
              </Text>
            </View>
          </View>
          {/* Delivery Details */}
          <View
            style={StyleSheet.applyWidth(
              { marginTop: 20, width: '100%' },
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
                },
                dimensions.width
              )}
            >
              {'Delivery Details'}
            </Text>
            {/* Outlet Location */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', marginTop: 12 },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={imageSource(Images['OutletLoc'])}
                style={StyleSheet.applyWidth(
                  { height: 24, width: 24 },
                  dimensions.width
                )}
              />
              <View
                style={StyleSheet.applyWidth(
                  { marginLeft: 12 },
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.text.strong,
                      fontFamily: 'Inter_300Light',
                      fontSize: 13,
                      opacity: 0.7,
                    },
                    dimensions.width
                  )}
                >
                  {'Outlet location'}
                </Text>

                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.text.strong,
                      fontFamily: 'Inter_400Regular',
                      fontSize: 15,
                      marginTop: 4,
                    },
                    dimensions.width
                  )}
                >
                  {'Jl. anggrek loka blok AA No.26'}
                </Text>
              </View>
            </View>
            {/* timeline view */}
            <View
              style={StyleSheet.applyWidth(
                {
                  borderColor: theme.colors.text.medium,
                  borderLeftWidth: 1,
                  borderStyle: 'dashed',
                  height: 40,
                  marginLeft: 10,
                },
                dimensions.width
              )}
            />
            {/* Your Location */}
            <View
              style={StyleSheet.applyWidth(
                { alignItems: 'center', flexDirection: 'row', marginTop: 12 },
                dimensions.width
              )}
            >
              <Image
                resizeMode={'cover'}
                source={imageSource(Images['YourLoc'])}
                style={StyleSheet.applyWidth(
                  { height: 24, width: 24 },
                  dimensions.width
                )}
              />
              <View
                style={StyleSheet.applyWidth(
                  { marginLeft: 12 },
                  dimensions.width
                )}
              >
                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.text.strong,
                      fontFamily: 'Inter_300Light',
                      fontSize: 13,
                      opacity: 0.7,
                    },
                    dimensions.width
                  )}
                >
                  {'Your location'}
                </Text>

                <Text
                  accessible={true}
                  selectable={false}
                  style={StyleSheet.applyWidth(
                    {
                      color: theme.colors.text.strong,
                      fontFamily: 'Inter_400Regular',
                      fontSize: 15,
                      marginTop: 4,
                    },
                    dimensions.width
                  )}
                >
                  {'Jl. anggrek loka blok AA No.26'}
                </Text>
              </View>
            </View>
            {/* See Details */}
            <Touchable activeOpacity={0.8} disabledOpacity={0.8}>
              <Text
                accessible={true}
                selectable={false}
                style={StyleSheet.applyWidth(
                  {
                    color: theme.colors.branding.primary,
                    fontFamily: 'Inter_500Medium',
                    marginTop: 25,
                    textAlign: 'center',
                  },
                  dimensions.width
                )}
              >
                {'See Details'}
              </Text>
            </Touchable>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </ScreenContainer>
  );
};

export default withTheme(DeliveryScreen);
