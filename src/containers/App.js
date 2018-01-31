import React, { Component } from 'react';
import ProductsContainer from './ProductsContainer';
import ListsContainer from './ListsContainer';
import ChartContainer from "./ChartContainer";
import './App.css';

class App extends Component {
  render() {
    return <div className="container-fluid">
        <div className="row justify-content-md-center">
          <div className="col-3">
            <ListsContainer />
          </div>
          <div className="col-4">
            <ProductsContainer />
          </div>
          <div className="col-3">
            <ChartContainer />
          </div>
          <div className="col" />
        </div>
      </div>;
  }
}

export default App;
