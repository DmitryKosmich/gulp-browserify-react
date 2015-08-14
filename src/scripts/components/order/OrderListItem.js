(function (module) {
    'use strict';

    var React = require('React'),
        Constant = require('../../services/Constant');

    module.exports = React.createClass({

        render: function() {
            var url = Constant.ORDER_URL + '?id=' + this.props.data.id;
            return (
                <li className="order-list-item">
                    <a href={url}>
                        <h1>{this.props.data.client}</h1>
                        <p>{this.props.data.header}</p>
                    </a>
                </li>
            );
        }
    });

})(module);