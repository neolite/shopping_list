import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  addList,
  archiveList,
  setActiveList
} from "../actions/index";
import ShoppingLists from "../components/ShoppingList";
import AddList from "./AddList";

class ListsContainer extends Component {
  render() {
    return (
      <div>
        <AddList />
        <ShoppingLists items={this.props.lists} onArchiveList={this.props.setArchive} onSetActiveList={this.props.setActive} />
      </div>
    )}
}

const mapStateToProps = state => {
  return {
    lists: state.lists.filter(l => !l.archive).sort((a, b) => b.id - a.id).map(el => { 
      return Object.assign(
        el, 
        { products: state.products.filter(p => p.list_id === el.id)}
      )
    })
}};

const mapDispatchToProps = dispatch => {
  return { 
    setArchive: id => {
      dispatch(archiveList(id));
    }, 
    setActive: id => {
      dispatch(setActiveList(id));
    },
    addList: value => {
      dispatch(addList(value));
    },
  };
};

const ListsContainerWithState = connect(mapStateToProps, mapDispatchToProps)(
  ListsContainer
);

ListsContainer.propTypes = {
  lists: PropTypes.array.isRequired,
  setArchive: PropTypes.func.isRequired,
  setActive: PropTypes.func.isRequired,
  addList: PropTypes.func.isRequired,
};

export default ListsContainerWithState;
