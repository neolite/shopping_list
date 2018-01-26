import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './ProductList.css';
import ProductItem from './ProductItem';

class ProductList extends Component {
  render() {
    return <ul className="list-group" id="product-list">
        <ReactCSSTransitionGroup 
          transitionName={{ enter: "animated", enterActive: "bounceIn", leave: "animated", leaveActive: "bounceOutDown" }} 
          transitionEnterTimeout={500} 
          transitionLeaveTimeout={300}
        >
          {this.props.items.reverse().map(item => {
            return <ProductItem item={item} key={item.id} 
            onClickItem={this.props.onClickProduct} 
            increaseProduct={this.props.onIncreaseCount} 
            decreaseProduct={this.props.onDecreaseCount} />;
          })}
        </ReactCSSTransitionGroup>
      </ul>;
  }
}

ProductList.propTypes = {
  items: PropTypes.array.isRequired,
  onClickProduct: PropTypes.func.isRequired,
  onIncreaseCount: PropTypes.func.isRequired,
  onDecreaseCount: PropTypes.func.isRequired,
};

export default ProductList;