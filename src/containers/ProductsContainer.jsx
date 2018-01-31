import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  completeProduct,
  increaseProductCount,
  decreaseProductCount
} from "../actions/index";
import ProductList from '../components/ProductsList';
import AddProduct from "./AddProduct";

class ProductsContainer extends Component {
  render() {
    return <div>
        <AddProduct list={this.props.currentList}/>
        <div className="row">
          <div className="w-100" />
        </div>
        <ProductList items={this.props.products} list={this.props.currentList} onCompleteProduct={this.props.setComplete} onIncreaseCount={this.props.increaseCount} onDecreaseCount={this.props.decreaseCount} />
      </div>
  }
}

const mapStateToProps = state => {
  const currentList = state.lists.filter(l => l.active)[0];
  console.log('currentlist',currentList);
  return { products: state.products
      .filter(p => p.list_id === currentList.id)
      .sort((a, b) => a.id - b.id),
    currentList };
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

const ProductsContainerWithState = connect(mapStateToProps, mapDispatchToProps)(
  ProductsContainer
);

ProductsContainer.propTypes = {
  products: PropTypes.array.isRequired,
  currentList: PropTypes.object.isRequired,
  setComplete: PropTypes.func.isRequired,
  increaseCount: PropTypes.func.isRequired,
  decreaseCount: PropTypes.func.isRequired
};

export default ProductsContainerWithState;