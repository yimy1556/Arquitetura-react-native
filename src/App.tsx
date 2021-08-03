import React from 'react';
import {Provider} from 'react-redux';

import {Home} from '_scenes';
import {configureStore} from '_modules/store';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}
