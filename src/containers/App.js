import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ProductsContainer from './ProductsContainer';
import ListsContainer from './ListsContainer';

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
          <div className="col" />
        </div>
      </div>;
  }
}

// const mapStateToProps = state => {
//   return { products: state.products.reduce(p => p.active) };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     setComplete: id => {
//       dispatch(completeProduct(id));
//     },
//     increaseCount: id => {
//       dispatch(increaseProductCount(id));
//     },
//     decreaseCount: id => {
//       dispatch(decreaseProductCount(id));
//     }
//   };
// };

// App.propTypes = {
//   products: PropTypes.array.isRequired
// };

// const AppWithState = connect(mapStateToProps, null)(App);

export default App;
