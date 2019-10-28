import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation';

import Cities from './Cities/Cities';
import City from './Cities/City';
import AddCity from './AddCity/AddCity';
import Animate from './AnimationAPI/Animate';
import Redux from './Redux';
import { colours } from './theme';

const CitiesNav = createStackNavigator({
  Cities,
  City,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: colours.primary,
    },
    headerTintColor: '#fff',
  }
});

const Tabs = createBottomTabNavigator({
  Cities: CitiesNav,
  AddCity,
  Animate,
  Redux,
});

export default createAppContainer(Tabs);
