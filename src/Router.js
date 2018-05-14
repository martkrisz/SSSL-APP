import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';
import React, { Component } from 'react';
import { Image } from 'react-native';

import LoginScreen from './screens/LoginScreen/LoginScreen';
import EventScreen from './screens/EventScreen/EventScreen';
import QueryScreen from './screens/QueryScreen/QueryScreen';
import ProfileScreen from './screens/ProfileScreen/ProfileScreen';
import SingleFormScreen from './screens/SingleFormScreen/SingleFormScreen';
import SingleQueryScreen from './screens/SingleQueryScreen/SingleQueryScreen';
import FormScreen from './screens/FormScreen/FormScreen';
import Images from './assets/img/Images';

const navOptions = {
  navigationOptions: { header: null }
};

const EventNavigator = StackNavigator({
  Events: {
    screen: EventScreen
  },
  Forms: {
    screen: FormScreen
  },
  SingleForm: {
    screen: SingleFormScreen
  }
}, navOptions);

const QueryNavigator = StackNavigator({
  Queries: {
    screen: QueryScreen
  },
  SingleQuery: {
    screen: SingleQueryScreen
  }
}, navOptions);

const ProfileNavigator = StackNavigator({
  Profile: {
    screen: ProfileScreen
  }
}, navOptions);

const MainTabs = TabNavigator(
  {
    Események: {
      screen: EventNavigator
    },
    Kérdőívek: {
      screen: QueryNavigator
    },
    Profilom: {
      screen: ProfileNavigator
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
  SingleForm: {
    screen: SingleFormScreen
  },
  SingleQuery: {
    screen: SingleQueryScreen
  }
};

export default Root;
