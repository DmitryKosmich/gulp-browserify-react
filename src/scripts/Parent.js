(function (module) {
    'use strict';

    var React = require('React'),
        Child = require('./Child');

    module.exports  = React.createClass({
        render: function(){
            return (
                <div>
                    <div> This is the parent. </div>
                    <Child name="child"/>
                </div>
                )
        }
    });

})(module);