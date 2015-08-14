(function (module) {
    'use strict';

    var React = require('React');

    module.exports = React.createClass({

        handleSubmit: function () {
            this.props.onSubmit();
        },

        render: function() {
            return (
                <form className="form">
                    {this.props.children}
                    <button type="button" onClick={this.handleSubmit}>{this.props.name}</button>
                </form>
            );
        }
    });

})(module);