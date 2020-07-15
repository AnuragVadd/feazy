import { createAppContainer } from 'react-navigation';
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack';
import AuthenticationScreen from '../screens/authenticationScreen';

const AuthNavigator = createStackNavigator(
    {
    authScreen: AuthenticationScreen

    },
    {
      initialRouteName: 'authScreen',
      defaultNavigationOptions: {
        headerShown: false,
      },
    },
  );
  
  const AppContainer = createAppContainer(AuthNavigator);
  
  export default AppContainer;