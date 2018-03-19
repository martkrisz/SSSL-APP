import { StackNavigator } from 'react-navigation';

import MainScreen from './screens/MainScreen/MainScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';

const Root = {
  Main: {
    screen: MainScreen
  },
  Login: {
    screen: LoginScreen
  }
};

export default Root;