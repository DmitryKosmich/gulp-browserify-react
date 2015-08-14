(function (module) {
    'use strict';

    var React = require('React');

    module.exports = React.createClass({

        render: function() {
            return (
                <div className="page">
                    {this.props.children}
                </div>
            );
        }
    });

})(module);