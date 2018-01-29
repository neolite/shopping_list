import React, { Component } from 'react';
import ProductsContainer from './ProductsContainer';
import ListsContainer from './ListsContainer';
import AddProduct from './AddProductContainer';
import './App.css';


class App extends Component {
  render() {
    return <div className="container-fluid">
        <div className="row justify-content-md-center">
          <div className="col-4">
           <ListsContainer />
          </div>
          <div className="col-4">
            <AddProduct />
            <div className="row">
              <div className="w-100" />
            </div>
            <ProductsContainer />
          </div>
          <div className="col" />
        </div>
      </div>;
  }
}

export default App;
