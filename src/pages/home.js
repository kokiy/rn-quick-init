import React, { Component } from 'react'
import { Container, Button, Text, Icon } from 'native-base'

export default class Home extends Component {
  static navigationOptions = {
    title: '好友',
  }

  componentDidMount() {
    this.props.navigation.setParams({ title: ' 44' })
  }

  render() {
    return (
      <Container>
        <Button>
          <Text>Button</Text>
          <Icon name="home" />
        </Button>
        <Icon name="home" />
      </Container>
    )
  }
}
