/**
 * provides redux store configuration method with hot reload on DEV env
 * @module 'store/index'
 */
import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { applyMiddleware, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer, { State } from '#store/reducers';

const initial = {};

/**
 * create configured redux store
 * @param  initialState object to initialize store with
 * @param  history      redux router history middleware
 * @return              configured store
 */
const configure = (initialState = initial, history: History): Store<State> => {
  let middleware = applyMiddleware(routerMiddleware(history), thunk);

  if (middleware && process.env.NODE_ENV === 'development') {
    middleware = composeWithDevTools(middleware);
  }
  const store = createStore(rootReducer(history), initialState, middleware);

  if (process.env.NODE_ENV === 'development' && module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default;

      store.replaceReducer(nextReducer(history));
    });
  }

  return store;
};

export default configure;
