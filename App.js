import React from 'react';

import {Provider} from 'react-redux';
import {Routes} from './src/navigation';
import store from './src/state/store';

// global.XMLHttpRequest = global.originalXMLHttpRequest
//   ? global.originalXMLHttpRequest
//   : global.XMLHttpRequest;
// global.FormData = global.originalFormData
//   ? global.originalFormData
//   : global.FormData;

const App = () => (
  <Provider store={store}>
    <Routes> </Routes>
  </Provider>
);

export default App;
