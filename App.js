import React, { PureComponent } from 'react'
import indexModel from './src/models'
import { Provider } from 'react-redux'
import App from './src/router'

import { create } from 'dva-core'
import immer from 'dva-immer'
const models = [indexModel]

const app = create() // 创建dva实例，可传递配置参数。https://dvajs.com/api/#app-dva-opts

//immer plugin
app.use(immer())

models.forEach(o => {
  // 装载models对象
  app.model(o)
})

app.start() // 实例初始化

const store = app._store // 获取redux的store对象供react-redux使用

export default class Container extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
