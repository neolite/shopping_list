import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import * as dateFns from "date-fns";
// import distanceInWords from "date-fns/distance_in_words"; 
class ProductItem extends Component {

  render() {
    const itemClass = cn({
      "list-group-item": true,
      "list-group-item-action": true,
      "flex-column": true,
      "align-items-start": true,
      active: this.props.item.done
    });

    return <li key={this.props.item.id} className={itemClass}>
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">
            {this.props.item.name} <span className="badge badge-primary">
              {this.props.item.count}
            </span>
          </h5>
          <small>
            {dateFns.distanceInWords(Date.now(), this.props.item.id)}
          </small>
        </div>
        <p>
          <span className="badge badge-light">14</span>
        </p>
        <div className="d-flex justify-content-around">
          <button type="button" className="btn-outline-secondary col" onClick={() => this.props.decreaseProduct(this.props.item.id)}>
            <span role="img" aria-label="Minus">
              ➖
            </span>
          </button>
          <button type="button" className="btn-outline-primary col" onClick={() => this.props.increaseProduct(this.props.item.id)}>
            <span role="img" aria-label="Plus">
              ➕
            </span>
          </button>
          <small className="col" />
          <button type="button" className="btn-outline-primary col">
            <span role="img" aria-label="Complete">
              ✔️
            </span>
          </button>
        </div>
      </li>;}
}

ProductItem.propTypes = {
  item: PropTypes.object.isRequired,
  onClickItem: PropTypes.func.isRequired,
  increaseProduct: PropTypes.func.isRequired,
  decreaseProduct: PropTypes.func.isRequired
};

export default ProductItem;