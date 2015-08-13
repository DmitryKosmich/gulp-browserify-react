(function (window) {
    'use strict';

    var React = require('react'),
        Home = require('./components/pages/Home'),
        Orders = require('./components/pages/Orders'),
        Order = require('./components/pages/Order'),
        Constant = require('./services/Constant'),
        Router = require('./services/Router');

    Router
        .route('/orders/[0-9]+', Order)
        .route('/orders', Orders)
        .defaultRoute(Home);

    var App = React.createClass({
        render: function () {
            var Child = Router.page(this.props.route);
            return (
                <div>
                    <header>Test application</header>
                    <nav>
                        <ul>
                            <li><a href={Constant.HOME_URL}>Home</a></li>
                            <li><a href={Constant.ORDERS_URL}>Orders</a></li>
                        </ul>
                    </nav>
                    <Child/>
                </div>
            );
        }
    });

    Router.callback(function (route) {
        React.render(<App route={route} />, document.body);
    });

    Router.start();

})(window);
