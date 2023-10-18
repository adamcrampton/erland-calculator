import React, { Component } from 'react';

class TimeUnitSelect extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <select 
                className="form-control form-control-sm form-select"
                onChange={ this.props.handleTimePeriodUnitChange }
            >
                { this.props.units.map(unit => (<option key={unit} value={unit} selected={ unit == this.props.selected }>{unit}</option>)) }
            </select>
        );
    }
}

export default TimeUnitSelect;