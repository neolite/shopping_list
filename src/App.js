import React, { Component } from 'react';

import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import ProductList from './components/ProductList';

const items = ["one", "two", "three"];

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-md-center">
          <div className="col">
          </div>
          <div className="col-3">
            <ProductList items={items}/>
          </div>
          <div className="col">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
