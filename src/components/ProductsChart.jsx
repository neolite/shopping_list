import React from "react";
// import { connect } from "react-redux";
import PropTypes from "prop-types";
import { BarChart } from "react-chartkick";

let ProductsChart = ({ items }) => {
  return <BarChart data={items} />;
};

ProductsChart.propTypes = {
  items: PropTypes.array.isRequired
};

// ProductsChart = connect()(ProductsChart);

export default ProductsChart;
