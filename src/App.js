import React, { Component } from 'react';
import './App.css';
import ProductList from './components/ProductList';

const items = ["one", "two", "three"];

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProductList items={items}/>
      </div>
    );
  }
}

export default App;
