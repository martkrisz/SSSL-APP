import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import React, { Component } from 'react';
import { Image } from 'react-native';

import LoginScreen from './screens/LoginScreen/LoginScreen';
import EventScreen from './screens/EventScreen/EventScreen';
import QueryScreen from './screens/QueryScreen/QueryScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import SingleEventScreen from './screens/SingleEventScreen/SingleEventScreen';
import SingleQueryScreen from './screens/SingleQueryScreen/SingleQueryScreen';
import FormScreen from './screens/FormScreen/FormScreen';
import Images from './assets/img/Images';

const MainTabs = TabNavigator(
  {
    Események: {
      screen: EventScreen
    },
    Kérdőívek: {
      screen: QueryScreen
    },
    Profilom: {
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
      activeTintColor: 'blue',
      inactiveTintColor: 'black',
      labelStyle: {
        fontSize: 12,
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
    lazy: true
  }
);

const Root = {
  Login: {
    screen: LoginScreen
  },
  Home: {
    screen: MainTabs
  },
  Forms: {
    screen: FormScreen
  },
  SingleEvent: {
    screen: SingleEventScreen
  },
  SingleQuery: {
    screen: SingleQueryScreen
  }
};

export default Root;
