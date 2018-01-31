import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import cn from 'classnames';


class ShoppingList extends Component {
  render() {
    const menuItems = this.props.items.map(item => {
    const className = cn({
      "list-group-item": true,
      "d-flex": true,
      "justify-content-between": true,
      "align-items-center": true,
      active: item.active
    });  
    return <li key={item.id} className={className} onClick={() => this.props.onSetActiveList(item.id)}>
        <div className="col">
          {item.name} &nbsp;
          <span className="badge badge-danger badge-pill">
            {item.products.length}
          </span>
        </div>
        <div className="d-flex justify-content-around">
          <div className="col-4" />
          <button type="button" className="btn-outline-success" onClick={() => this.props.onArchiveList(item.id)}>
            <span role="img" aria-label="Complete">
              ✔️
            </span>
          </button>
        </div>
      </li>;
    });

    return <ul className="list-group" id="shopping-lists">
        <ReactCSSTransitionGroup transitionName={{ enter: "animated", enterActive: "fadeIn", leave: "animated", leaveActive: "fadeOutDown" }} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          {menuItems}
        </ReactCSSTransitionGroup>
      </ul>;
  }
}

ShoppingList.propTypes = {
  items: PropTypes.array.isRequired,
  onSetActiveList: PropTypes.func.isRequired,
  onArchiveList: PropTypes.func.isRequired
};

export default ShoppingList;
