import React, { Component } from 'react'
import { Text } from 'react-native'

export default class Loading extends Component {
  componentDidMount() {
    this.props.navigation.navigate('App')
  }
  render() {
    return <Text>Loading</Text>
  }
}
