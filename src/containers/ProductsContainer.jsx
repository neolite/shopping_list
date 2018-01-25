import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { completeProduct } from '../actions/index';
import ProductList from '../components/ProductsList';


class ProductsContainer extends Component {
  render() {
    return(
      <ProductList items={this.props.products} onClickProduct={this.props.setComplete}/>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.sort((a,b) => a.id - b.id)//.filter(item => !item.completed)//getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setComplete: id => {
      dispatch(completeProduct(id))
    }
  }
}

const ProductsContainerWithState = connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsContainer)

ProductsContainer.propTypes = {
  products: PropTypes.array.isRequired,
  setComplete: PropTypes.func.isRequired
};

export default ProductsContainerWithState;