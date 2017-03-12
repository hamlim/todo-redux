import React from 'react';
import {render} from 'react-dom';

import {createStore} from 'redux';

import todo from './src/reducers/todo';

const store = createStore(todo);

import Application from './src/start';

const renderFunc = () => {
  render(
    <Application state={store.getState()} />,
    document.getElementById('mount')
  );
};

store.subscribe(renderFunc);
renderFunc();