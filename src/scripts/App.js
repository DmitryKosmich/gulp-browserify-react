(function (window) {
    'use strict';

    var React = require('react'),
        Home = require('./components/pages/Home'),
        Orders = require('./components/pages/Orders'),
        Order = require('./components/pages/Order'),
        OrderEdit = require('./components/pages/OrderEdit'),
        Navigation = require('./components/Navigation'),
        Router = require('./services/Router');

    Router
        .route('/orders', Orders)
        .route('/order-edit', OrderEdit)
        .route('/order', Order)
        .defaultRoute(Home);

    var App = React.createClass({
        render: function () {
            var View = Router.page(this.props.route);
            var urlParams = Router.getUrlParams(this.props.route);
            return (
                <div className="app">
                    <Navigation />
                    <View urlParams={urlParams} />
                </div>
            );
        }
    });

    Router.callback(function (route) {
        React.render(<App route={route} />, document.body);
    });

    Router.start();

})(window);
