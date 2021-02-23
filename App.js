import React from 'react';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import AppNavigator from './src/navigation/AppNavigator';
import rootReducer from './src/reducers';

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

const App = () => (
  <Provider store={store}>
    <AppNavigator />
  </Provider>
);

export default App;
