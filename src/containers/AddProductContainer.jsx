import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';

import { addProduct } from '../actions'

class AddProduct extends Component {

  componentDidMount(){
    console.warn(this.props.categories);
  }

  onSubmit =  e => {
    e.preventDefault();
    if (!this.input.value.trim()) {
      return;
    }
    this.props.addProduct(this.input.value);
    this.input.value = "";
  }

  render() {
    return <div>
        <form className="form-row" onSubmit={this.onSubmit}>
          <div className="col-sm-9 col-md-9 d-flex justify-content-start">
            <input className="form-control" ref={node => {
                this.input = node;
              }} />
          </div>
          <div className="col-sm-3 col-md-3 d-flex justify-content-end">
            <button type="submit" className="btn btn-outline-primary">
              Add
            </button>
          </div>
          <div className="flex categories-wrapper">
            <div className="col-sm-9 col-md-9 d-flex justify-content-start">

            </div>
          </div>
        </form>
      </div>;
  }   
}

const mapDispatchToProps = dispatch => {
  return { addProduct: value => {
      dispatch(addProduct(value));
    } };
};

const AddProductWithState = connect(null, mapDispatchToProps)(AddProduct);

AddProduct.propTypes = {
  addProduct: PropTypes.func.isRequired
};

export default AddProductWithState;