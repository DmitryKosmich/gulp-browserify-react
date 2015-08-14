(function (module) {
    'use strict';

    var React = require('React'),
        Constant = require('../services/Constant');

    module.exports = React.createClass({

        render: function() {
            return (
                <nav className="page-nav">
                    <ul>
                        <li><h1><a href={Constant.HOME_URL}>Home</a></h1></li>
                        <li><h1><a href={Constant.ORDERS_URL}>Orders</a></h1></li>
                    </ul>
                </nav>
            );
        }
    });

})(module);