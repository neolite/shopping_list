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

    return <li key={this.props.item.id} className={itemClass}>
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">
            {this.props.item.name} <span className="badge badge-primary">
              4
            </span>
          </h5>
          <small>3 days ago</small>
        </div>
        <p>
          <span className="badge badge-light">14</span>
        </p>
        <div className="d-flex justify-content-around">
          <button type="button" className=" btn-outline-secondary col">
            ➖
          </button>
          <button type="button" className=" btn-outline-primary col">
            ➕
          </button>

          <small className="col" />
          <button type="button" className=" btn-outline-primary col">
            ✔️
          </button>
        </div>
      </li>;}
}

ProductItem.propTypes = {
  item: PropTypes.object.isRequired,
  onClickItem: PropTypes.func.isRequired
};

export default ProductItem;