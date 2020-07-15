
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import AppScreen from '../screens/appScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import React from 'react';
import { Image, Text } from 'react-native';
import BottomTab from './bottomTab'
const AuthNavigator = createStackNavigator(
    {
    appScreen: AppScreen,
      bottom_tab_navi: BottomTab

    },
    {
      initialRouteName: 'bottom_tab_navi',
      defaultNavigationOptions: {
        headerShown: false,
      },
    },
  );

// const AppNavigator = createStackNavigator(
//     {
//     sideDrawer: SideDrawer,
//     home: HomeScreen,
//     single_request: SingleRequest,
//     completed: CompletedOrderScreen,
//     scan_order: ScanOrderScreen,
//     all_requests: AllRequestsScreen,
//     task_completed: TaskCompletedScreen,
//     profile_screen: ProfileScreen,
//     report_issue: ReportIssueScreen
//     },
//     {
//       initialRouteName: 'sideDrawer',
//       defaultNavigationOptions: {
//         headerShown: false,
//       },
//     },
//   );
  
  const AppContainer = createAppContainer(AuthNavigator);
  
  export default AppContainer;