import React from 'react'

import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import AuthLoadingScreen from './components/loading/index'

import { Icon } from 'native-base'

import Home from './pages/home'
import addItem from './pages/add-item'

import Order from './pages/order'
import User from './pages/user'
import Register from './pages/register'
import Establish from './pages/establish'
import Restore from './pages/restore'

const homeStack = createStackNavigator({
  Home,
  addItem,
  Restore,
})

const orderStack = createStackNavigator({
  Order,
  Register,
  Establish,
  Restore,
})

const userStack = createStackNavigator({
  User: User,
})

const HomeNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: homeStack,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon: ({ focused }) => (
          <Icon name="home" style={{ fontSize: 20, color: focused ? 'red' : 'black' }} />
        ),
      },
    },
    Order: {
      screen: orderStack,
      navigationOptions: {
        tabBarLabel: '购物车',
        tabBarIcon: ({ focused }) => (
          <Icon name="cart" style={{ fontSize: 20, color: focused ? 'red' : 'black' }} />
        ),
      },
    },
    User: {
      screen: userStack,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({ focused }) => (
          <Icon name="person" style={{ fontSize: 20, color: focused ? 'red' : 'black' }} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 12,
      },
    },
  },
)

const AppNavigation = createSwitchNavigator(
  {
    App: HomeNavigator,
    AuthLoading: AuthLoadingScreen,
  },
  {
    initialRouteName: 'AuthLoading',
  },
)

export default createAppContainer(AppNavigation)
