/**
 * Render a single product review ask.
 */

// NPM.
var React = require('react');

module.exports = React.createClass({
  render: function () {
    return (
      <div className="bv_pin-product">
        <img src="http://placehold.it/140x100" />
        <p>Product Name TBD</p>
        <img src="http://placehold.it/140x25" />
        <button>+ Write Review</button>
        <button>Ask Me Later</button>
        <button>Never Ask Me</button>
      </div>
    );
  }
});
