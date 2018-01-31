import React from "react";
import PropTypes from 'prop-types';
import { BarChart } from 'react-chartkick';

let ProductsChart = ({ items }) => {
  return <BarChart data={items} />;
};

ProductsChart.propTypes = {
  items: PropTypes.array.isRequired
};

export default ProductsChart;
