import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers/rootReducer'

const middlewares = [thunk]

export default function configureStore(initialState) {
  const blacklist = []

  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension && window.devToolsExtension({
      actionsBlacklist: blacklist
    })
  ))

  return store
}
