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
              {this.props.categories.map(cat => {
                 return <div key={cat.id} className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1" />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      {cat.emodzi}
                      <div className="tooltip bs-tooltip-top" role="tooltip">
                        <div className="arrow" />
                        <div className="tooltip-inner">{cat.name}</div>
                      </div>
                    </label>
                  </div>;
                })}
            </div>
          </div>
        </form>
      </div>;
  }   
}


const mapStateToProps = state => {
  return { categories: state.categories.sort((a, b) => a.id - b.id) };
};

const mapDispatchToProps = dispatch => {
  return { addProduct: value => {
      dispatch(addProduct(value));
    } };
};

const AddProductWithState = connect(mapStateToProps, mapDispatchToProps)(AddProduct);

AddProduct.propTypes = {
  addProduct: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired
};

export default AddProductWithState;