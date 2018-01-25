import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ProductList.css';
import ProductItem from './ProductItem';

class ProductList extends Component {
  render() {
    return(
      <ul className="list-group" id="product-list">
        {this.props.items.reverse().map((item) => {
          return <ProductItem item={item} key={item.id} onClickItem={this.props.onClickProduct}></ProductItem>
        })}
      </ul>
    )
  }
}

ProductList.propTypes = {
  items: PropTypes.array.isRequired,
  onClickProduct: PropTypes.func.isRequired
};

export default ProductList;