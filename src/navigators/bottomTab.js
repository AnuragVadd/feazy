import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import { Image, Text } from 'react-native';
import { createAppContainer, ThemeColors } from 'react-navigation';
import AppScreen from '../screens/appScreen';
import CartScreen from '../screens/cartScreen';
import ProfileScreen from '../screens/profileScreen';
import OtherScreen from '../screens/otherScreen';

import CustomTheme from '../themes/customTheme';
import allColors from '../themes/allColors'


const BottomTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: AppScreen,
      navigationOptions: {
        tabBarLabel: 'Home',

        activeTintColor: allColors.green,

        tabBarIcon: ({ focused, activeTintColor }) =>
          focused ? (
            <Image
              style={CustomTheme.bottomNavigationThemes().image}
              resizeMode="contain"
              source={require('../assets/images/home.png')}
            />
          ) : (
              <Image
              style={CustomTheme.bottomNavigationThemes().image}
                resizeMode="contain"
                source={require('../assets/images/home.png')}
              />
            ),
        tabBarLabel: ({ focused }) =>
          focused ? (
            <Text style={CustomTheme.bottomNavigationThemes().selected}>
              Home
            </Text>
          ) : (
            <Text style={CustomTheme.bottomNavigationThemes().notSelected}>
                 Home 
                 </Text>
            ),
      },
    },
    Cart: {
      screen: CartScreen,
      tabBarOptions: {
        activeTintColor: 'green',
        // labelStyle: {
        //   fontSize: 50,
        //   color: 'red',
        // },
        // style: {

        //   backgroundColor: 'blue',
        // },
      },
      navigationOptions: {
        tabBarLabel: 'Cart',
        tabBarIcon: ({ focused, tintColor }) =>
          focused ? (
            <Image
            style={CustomTheme.bottomNavigationThemes().image}
              resizeMode="contain"
              source={require('../assets/images/cart.png')}
            />
          ) : (
              <Image
              style={CustomTheme.bottomNavigationThemes().image}
                resizeMode="contain"
                source={require('../assets/images/cart.png')}
              />
            ),
        tabBarLabel: ({ focused, activeTintColor }) =>
          focused ? (
            <Text style={CustomTheme.bottomNavigationThemes().selected}>
            Cart
            </Text>
          ) : (
            <Text style={CustomTheme.bottomNavigationThemes().notSelected}>
               Cart
              </Text>
            ),
      },
    },
    Others: {
      screen: OtherScreen,
      navigationOptions: {
        tabBarLabel: 'Others',
        activeTintColor: 'green',
        tabBarIcon: ({ focused, tintColor }) =>
          focused ? (
            <Image
            style={CustomTheme.bottomNavigationThemes().image}
              resizeMode="contain"
              source={require('../assets/images/dinner.png')}
            />
          ) : (
              <Image
              style={CustomTheme.bottomNavigationThemes().image}
                resizeMode="contain"
                source={require('../assets/images/dinner.png')}
              />
            ),
        tabBarLabel: ({ focused, activeTintColor }) =>
          focused ? (
            <Text style={CustomTheme.bottomNavigationThemes().selected}>
             Others
            </Text>
          ) : (
            <Text style={CustomTheme.bottomNavigationThemes().notSelected}>
                 Others
                 </Text>
            ),
      },
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Profile',
        activeTintColor: '#ff4348',
        tabBarIcon: ({ focused, tintColor }) =>
          focused ? (
            <Image
            style={{ width: 40, height: 40 }}
              resizeMode="contain"
              source={require('../assets/images/profile.png')}
            />
          ) : (
              <Image
              style={{ width: 40, height: 40 }}
                resizeMode="contain"
                source={require('../assets/images/profile.png')}
              />
            ),
        tabBarLabel: ({ focused, activeTintColor }) =>
          focused ? (
            <Text style={CustomTheme.bottomNavigationThemes().selected}>
              Profile
            </Text>
          ) : (
            <Text style={CustomTheme.bottomNavigationThemes().notSelected}>
                Profile
                </Text>
            ),
      },
    },
  },
  {
    tabBarOptions: {
      showIcon: true,
      style:{
        height: 60,
        elevation: 30
      },
      activeTintColor: allColors.green,

      labelStyle: {

        fontFamily: 'ProductSans',
        fontSize: 16,
      },
    },
  },
);

const AppContainer = createAppContainer(BottomTabNavigator);

export default AppContainer;
