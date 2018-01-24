import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductList extends Component {
  render() {
    return(
      <ul className="list-group">
        {this.props.items.reverse().map((item) => {
          return <li className="list-group-item" key={item.id} onClick={() => this.props.onClickProduct(item.id)}>{item.name}</li>
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