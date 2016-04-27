/**
 * A container that shows three products side by side.
 */

// NPM.
var React = require('react');

// Local.
var Product = require('./product.js');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="bv_pin-defaultContainer">
        <Product />
        <Product />
        <Product />
      </div>
    );
  }
});
