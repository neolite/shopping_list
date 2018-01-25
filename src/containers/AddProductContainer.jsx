import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { addProduct } from '../actions'

let AddProduct = ({ dispatch }) => {
  let input

  return (
    <div>
      <form className="form-row"
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addProduct(input.value))
          input.value = ''
        }}
      >
        <div className="col">
          <input className="form-control"
            ref={node => {
              input = node
            }}
          />
        </div>
        <div className="col">  
          <button type="submit" className="btn btn-outline-primary">
            Add Product
          </button>
        </div>
      </form>
    </div>
  )
}

AddProduct.propTypes = {
  dispatch: PropTypes.func
};

AddProduct = connect()(AddProduct);

export default AddProduct;