(function (module) {
    'use strict';

    var React = require('React'),
        Page = require('../Page');

    module.exports = React.createClass({
        render: function () {
            return <Page><h2>Home</h2></Page>;
        }
    });

})(module);