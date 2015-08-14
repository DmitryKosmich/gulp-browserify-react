(function (module) {
    'use strict';

    var React = require('React');
    var Form = require('../form/Form'),
        FormItem = require('../form/FormItem'),
        DataProvider = require('../../services/DataProvider'),
        Constant = require('../../services/Constant'),
        Page = require('../Page');

    module.exports = React.createClass({

        getInitialState: function() {
            return {
                header: '',
                client: '',
                date: '',
                description: ''
            };
        },

        componentDidMount: function() {
            var url = './test-server/order/orders/' + this.props.urlParams.id + '.json';
            DataProvider.get(url, function(data) {
                this.setState({
                    header: data.header,
                    client: data.client,
                    date: data.date,
                    description: data.description
                });
            }.bind(this), function(status, statusText) {
                console.error(url, status, statusText);
            }.bind(this));
        },

        handleSubmit: function () {
            console.log('Click!');
        },

        handleChange: function(newData) {
            console.log('handleChange', newData);
            this.setState(newData);
        },

        render: function () {
            return (
                <Page>
                    <Form name="Edit" onSubmit={this.handleSubmit}>
                        <FormItem id="header" type="text" name="Header" value={this.state.header} onChange={this.handleChange} />
                        <FormItem id="client" type="text" name="Client name" value={this.state.client} onChange={this.handleChange} />
                        <FormItem id="date"type="text" name="Date" value={this.state.date} onChange={this.handleChange} />
                        <FormItem id="description" type="text" name="Description" value={this.state.description} onChange={this.handleChange} />
                    </Form>
                </Page>
            );
        }
    });

})(module);