import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import myReducer from './Reducer';

const myStore = createStore(myReducer);
myStore.subscribe( () => console.log(myStore.getState()) );

ReactDom.render(<Provider store={myStore}><App/></Provider>, document.getElementById('root'));

