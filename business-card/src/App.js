import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import logo from './logo.svg';
import Header from './components/Header/Header.js'
import reducer from './store/reducer'
import './App.css';

const store = createStore(reducer)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Header></Header>
        </div>
      </Provider>
    );
  }

}

export default App;
