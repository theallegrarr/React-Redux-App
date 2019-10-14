import React from 'react';
import ReactDOM from 'react-dom';
import thunk from 'redux-thunk';
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import Form from './components/Form';
import Card from './components/Card';
import { user } from './components/state/staticUser';
import logo from './logo.svg';
import './App.css';
import * as reducers from './components/state/reducers';

const monsterReducer = combineReducers({
  // the key is the real name for the slice of state
  form: reducers.formReducer,
  user: reducers.userReducer,
  userData: user ,
});

const store = createStore(
  monsterReducer,
  {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <header className="App-header">
          <Form />
          <Card />
        </header>
      </Provider>
    </div>
  );
}

export default App;
