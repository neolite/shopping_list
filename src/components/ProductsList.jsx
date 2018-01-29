import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import cn from "classnames";
import * as dateFns from "date-fns";

import './ProductList.css';

class ProductList extends Component {
  render() {
    const items = this.props.items.reverse().map(item => {
                  const itemClass = cn({
                    "list-group-item": true,
                    "list-group-item-action": true,
                    "flex-column": true,
                    "align-items-start": true,
                    active: item.done
                  });
                  return <li key={item.id} className={itemClass}>
                      <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">
                          {item.name} <span className="badge badge-primary">
                            {item.count}
                          </span>
                        </h5>
                        <small>
                          {dateFns.distanceInWords(
                            Date.now(),
                            item.id
                          )}
                        </small>
                      </div>
                      <p>
                        <span className="badge badge-light">
                          14
                        </span>
                      </p>
                      <div className="d-flex justify-content-around">
                        <button type="button" className="btn-outline-secondary col" onClick={() => this.props.onDecreaseCount(item.id)}>
                          <span role="img" aria-label="Minus">
                            ➖
                          </span>
                        </button>
                        <button type="button" className="btn-outline-primary col" onClick={() => this.props.onIncreaseCount(item.id)}>
                          <span role="img" aria-label="Plus">
                            ➕
                          </span>
                        </button>
                        <small className="col" />
                        <button type="button" className="btn-outline-primary col" onClick={() => this.props.onCompleteProduct(item.id)}>
                          <span role="img" aria-label="Complete">
                            ✔️
                          </span>
                        </button>
                      </div>
    
                    </li>;
                    }
                  );

    return <ul className="list-group" id="product-list">
        <ReactCSSTransitionGroup transitionName={{ enter: "animated", enterActive: "bounceIn", leave: "animated", leaveActive: "bounceOutDown" }} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {items}
        </ReactCSSTransitionGroup>
      </ul>;
  }
}

ProductList.propTypes = {
  items: PropTypes.array.isRequired,
  onIncreaseCount: PropTypes.func.isRequired,
  onDecreaseCount: PropTypes.func.isRequired,
  onCompleteProduct: PropTypes.func.isRequired
};

export default ProductList;