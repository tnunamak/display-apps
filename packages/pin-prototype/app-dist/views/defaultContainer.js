'use strict';

/**
 * A container that shows three products side by side.
 */

// NPM.
var React = require('react');

// Local.
var Product = require('./product.js');

module.exports = React.createClass({
  render: function render() {
    return React.createElement(
      'div',
      { className: 'bv_pin-defaultContainer' },
      React.createElement(Product, null),
      React.createElement(Product, null),
      React.createElement(Product, null)
    );
  }
});