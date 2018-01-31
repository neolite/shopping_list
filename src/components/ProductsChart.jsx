import React from "react";
import PropTypes from 'prop-types';
import { BarChart } from 'react-chartkick';

let ProductsChart = ({ items }) => {
  let renderItem;
  if (items.length > 0) {
    renderItem = <BarChart data={items} />;
  } else {
    renderItem = <div className="alert alert-primary" role="alert">
        No data to display chart
      </div>;
  }
  return renderItem;
};

ProductsChart.propTypes = {
  items: PropTypes.array.isRequired
};

export default ProductsChart;
