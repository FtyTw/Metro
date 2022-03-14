import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import 'react-native-gesture-handler';

import { Routes } from './src/navigation';
import store from './src/state/store';

global.PropTypes = PropTypes;
if (process.env.NODE_ENV === 'development') {
    global.XMLHttpRequest = global.originalXMLHttpRequest
        ? global.originalXMLHttpRequest
        : global.XMLHttpRequest;
    global.FormData = global.originalFormData ? global.originalFormData : global.FormData;
}

const App = () => (
    <Provider store={store}>
        <Routes />
    </Provider>
);

export default App;
