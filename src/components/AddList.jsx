import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addList } from "../actions";

let addListComponent = ({ dispatch }) => {
  let input;

  return <div>
      <form className="form-row"  onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addList(input.value));
          input.value = "";
        }}>
        <div className="col-sm-9 col-md-9 d-flex justify-content-start">
          <input className="form-control" placeholder="Type shopping list name"
           ref={node => {
              input = node;
            }} />
        </div>
        <div className="col"></div>
        <div className="col-sm-2 col-md-2 d-flex justify-content-end">
          <button type="submit" className="btn btn-outline-primary">
            Add
          </button>
        </div>
      </form>
    </div>;
};

addListComponent.propTypes = {
  dispatch: PropTypes.func.isRequired
};

addListComponent = connect()(addListComponent);

export default addListComponent;
