(function (module) {
    'use strict';

    var React = require('React');
    var OrderList = require('../order/OrderList'),
        DataProvider = require('../../services/DataProvider'),
        Constant = require('../../services/Constant');

    module.exports = React.createClass({

        getInitialState: function() {
            return {data: []};
        },

        componentDidMount: function() {
            var url = './test-server/order/orders/1.json';
            DataProvider.get(url, function(data) {
                this.setState({data: data});
            }.bind(this), function(status, statusText) {
                console.error(url, status, statusText);
            }.bind(this));
        },

        render: function () {
            return (
                <div className="page">
                    <h1>{this.state.data.client}</h1>
                    <h2>{this.state.data.header}</h2>
                    <h3>{this.state.data.date}</h3>
                    <p>{this.state.data.description}</p>
                </div>
            );
        }
    });

})(module);