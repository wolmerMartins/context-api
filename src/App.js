import React, { Component } from 'react';

import MyProvider from './Context/MyProvider';
import ProductList from './ProductList';

class App extends Component {
  render() {
    return (
      <MyProvider>
        <div className="App">
          <header className="App-header">
            <img src="" className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to my web store</h1>
          </header>

          <ProductList />
        </div>
      </MyProvider>
    );
  }
}

export default App;
