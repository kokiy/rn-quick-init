export default {
  namespace: 'Index',
  state: {
    number: 30,
  },
  reducers: {
    updateNumber(state, { payload }) {
      state.number = payload.number
    },
  },
  effects: {
    *asyncUpdateNumber(_, { put, call }) {
      const res = yield call(() => new Promise(resolve => setTimeout(() => resolve(555), 3000)))
      yield put({ type: 'updateNumber', payload: { number: res } })
    },
  },
}
