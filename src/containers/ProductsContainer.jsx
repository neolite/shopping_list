import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  completeProduct,
  increaseProductCount,
  decreaseProductCount
} from "../actions/index";
import ProductList from '../components/ProductsList';

class ProductsContainer extends Component {
  render() {
    return <ProductList 
    items={this.props.products} 
    categories={this.props.categories}
    onCompleteProduct={this.props.setComplete} 
    onIncreaseCount={this.props.increaseCount} 
    onDecreaseCount={this.props.decreaseCount} />;
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.sort((a,b) => a.id - b.id),//.filter(item => !item.completed)//getVisibleTodos(state.todos, state.visibilityFilter)
    // categories: state.categories
  }
}

const mapDispatchToProps = dispatch => {
  return { setComplete: id => {
      dispatch(completeProduct(id));
    }, increaseCount: id => {
      dispatch(increaseProductCount(id));
    }, decreaseCount: id => {
      dispatch(decreaseProductCount(id));
    } 
  };
}

const ProductsContainerWithState = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer)

ProductsContainer.propTypes = {
  products: PropTypes.array.isRequired,
  setComplete: PropTypes.func.isRequired,
  increaseCount: PropTypes.func.isRequired,
  decreaseCount: PropTypes.func.isRequired
};

export default ProductsContainerWithState;