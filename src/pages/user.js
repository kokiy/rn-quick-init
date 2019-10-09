import React, { Component } from 'react'
import { Text, Icon } from 'native-base'

export default class Home extends Component {
  static navigationOptions = {
    tabBarLabel: '我的',
    tabBarIcon: ({ focused }) => <Icon name="user" size="md" color={focused ? '#f00' : '#333'} />,
  }

  render() {
    return <Text>user</Text>
  }
}
