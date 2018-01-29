import React, { Component } from "react";
import PropTypes from "prop-types";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import cn from 'classnames';

import "./ProductList.css";

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

    return <li key={item.id} href="#" className={className} onClick={() => this.props.onSetActiveList(item.id)}>
          {item.name}
          <span className="badge badge-primary badge-pill">2</span>
        </li>;
    });

    return <ReactCSSTransitionGroup transitionName={{ enter: "animated", enterActive: "bounceIn", leave: "animated", leaveActive: "bounceOutDown" }} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
        <ul className="list-group">{menuItems}</ul>
      </ReactCSSTransitionGroup>;
  }
}

ShoppingList.propTypes = {
  items: PropTypes.array.isRequired,
  onSetActiveList: PropTypes.func.isRequired
};

export default ShoppingList;
