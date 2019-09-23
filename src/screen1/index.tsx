import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {STARGATE_HOME, STARGATE_DETALS} from '../routes';
import HomeScreen from './home-screen';

const AppNavigator = createStackNavigator(
  {
    [STARGATE_HOME]: HomeScreen,
  },
  {headerMode: 'none'},
);

export default createAppContainer(AppNavigator);
