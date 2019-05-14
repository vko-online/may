import React from 'react'
import { View, StatusBar, Text } from 'react-native'

import {
  createMaterialTopTabNavigator,
  createDrawerNavigator,
  createAppContainer,
  createStackNavigator
} from 'react-navigation'
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

import Friends from './screens/friends'
import Popular from './screens/popular'
import Recent from './screens/recent'

import Activities from './screens/activities'
import Messages from './screens/messages'

import Drawer from './blocks/drawer'
import Header, { HeaderSimple } from './blocks/header'

const theme = {
  ...DefaultTheme,
  roundness: 2,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#444',
    text: 'white'
  }
}

const TabNavigator = createMaterialTopTabNavigator({
  Friends: {
    screen: Friends
  },
  Popular: {
    screen: Popular
  },
  Recent: {
    screen: Recent
  }
}, {
  initialRouteName: 'Friends',
  tabBarOptions: {
    style: {
      backgroundColor: '#444'
    },
    indicatorStyle: {
      backgroundColor: '#777',
      height: 3
    }
  }
})

const TabStackNavigator = createStackNavigator({
  TabNavigator: {
    screen: TabNavigator
  }
}, {
  defaultNavigationOptions: {
    header: ({ navigation }) => <Header navigation={navigation} />
  }
})

const DrawerNavigator = createDrawerNavigator({
  Main: {
    screen: TabStackNavigator
  }
}, {
  navigationOptions: {
    header: null
  },
  initialRouteName: 'Main',
  contentComponent: ({ navigation }) => <Drawer navigation={navigation} />
})

const StackNavigator = createStackNavigator({
  Drawer: {
    screen: DrawerNavigator
  },
  Activities: {
    screen: Activities
  },
  Messages: {
    screen: Messages
  }
}, {
  initialRouteName: 'Drawer'
})

const Entry = createAppContainer(StackNavigator)

export default (
  <PaperProvider theme={theme}>
    <StatusBar barStyle='light-content' />
    <Entry />
  </PaperProvider>
)
