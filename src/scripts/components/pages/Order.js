(function (module) {
    'use strict';

    var React = require('React');
    var OrderList = require('../order/OrderList'),
        DataProvider = require('../../services/DataProvider'),
        Constant = require('../../services/Constant'),
        Page = require('../Page');

    module.exports = React.createClass({

        getInitialState: function() {
            return {data: []};
        },

        componentDidMount: function() {
            var url = './test-server/order/orders/' + this.props.urlParams.id + '.json';
            DataProvider.get(url, function(data) {
                this.setState({data: data});
            }.bind(this), function(status, statusText) {
                console.error(url, status, statusText);
            }.bind(this));
        },

        render: function () {
            var url = Constant.ORDER_EDIT_URL +'?' + 'id'+ '=' + this.state.data.id;
            return (
                <Page>
                    <h1>{this.state.data.client}</h1><span><a href={url}>Edit</a></span>
                    <h2>{this.state.data.header}</h2>
                    <h3>{this.state.data.date}</h3>
                    <p>{this.state.data.description}</p>
                </Page>
            );
        }
    });

})(module);