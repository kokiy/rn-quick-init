import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'

import { Container, List, ListItem, CheckBox, Text, Body, Button } from 'native-base'
import { find, map } from 'lodash'
import styles from './home.css'

@connect(({ Index: { number } }) => ({
  number,
}))
class Home extends Component {
  static navigationOptions = {
    title: 'todo list',
  }

  state = {
    list: [
      { name: '读一本书', key: 1, checked: true },
      { name: '唱一首歌', key: 2, checked: false },
      { name: '吃一碗饭', key: 3, checked: false },
      { name: '跑一次步', key: 4, checked: true },
      { name: '爱国一辈子', key: 5, checked: true },
    ],
  }

  onItemClick(key) {
    const { list } = this.state
    const currentItem = find(list, { key }) || {}
    currentItem.checked = !currentItem.checked
    this.setState({ list })
  }

  onAddItem = () => {
    this.props.navigation.navigate('addItem')
  }

  add = () => {
    this.props.dispatch({
      type: 'Index/updateNumber',
      payload: { number: this.props.number + 1 },
    })
  }

  delete = () => {
    this.props.dispatch({
      type: 'Index/updateNumber',
      payload: { number: this.props.number - 1 },
    })
  }

  asyncAdd = () => {
    this.props.dispatch({ type: 'Index/asyncUpdateNumber' })
  }

  render() {
    const { list } = this.state
    return (
      <Container style={styles.container}>
        <List>
          {map(list, ({ name, key, checked }) => (
            <ListItem key={key}>
              <CheckBox checked={checked} onPress={this.onItemClick.bind(this, key)} />
              <Body>
                <Text>{name}</Text>
              </Body>
            </ListItem>
          ))}
        </List>
        <View style={styles.btnWrap}>
          <Button primary onPress={this.onAddItem}>
            <Text>添加</Text>
          </Button>
        </View>
        <View style={styles.numberText}>
          <Button primary onPress={this.delete}>
            <Text>-1</Text>
          </Button>
          <Text>{this.props.number}</Text>
          <Button primary onPress={this.add}>
            <Text>+1</Text>
          </Button>
          <Button primary onPress={this.asyncAdd}>
            <Text>异步+1</Text>
          </Button>
        </View>
      </Container>
    )
  }
}

export default Home
