import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
class ProductItem extends Component {

  render() {
    const itemClass = cn({
      'list-group-item': true,
      'list-group-item-action': true,
      'flex-column': true,
      'align-items-start':true,
      'active': this.props.item.completed
    })

    return (

      <li 
        key={this.props.item.id} 
        onClick={() => this.props.onClickItem(this.props.item.id)}
        className={itemClass} 
        >
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{this.props.item.name} <span className="badge badge-primary">4</span></h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1">
        
        </p>
        <span className="badge badge-light">14</span>
      </li>
  )}
}

ProductItem.propTypes = {
  item: PropTypes.object.isRequired,
  onClickItem: PropTypes.func.isRequired
};

export default ProductItem;