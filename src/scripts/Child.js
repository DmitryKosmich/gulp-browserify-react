(function (module) {
    'use strict';

    var React = require('React');

    module.exports  = React.createClass({
        render: function(){
            return (
                <div>
                and this is the <b>{this.props.name}</b>.
                </div>
                )
        }
    });

})(module);