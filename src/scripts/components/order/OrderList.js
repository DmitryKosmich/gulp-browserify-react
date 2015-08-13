(function (module) {
    'use strict';

    var React = require('React'),
        OrderListItem = require('./OrderListItem');

    module.exports = React.createClass({

        render: function() {
            var renderOrders = this.props.data.map(function (order) {
                return <OrderListItem  key={order.id} data={order} />
            });

            return (
                <ul className="order-list">
                    {renderOrders}
                </ul>
            );
        }
    });

})(module);