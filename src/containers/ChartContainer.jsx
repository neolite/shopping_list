import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import _ from 'lodash';
import ProductsChart from "../components/ProductsChart";


class ChartsContainer extends Component {
  render() {
    return <div>
        <ProductsChart items={this.props.products} />
      </div>;
  }
}

const mapStateToProps = state => {
  const active_lists_ids = state.lists.filter(l => !l.archive).map(el => el.id);
  const available_products = state.products.filter(p => active_lists_ids.includes(p.list_id));
  const grouppedProducts = _.groupBy(available_products,'name');
  const products = Object.keys(grouppedProducts).map(key => {
    let result = _.reduce(grouppedProducts[key], (acc, el) => {
       return acc + el.count;
      }, 0);
      return [key, result];
  });
  return { products };
};


ChartsContainer.propTypes = {
  products: PropTypes.array.isRequired
};


const ConnectedChartsContainer = connect(mapStateToProps, null)(ChartsContainer);

export default ConnectedChartsContainer;
