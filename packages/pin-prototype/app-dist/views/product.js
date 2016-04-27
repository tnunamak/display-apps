"use strict";

/**
 * Render a single product review ask.
 */

// NPM.
var React = require('react');

module.exports = React.createClass({
  render: function render() {
    return React.createElement(
      "div",
      { className: "bv_pin-product" },
      React.createElement("img", { src: "http://placehold.it/140x100" }),
      React.createElement(
        "p",
        null,
        "Product Name TBD"
      ),
      React.createElement("img", { src: "http://placehold.it/140x25" }),
      React.createElement(
        "button",
        null,
        "+ Write Review"
      ),
      React.createElement(
        "button",
        null,
        "Ask Me Later"
      ),
      React.createElement(
        "button",
        null,
        "Never Ask Me"
      )
    );
  }
});