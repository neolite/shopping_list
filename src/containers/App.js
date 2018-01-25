import React, { Component } from 'react';
import ProductsContainer from './ProductsContainer';
import AddProduct from './AddProductContainer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-md-center">
          <div className="col">
          </div>
          <div className="col-3">
            <AddProduct />
            <div className="row">
              <div className="w-100"></div>
            </div>
            <ProductsContainer />
          </div>
          <div className="col">
          </div>
        </div>
      </div>
    );
  }
}

export default App;
