import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { addProduct } from '../actions'

const AddProduct = ({ dispatch, list }) => {
  let input;
  return <div>
      <form className="form-row" onSubmit={e => {
          e.preventDefault();
          if (!this.input.value.trim()) {
            return;
          }
          dispatch(addProduct(this.input.value, list.id));
          this.input.value = "";
        }}>
        <div className="col-sm-9 col-md-9 d-flex justify-content-start">
          <input className="form-control" placeholder="Type position name" ref={node => {
              this.input = node;
            }} />
        </div>
        <div className="col-sm-3 col-md-3 d-flex justify-content-end">
          <button type="submit" className="btn btn-outline-primary">
            Add
          </button>
        </div>
      </form>
    </div>;
};

AddProduct.propTypes = {
  dispatch: PropTypes.func.isRequired,
  list: PropTypes.object.isRequired
};

const AddProductWithState = connect()(AddProduct);

export default AddProductWithState;