export default {
  namespace: 'app',
  state: {
    number: 30,
  },
  reducers: {
    add(state, { payload }) {
      state.number = payload.number
    },
    delete(state, { payload }) {
      state.number = payload.number
    },
  },
  effects: {
    *asyncAdd(_, { put, call }) {
      const res = yield call(() => new Promise(resolve => setTimeout(() => resolve(555), 3000)))
      yield put({ type: 'add', payload: { number: res } })
    },
  },
}
