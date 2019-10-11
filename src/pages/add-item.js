import React, { Component } from 'react'
import { View } from 'react-native'

import { Container, Form, Item, Label, Input, Text, Button } from 'native-base'
import styles from './home.css'

export default class Home extends Component {
  static navigationOptions = {
    title: '增加一项',
  }

  render() {
    return (
      <Container>
        <Form>
          <Item inlineLabel>
            <Label>名称:</Label>
            <Input autoFocus />
          </Item>
        </Form>
        <View style={styles.btnWrap}>
          <Button primary onPress={this.onAddItem}>
            <Text>保存 </Text>
          </Button>
        </View>
      </Container>
    )
  }
}
