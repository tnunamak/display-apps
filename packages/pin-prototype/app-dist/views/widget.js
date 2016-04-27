'use strict';

/**
 * Top-level container for PIN HTML content.
 */

// NPM.
var React = require('react');

// Local.
var DefaultContainer = require('./DefaultContainer.js');

module.exports = React.createClass({
  render: function render() {
    return React.createElement(DefaultContainer, null);
  }
});