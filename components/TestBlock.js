import React from 'react';
import { CheckboxRow, Pressable, withTheme } from '@draftbit/ui';
import { useIsFocused } from '@react-navigation/native';
import { FlashList } from '@shopify/flash-list';
import { ActivityIndicator, Image, ScrollView, Text, View } from 'react-native';
import { Fetch } from 'react-request';
import * as GlobalStyles from '../GlobalStyles.js';
import * as ExampleDataApi from '../apis/ExampleDataApi.js';
import Images from '../config/Images';
import palettes from '../themes/palettes';
import Breakpoints from '../utils/Breakpoints';
import * as StyleSheet from '../utils/StyleSheet';
import imageSource from '../utils/imageSource';
import useWindowDimensions from '../utils/useWindowDimensions';

const TestBlock = props => {
  const { theme } = props;
  const dimensions = useWindowDimensions();
  const [checkboxRowValue, setCheckboxRowValue] = React.useState(undefined);

  return (
    <ScrollView
      bounces={true}
      horizontal={false}
      keyboardShouldPersistTaps={'never'}
      nestedScrollEnabled={false}
      showsHorizontalScrollIndicator={true}
      showsVerticalScrollIndicator={true}
    >
      {/* Main */}
      <View
        style={StyleSheet.applyWidth(
          {
            backgroundColor: palettes.App['Custom Color'],
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            flex: 1,
            padding: { minWidth: Breakpoints.BigScreen, value: 20 },
            paddingTop: [
              { minWidth: Breakpoints.Mobile, value: 4 },
              { minWidth: Breakpoints.BigScreen, value: 20 },
            ],
          },
          dimensions.width
        )}
      >
        <Image
          resizeMode={'cover'}
          {...GlobalStyles.ImageStyles(theme)['Image'].props}
          source={imageSource(Images['Restaurant'])}
          style={StyleSheet.applyWidth(
            StyleSheet.compose(GlobalStyles.ImageStyles(theme)['Image'].style, {
              borderBottomLeftRadius: 8,
              borderBottomRightRadius: 8,
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              height: [
                { minWidth: Breakpoints.Mobile, value: 232 },
                { minWidth: Breakpoints.Desktop, value: 280 },
                { minWidth: Breakpoints.BigScreen, value: 400 },
              ],
              marginLeft: '1%',
              width: '98%',
            }),
            dimensions.width
          )}
        />
        {/* Item Details */}
        <View
          style={StyleSheet.applyWidth(
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 16,
            },
            dimensions.width
          )}
        >
          <View style={StyleSheet.applyWidth({ flex: 1 }, dimensions.width)}>
            {/* Name */}
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    color:
                      dimensions.width >= Breakpoints.Tablet
                        ? theme.colors.background.danger
                        : undefined,
                    fontFamily: 'Inter_500Medium',
                    fontSize: [
                      { minWidth: Breakpoints.Mobile, value: 21 },
                      { minWidth: Breakpoints.Tablet, value: 24 },
                      { minWidth: Breakpoints.Laptop, value: 26 },
                      { minWidth: Breakpoints.Desktop, value: 28 },
                      { minWidth: Breakpoints.BigScreen, value: 30 },
                    ],
                  }
                ),
                dimensions.width
              )}
            >
              {'Large Big tasty meal'}
            </Text>
            {/* Details */}
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    color: theme.colors.text.light,
                    fontFamily: 'Inter_400Regular',
                    fontSize: [
                      { minWidth: Breakpoints.Tablet, value: 17 },
                      { minWidth: Breakpoints.Laptop, value: 19 },
                      { minWidth: Breakpoints.BigScreen, value: 21 },
                    ],
                    marginTop: [
                      { minWidth: Breakpoints.Mobile, value: 5 },
                      { minWidth: Breakpoints.Tablet, value: 8 },
                      { minWidth: Breakpoints.Laptop, value: 10 },
                      { minWidth: Breakpoints.BigScreen, value: 12 },
                    ],
                  }
                ),
                dimensions.width
              )}
            >
              {'1 big tasty, 1 large french fries, 1 large drink'}
            </Text>
          </View>

          <View
            style={StyleSheet.applyWidth({ paddingLeft: 40 }, dimensions.width)}
          >
            {/* price */}
            <Text
              accessible={true}
              selectable={false}
              {...GlobalStyles.TextStyles(theme)['Text'].props}
              style={StyleSheet.applyWidth(
                StyleSheet.compose(
                  GlobalStyles.TextStyles(theme)['Text'].style,
                  {
                    color: palettes.App['Custom Color_4'],
                    fontFamily: 'Inter_500Medium',
                    fontSize: [
                      { minWidth: Breakpoints.Mobile, value: 21 },
                      { minWidth: Breakpoints.Tablet, value: 24 },
                      { minWidth: Breakpoints.Laptop, value: 26 },
                      { minWidth: Breakpoints.Desktop, value: 28 },
                      { minWidth: Breakpoints.BigScreen, value: 30 },
                    ],
                  }
                ),
                dimensions.width
              )}
            >
              {'$4.80'}
            </Text>
          </View>
        </View>
        {/* Categories */}
        <View>
          <ExampleDataApi.FetchFoodCategoriesGET>
            {({ loading, error, data, refetchFoodCategories }) => {
              const fetchData = data?.json;
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error || data?.status < 200 || data?.status >= 300) {
                return <ActivityIndicator />;
              }

              return (
                <FlashList
                  data={fetchData}
                  estimatedItemSize={50}
                  inverted={false}
                  keyExtractor={(flashListData, index) =>
                    flashListData?.id ??
                    flashListData?.uuid ??
                    index?.toString() ??
                    JSON.stringify(flashListData)
                  }
                  listKey={'Main->Categories->Fetch->FlashList'}
                  numColumns={1}
                  onEndReachedThreshold={0.5}
                  renderItem={({ item, index }) => {
                    const flashListData = item;
                    return (
                      <Pressable>
                        <View
                          style={StyleSheet.applyWidth(
                            {
                              alignItems: 'center',
                              borderColor: theme.colors.text.light,
                              borderRadius: [
                                { minWidth: Breakpoints.Mobile, value: 20 },
                                { minWidth: Breakpoints.Tablet, value: 24 },
                                { minWidth: Breakpoints.Laptop, value: 28 },
                                { minWidth: Breakpoints.BigScreen, value: 32 },
                              ],
                              borderWidth: 1,
                              flexDirection: 'row',
                              height: [
                                { minWidth: Breakpoints.Mobile, value: 40 },
                                { minWidth: Breakpoints.Tablet, value: 50 },
                                { minWidth: Breakpoints.Laptop, value: 56 },
                                { minWidth: Breakpoints.BigScreen, value: 70 },
                              ],
                              justifyContent: 'center',
                              marginBottom: {
                                minWidth: Breakpoints.BigScreen,
                                value: 30,
                              },
                              marginLeft: [
                                { minWidth: Breakpoints.Mobile, value: 10 },
                                { minWidth: Breakpoints.Laptop, value: 20 },
                                { minWidth: Breakpoints.BigScreen, value: 25 },
                              ],
                              marginTop: 5,
                              paddingLeft: [
                                { minWidth: Breakpoints.Mobile, value: 12 },
                                { minWidth: Breakpoints.Tablet, value: 16 },
                                { minWidth: Breakpoints.Laptop, value: 20 },
                                { minWidth: Breakpoints.BigScreen, value: 25 },
                              ],
                              paddingRight: [
                                { minWidth: Breakpoints.Mobile, value: 12 },
                                { minWidth: Breakpoints.Tablet, value: 16 },
                                { minWidth: Breakpoints.Laptop, value: 20 },
                                { minWidth: Breakpoints.BigScreen, value: 25 },
                              ],
                            },
                            dimensions.width
                          )}
                        >
                          <Image
                            resizeMode={'cover'}
                            {...GlobalStyles.ImageStyles(theme)['Image'].props}
                            source={imageSource(`${flashListData?.url}`)}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.ImageStyles(theme)['Image'].style,
                                {
                                  height: [
                                    { minWidth: Breakpoints.Mobile, value: 32 },
                                    { minWidth: Breakpoints.Tablet, value: 40 },
                                    { minWidth: Breakpoints.Laptop, value: 44 },
                                    {
                                      minWidth: Breakpoints.BigScreen,
                                      value: 48,
                                    },
                                  ],
                                  width: [
                                    { minWidth: Breakpoints.Mobile, value: 32 },
                                    { minWidth: Breakpoints.Tablet, value: 40 },
                                    { minWidth: Breakpoints.Laptop, value: 44 },
                                    {
                                      minWidth: Breakpoints.BigScreen,
                                      value: 48,
                                    },
                                  ],
                                }
                              ),
                              dimensions.width
                            )}
                          />
                          <Text
                            accessible={true}
                            selectable={false}
                            {...GlobalStyles.TextStyles(theme)['Text'].props}
                            style={StyleSheet.applyWidth(
                              StyleSheet.compose(
                                GlobalStyles.TextStyles(theme)['Text'].style,
                                {
                                  fontFamily: 'Inter_500Medium',
                                  fontSize: [
                                    { minWidth: Breakpoints.Tablet, value: 17 },
                                    { minWidth: Breakpoints.Laptop, value: 19 },
                                    {
                                      minWidth: Breakpoints.Desktop,
                                      value: 21,
                                    },
                                    {
                                      minWidth: Breakpoints.BigScreen,
                                      value: 23,
                                    },
                                  ],
                                  marginLeft: 4,
                                }
                              ),
                              dimensions.width
                            )}
                          >
                            {flashListData?.name}
                          </Text>
                        </View>
                      </Pressable>
                    );
                  }}
                  showsVerticalScrollIndicator={true}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
              );
            }}
          </ExampleDataApi.FetchFoodCategoriesGET>
        </View>
        {/* Extras */}
        <View
          style={StyleSheet.applyWidth(
            {
              borderColor: theme.colors.border.brand,
              borderTopWidth: 1,
              margin: 15,
              marginLeft: 0,
              paddingTop: 15,
            },
            dimensions.width
          )}
        >
          {/* label */}
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                fontFamily: 'Inter_500Medium',
                fontSize: [
                  { minWidth: Breakpoints.Mobile, value: 18 },
                  { minWidth: Breakpoints.Tablet, value: 21 },
                  { minWidth: Breakpoints.Laptop, value: 23 },
                  { minWidth: Breakpoints.Desktop, value: 24 },
                  { minWidth: Breakpoints.BigScreen, value: 25 },
                ],
                marginLeft: 12,
                paddingBottom: [
                  { minWidth: Breakpoints.Mobile, value: 8 },
                  { minWidth: Breakpoints.Laptop, value: 12 },
                  { minWidth: Breakpoints.Desktop, value: 15 },
                  { minWidth: Breakpoints.BigScreen, value: 21 },
                ],
              }),
              dimensions.width
            )}
          >
            {'Extras'}
          </Text>

          <ExampleDataApi.FetchUsersGET count={2}>
            {({ loading, error, data, refetchUsers }) => {
              const fetchData = data?.json;
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error || data?.status < 200 || data?.status >= 300) {
                return <ActivityIndicator />;
              }

              return (
                <FlashList
                  data={fetchData}
                  estimatedItemSize={50}
                  horizontal={false}
                  inverted={false}
                  keyExtractor={(flashListData, index) =>
                    flashListData?.id ??
                    flashListData?.uuid ??
                    index?.toString() ??
                    JSON.stringify(flashListData)
                  }
                  listKey={'Main->Extras->Fetch->FlashList'}
                  numColumns={1}
                  onEndReachedThreshold={0.5}
                  renderItem={({ item, index }) => {
                    const flashListData = item;
                    return (
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            flexDirection: 'row',
                            height: 35,
                            justifyContent: 'space-between',
                          },
                          dimensions.width
                        )}
                      >
                        <CheckboxRow
                          onPress={newCheckboxRowValue => {
                            const checkboxRowValue = newCheckboxRowValue;
                            try {
                              setValue(value);
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          {...GlobalStyles.CheckboxRowStyles(theme)[
                            'Checkbox Row'
                          ].props}
                          checkedIcon={'MaterialIcons/check-box'}
                          color={palettes.App['Custom Color_3']}
                          direction={'row-reverse'}
                          label={'     Mayonnaise'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.CheckboxRowStyles(theme)[
                                'Checkbox Row'
                              ].style,
                              {
                                fontFamily: 'Inter_400Regular',
                                fontSize: [
                                  { minWidth: Breakpoints.Mobile, value: 16 },
                                  { minWidth: Breakpoints.Tablet, value: 18 },
                                  { minWidth: Breakpoints.Laptop, value: 20 },
                                  { minWidth: Breakpoints.Desktop, value: 21 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 22,
                                  },
                                ],
                              }
                            ),
                            dimensions.width
                          )}
                          uncheckedColor={theme.colors.text.light}
                          uncheckedIcon={
                            'MaterialIcons/check-box-outline-blank'
                          }
                          value={checkboxRowValue}
                        />
                        <Text
                          accessible={true}
                          selectable={false}
                          {...GlobalStyles.TextStyles(theme)['Text'].props}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'].style,
                              {
                                color: theme.colors.text.light,
                                fontFamily: 'Inter_400Regular',
                                fontSize: [
                                  { minWidth: Breakpoints.Mobile, value: 15 },
                                  { minWidth: Breakpoints.Tablet, value: 17 },
                                  { minWidth: Breakpoints.Laptop, value: 19 },
                                  { minWidth: Breakpoints.Desktop, value: 20 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 21,
                                  },
                                ],
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'$0.60'}
                        </Text>
                      </View>
                    );
                  }}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                />
              );
            }}
          </ExampleDataApi.FetchUsersGET>
        </View>
        {/* Drinks */}
        <View
          style={StyleSheet.applyWidth(
            {
              borderColor: theme.colors.border.brand,
              borderTopWidth: 1,
              flex: 1,
              margin: 15,
              marginLeft: 0,
              marginTop: 5,
              paddingTop: 15,
            },
            dimensions.width
          )}
        >
          {/* label */}
          <Text
            accessible={true}
            selectable={false}
            {...GlobalStyles.TextStyles(theme)['Text'].props}
            style={StyleSheet.applyWidth(
              StyleSheet.compose(GlobalStyles.TextStyles(theme)['Text'].style, {
                fontFamily: 'Inter_500Medium',
                fontSize: [
                  { minWidth: Breakpoints.Mobile, value: 18 },
                  { minWidth: Breakpoints.Tablet, value: 21 },
                  { minWidth: Breakpoints.Laptop, value: 22 },
                  { minWidth: Breakpoints.Desktop, value: 23 },
                  { minWidth: Breakpoints.BigScreen, value: 24 },
                ],
                marginLeft: 12,
                paddingBottom: [
                  { minWidth: Breakpoints.Mobile, value: 8 },
                  { minWidth: Breakpoints.Laptop, value: 12 },
                  { minWidth: Breakpoints.Desktop, value: 15 },
                  { minWidth: Breakpoints.BigScreen, value: 21 },
                ],
              }),
              dimensions.width
            )}
          >
            {'Drinks'}
          </Text>

          <ExampleDataApi.FetchUsersGET count={2}>
            {({ loading, error, data, refetchUsers }) => {
              const fetchData = data?.json;
              if (loading) {
                return <ActivityIndicator />;
              }

              if (error || data?.status < 200 || data?.status >= 300) {
                return <ActivityIndicator />;
              }

              return (
                <FlashList
                  data={fetchData}
                  estimatedItemSize={50}
                  horizontal={false}
                  inverted={false}
                  keyExtractor={(flashListData, index) =>
                    flashListData?.id ??
                    flashListData?.uuid ??
                    index?.toString() ??
                    JSON.stringify(flashListData)
                  }
                  listKey={'Main->Drinks->Fetch->FlashList'}
                  numColumns={1}
                  onEndReachedThreshold={0.5}
                  renderItem={({ item, index }) => {
                    const flashListData = item;
                    return (
                      <View
                        style={StyleSheet.applyWidth(
                          {
                            alignItems: 'center',
                            flexDirection: 'row',
                            height: 35,
                            justifyContent: 'space-between',
                          },
                          dimensions.width
                        )}
                      >
                        <CheckboxRow
                          onPress={newCheckboxRowValue => {
                            const checkboxRowValue = newCheckboxRowValue;
                            try {
                              setValue(value);
                            } catch (err) {
                              console.error(err);
                            }
                          }}
                          {...GlobalStyles.CheckboxRowStyles(theme)[
                            'Checkbox Row'
                          ].props}
                          checkedIcon={'MaterialIcons/check-box'}
                          color={palettes.App['Custom Color_3']}
                          direction={'row-reverse'}
                          label={'     Coca-Cola zero'}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.CheckboxRowStyles(theme)[
                                'Checkbox Row'
                              ].style,
                              {
                                fontFamily: 'Inter_400Regular',
                                fontSize: [
                                  { minWidth: Breakpoints.Mobile, value: 16 },
                                  { minWidth: Breakpoints.Tablet, value: 18 },
                                  { minWidth: Breakpoints.Laptop, value: 20 },
                                  { minWidth: Breakpoints.Desktop, value: 21 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 22,
                                  },
                                ],
                              }
                            ),
                            dimensions.width
                          )}
                          uncheckedColor={theme.colors.text.light}
                          uncheckedIcon={
                            'MaterialIcons/check-box-outline-blank'
                          }
                          value={checkboxRowValue}
                        />
                        <Text
                          accessible={true}
                          selectable={false}
                          {...GlobalStyles.TextStyles(theme)['Text'].props}
                          style={StyleSheet.applyWidth(
                            StyleSheet.compose(
                              GlobalStyles.TextStyles(theme)['Text'].style,
                              {
                                color: theme.colors.text.light,
                                fontFamily: 'Inter_400Regular',
                                fontSize: [
                                  { minWidth: Breakpoints.Mobile, value: 15 },
                                  { minWidth: Breakpoints.Tablet, value: 17 },
                                  { minWidth: Breakpoints.Laptop, value: 19 },
                                  { minWidth: Breakpoints.Desktop, value: 20 },
                                  {
                                    minWidth: Breakpoints.BigScreen,
                                    value: 21,
                                  },
                                ],
                              }
                            ),
                            dimensions.width
                          )}
                        >
                          {'$0.60'}
                        </Text>
                      </View>
                    );
                  }}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                />
              );
            }}
          </ExampleDataApi.FetchUsersGET>
        </View>
      </View>
    </ScrollView>
  );
};

export default withTheme(TestBlock);
