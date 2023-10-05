import React, { Component } from 'react';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            incomingContacts: 0,
            selections: {
                timePeriodUnits: 'minutes'
            }
        };

        this.units = [
            'minutes', 'hours', 'weeks', 'months'
        ];

        this.handleCalculation = this.handleCalculation.bind(this);
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleTimePeriodUnitChange = this.handleTimePeriodUnitChange.bind(this);
    }
    render() {
        return (
            <div>
                <table className="table">
                    <tbody>
                        <tr>
                            <td>
                                <label className="form-label">
                                    <strong>Incoming contacts</strong>
                                </label>
                            </td>
                            <td>
                                <input 
                                    className="form-control form-control-sm"
                                    name="incomingContacts"
                                    type="number"
                                    min="0"
                                    onChange={ this.handleFieldChange }
                                    value={ this.state.incomingContacts }
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="form-label">
                                    <strong>Time Period</strong>
                                </label>
                            </td>
                            <td>
                                <div className="input-group">
                                    <input 
                                        className="form-control form-control-sm"
                                        name="timePeriod"
                                        type="number"
                                        min="0"
                                    />
                                    <select 
                                        className="form-control form-control-sm"
                                        selected={ this.state.selections.timePeriodUnits }
                                        onChange={ this.handleTimePeriodUnitChange }
                                    >
                                        { this.units.map(unit => ( <option key={unit} value={unit}>{unit}</option> )) }
                                            
                                    </select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="form-label">
                                    <strong>Average Handle Time</strong>
                                </label>
                            </td>
                            <td>
                               
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="form-label">
                                    <strong>Required Service Level %</strong>
                                </label>
                            </td>
                            <td>
                               
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="form-label">
                                    <strong>Target Answer Time</strong>
                                </label>
                            </td>
                            <td>
                               
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="form-label">
                                    <strong>Max Occupancy</strong>
                                </label>
                            </td>
                            <td>
                               
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="form-label">
                                    <strong>Shrinkage</strong>
                                </label>
                            </td>
                            <td>
                               
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="form-label">
                                    <strong>Average Patience</strong>
                                </label>
                            </td>
                            <td>
                               
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="form-label">
                                    <strong>Week Work Hours</strong>
                                </label>
                            </td>
                            <td>
                               
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="form-label">
                                    <strong>Report Interval</strong>
                                </label>
                            </td>
                            <td>
                               
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="text-center">
                    <button className="btn btn-sm btn-success" onClick={ this.updateCalc }>Calculate</button>
                </div>
            </div>
        );
    }
    // Convert value to selected units + update state.
    convertTimePeriod(evt) {
        const value = evt.target.value;

        switch (this.state.selections.timePeriodUnits) {
            case seconds:
                return value / 60;
            case minutes:
                return value;
            break;
            case hours:
                return value * 60;
            break;
            case months:
                return value * 60 * 31;
            break;
            default:
                return value;
            break;
        }
    }
    handleFieldChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleTimePeriodUnitChange(evt) {
        this.setState({
            selections: {
                ...this.state.selections, timePeriodUnits: evt.target.value
            }
        });
    }
    handleCalculation() {

    }
}

export default Table;