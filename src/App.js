import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import ChooseApp from './components/ChooseApp';
import { store } from './store/store';

const App = () => {
  return (
    <Provider store={ store } >
      <ChooseApp />
    </Provider>
  )
}

export default App;
