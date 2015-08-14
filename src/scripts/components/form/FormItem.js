(function (module) {
    'use strict';

    var React = require('React');

    module.exports = React.createClass({

        onChange: function(event) {
            var value = {};
            value[this.props.id] = event.target.value;
            this.props.onChange(value);
            console.log(event.target.value);
        },

        render: function() {
            return (
                <div className="form-item">
                    <label htmlFor={this.props.id}>{this.props.name}</label>
                    <input id={this.props.id} type={this.props.type} name={this.props.id} value={this.props.value} placeholder={this.props.name} onChange={this.onChange}/>
                </div>
            );
        }
    });

})(module);