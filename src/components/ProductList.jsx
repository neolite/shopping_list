import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductList extends Component {
  render() {
    return(
      <ul>
        {this.props.items.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    )
  }
}

ProductList.propTypes = {
  items: PropTypes.array
};

export default ProductList;