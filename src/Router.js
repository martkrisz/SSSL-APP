import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import React, { Component } from 'react';
import { Image } from 'react-native';

import LoginScreen from './screens/LoginScreen/LoginScreen';
import CampScreen from './screens/CampScreen/CampScreen';
import FormScreen from './screens/FormScreen/FormScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import Images from './assets/img/Images';

const MainTabs = TabNavigator(
  {
    Camp: {
      screen: CampScreen
    },
    Form: {
      screen: FormScreen
    },
    Profile: {
      screen: ProfileScreen
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        return <Image
          style={{ height: 20 }}
          indicator={false}
          resizeMode="contain"
          source={Images.images.ssslLogo}
        />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#686969',
      inactiveTintColor: '#686969',
      labelStyle: {
        fontSize: 10.5,
        fontFamily: '$ssslFont_Bold'
      },
      style: {
        backgroundColor: '#fff',
        height: 52
      },
    },
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: true,
    swipeEnabled: false,
    lazy: false
  }
);

const Root = {
  Login: {
    screen: LoginScreen
  },
  Home: {
    screen: MainTabs
  }
};

export default Root;
