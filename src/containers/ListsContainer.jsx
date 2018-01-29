import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addList, archiveList, setActiveList } from "../actions/index";
import ShoppingLists from "../components/ShoppingList";

class ListsContainer extends Component {
  render() {
    return <ShoppingLists items={this.props.lists} onArchiveList={this.props.setArchive} onSetActiveList={this.props.setActive} />;
  }
}

const mapStateToProps = state => {
  return {
    lists: state.lists.sort((a, b) => a.id - b.id) //.filter(item => !item.completed)//getVisibleTodos(state.todos, state.visibilityFilter)
    // categories: state.categories
  };
};

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
    } 
  };
};

const ListsContainerWithState = connect(mapStateToProps, mapDispatchToProps)(
  ListsContainer
);

ListsContainer.propTypes = {
  lists: PropTypes.array.isRequired,
  setArchive: PropTypes.func.isRequired,
  setActive: PropTypes.func.isRequired,
  addList: PropTypes.func.isRequired
};

export default ListsContainerWithState;
