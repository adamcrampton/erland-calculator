import React, { Component } from 'react';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            averagePatience: 0,
            handleTime: 0,
            maxOccupancy: 0,
            incomingContacts: 0,
            reportInterval: 0,
            serviceLevel: 0,
            shrinkage: 0,
            targetAnswerTime: 0,
            timePeriod: 0,
            selections: {
                timePeriodUnits: 'minutes'
            },
            weekWorkHours: 40
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
                <table className="table table-calculator">
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
                                        onChange={ this.handleFieldChange }
                                        value={ this.state.timePeriod }
                                    />
                                    <select 
                                        className="form-control form-control-sm form-select"
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
                                <div className="input-group">
                                    <input 
                                        className="form-control form-control-sm"
                                        name="handleTime"
                                        type="number"
                                        min="0"
                                        onChange={ this.handleFieldChange }
                                        value={ this.state.handleTime }
                                    />
                                     <span className="input-group-text">Seconds</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="form-label">
                                    <strong>Required Service Level</strong>
                                </label>
                            </td>
                            <td>
                                <div className="input-group">
                                    <input 
                                        className="form-control form-control-sm"
                                        name="serviceLevel"
                                        type="number"
                                        min="0"
                                        onChange={ this.handleFieldChange }
                                        value={ this.state.serviceLevel }
                                    />
                                    <span className="input-group-text">%</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="form-label">
                                    <strong>Target Answer Time</strong>
                                </label>
                            </td>
                            <td>
                                <div className="input-group">
                                    <input 
                                        className="form-control form-control-sm"
                                        name="targetAnswerTime"
                                        type="number"
                                        min="0"
                                        onChange={ this.handleFieldChange }
                                        value={ this.state.targetAnswerTime }
                                    />
                                     <span className="input-group-text">Seconds</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="form-label">
                                    <strong>Max Occupancy</strong>
                                </label>
                            </td>
                            <td>
                                <div className="input-group">
                                    <input 
                                        className="form-control form-control-sm"
                                        name="maxOccupancy"
                                        type="number"
                                        min="0"
                                        onChange={ this.handleFieldChange }
                                        value={ this.state.maxOccupancy }
                                    />
                                    <span className="input-group-text">%</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="form-label">
                                    <strong>Shrinkage</strong>
                                </label>
                            </td>
                            <td>
                                <div className="input-group">
                                    <input 
                                        className="form-control form-control-sm"
                                        name="shrinkage"
                                        type="number"
                                        min="0"
                                        onChange={ this.handleFieldChange }
                                        value={ this.state.shrinkage }
                                    />
                                    <span className="input-group-text">%</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="form-label">
                                    <strong>Average Patience</strong>
                                </label>
                            </td>
                            <td>
                                <div className="input-group">
                                    <input 
                                        className="form-control form-control-sm"
                                        name="averagePatience"
                                        type="number"
                                        min="0"
                                        onChange={ this.handleFieldChange }
                                        value={ this.state.averagePatience }
                                    />
                                    <span className="input-group-text">seconds</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="form-label">
                                    <strong>Week Work Hours</strong>
                                </label>
                            </td>
                            <td>
                                <div className="input-group">
                                    <input 
                                        className="form-control form-control-sm"
                                        name="weekWorkHours"
                                        type="number"
                                        min="0"
                                        onChange={ this.handleFieldChange }
                                        value={ this.state.weekWorkHours }
                                    />
                                    <span className="input-group-text">%</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="form-label">
                                    <strong>Report Interval</strong>
                                </label>
                            </td>
                            <td>
                                <div className="input-group">
                                    <input 
                                        className="form-control form-control-sm"
                                        name="reportInterval"
                                        type="number"
                                        min="0"
                                        onChange={ this.handleFieldChange }
                                        value={ this.state.reportInterval }
                                    />
                                    <span className="input-group-text">minutes</span>
                                </div>
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