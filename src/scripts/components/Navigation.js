(function (module) {
    'use strict';

    var React = require('React'),
        Constant = require('../services/Constant');

    module.exports = React.createClass({

        render: function() {
            return (
                <nav className="page-nav">
                    <ul>
                        <li><a href={Constant.HOME_URL}>Home</a></li>
                        <li><a href={Constant.ORDERS_URL}>Orders</a></li>
                    </ul>
                </nav>
            );
        }
    });

})(module);