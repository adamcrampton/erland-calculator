import React, { Component } from 'react';
import CommonPopover from '../../common/ui/CommonPopover';
import FormInput from '../../common/forms/FormInput';
import Formsy, { addValidationRule } from 'formsy-react';
import TimeUnitSelect from '../../common/forms/TimeUnitSelect';
import FormGroupInput from '../../common/forms/FormGroupInput';

class Table extends Component {
    constructor(props) {
        super(props);
        // Contains defaults for each field.
        this.state = {
            canSubmit: false,
            calculateAllowed: 0,
            averagePatience: 0,
            handleTime: 0,
            maxOccupancy: 0,
            incomingCalls: 100,
            reportInterval: 0,
            serviceLevel: 90,
            shrinkage: 0,
            targetAnswerTime: 30,
            timePeriod: 60,
            selections: {
                timePeriodUnits: 'seconds'
            },
            weekWorkHours: 40
        };

        // Unit selections for input dropdowns.
        this.units = [
            'seconds', 'minutes', 'hours', 'weeks', 'months'
        ];

        // Submit button toggling.
        this.disableButton = this.disableButton.bind(this);
        this.enableButton = this.enableButton.bind(this);

        // Custom validators.
        addValidationRule('incomingCallsBoundaries', (values, value) => value > 0 && value <= 1000);
        addValidationRule('timePeriodBoundaries', (values, value) => {
            // To-minutes conversion.
            let converted = value;
            switch (this.state.selections.timePeriodUnits) {
                case 'seconds':
                    converted = value / 60;
                case 'minutes':
                    converted = value;
                break;
                case 'hours':
                    converted = value * 60;
                break;
                case 'months':
                    converted = value * 60 * 31;
                break;
                default:
                    converted = value;
                break;
            }
            return converted > 0 && converted <= 1000
        });
        addValidationRule('percentageBoundaries', (values, value) => value >= 0 && value <= 100);
        addValidationRule('handleTimeBoundaries', (values, value) => value > 0 && value <= 1000);
        addValidationRule('targetAnswerTimeBoundaries', (values, value) => value > 0 && value <= 1000);
        addValidationRule('averagePatienceBoundaries', (values, value) => value > 0 && value <= 1000);
        addValidationRule('weekWorkHoursBoundaries', (values, value) => value > 0 && value <= 80);
        addValidationRule('reportIntervalBoundaries', (values, value) => value > 0 && value <= 1000);

        // State change handlers.
        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleTimePeriodUnitChange = this.handleTimePeriodUnitChange.bind(this);
    }
    render() {
        return (
            <div>
                <Formsy 
                    onValidSubmit={ this.submit } 
                    onValid={ this.enableButton } 
                    onInvalid={ this.disableButton }
                >
                <table className="table table-calculator">
                    <tbody>
                        <tr>
                            <td>
                                <label className="form-label">
                                    <strong>Incoming Calls</strong>
                                </label>
                                <CommonPopover
                                    headingId="newHeading"
                                    headingclassName="h3"  
                                    headingContent="Heading Text"
                                    bodyContent="Some text for the body"
                                    placement="top"
                                />
                            </td>
                            <td>
                                <FormInput 
                                    className="form-control form-control-sm"
                                    name="incomingCalls"
                                    type="number"
                                    value={ this.state.incomingCalls }
                                    handleFieldChange={ this.handleFieldChange }
                                    validations="isExisty,isNumeric,isInt,incomingCallsBoundaries"
                                    validationError="Value must be between 1 and 1000"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="form-label">
                                    <strong>Time Period</strong>
                                </label>
                                <CommonPopover
                                    headingId="newHeading"
                                    headingclassName="h3"  
                                    headingContent="Heading Text"
                                    bodyContent="Some text for the body"
                                    placement="top"
                                />
                            </td>
                            <td>
                                <div className="input-group input-group-sm">
                                    <FormInput
                                        className="form-control form-control-sm"
                                        name="timePeriod"
                                        type="number"
                                        value={ this.state.timePeriod }
                                        handleFieldChange={ this.handleFieldChange }
                                        validations="isExisty,isNumeric,isInt,timePeriodBoundaries"
                                        validationError="Value must be between 1 and 1000"
                                        required
                                    />
                                    <TimeUnitSelect
                                        selected={ this.state.selections.timePeriodUnits }
                                        handleTimePeriodUnitChange={ this.handleTimePeriodUnitChange }
                                        units={ this.units }
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="form-label">
                                    <strong>Average Handle Time</strong>
                                </label>
                                <CommonPopover
                                    headingId="newHeading"
                                    headingclassName="h3"  
                                    headingContent="Heading Text"
                                    bodyContent="Some text for the body"
                                    placement="top"
                                />
                            </td>
                            <td>
                                <div className="input-group">
                                    <FormGroupInput
                                        className="form-control form-control-sm"
                                        name="handleTime"
                                        type="number"
                                        value={ this.state.handleTime }
                                        label="Seconds"
                                        handleFieldChange={ this.handleFieldChange }
                                        validations="isExisty,isNumeric,isInt,handleTimeBoundaries"
                                        validationError="Value must be between 1 and 1000"
                                        required
                                    />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label className="form-label">
                                    <strong>Required Service Level</strong>
                                </label>
                                <CommonPopover
                                    headingId="newHeading"
                                    headingclassName="h3"  
                                    headingContent="Heading Text"
                                    bodyContent="Some text for the body"
                                    placement="top"
                                />
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
                                <CommonPopover
                                    headingId="newHeading"
                                    headingclassName="h3"  
                                    headingContent="Heading Text"
                                    bodyContent="Some text for the body"
                                    placement="top"
                                />
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
                                <CommonPopover
                                    headingId="newHeading"
                                    headingclassName="h3"  
                                    headingContent="Heading Text"
                                    bodyContent="Some text for the body"
                                    placement="top"
                                />
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
                                <CommonPopover
                                    headingId="newHeading"
                                    headingclassName="h3"  
                                    headingContent="Heading Text"
                                    bodyContent="Some text for the body"
                                    placement="top"
                                />
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
                                <CommonPopover
                                    headingId="newHeading"
                                    headingclassName="h3"  
                                    headingContent="Heading Text"
                                    bodyContent="Some text for the body"
                                    placement="top"
                                />
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
                                <CommonPopover
                                    headingId="newHeading"
                                    headingclassName="h3"  
                                    headingContent="Heading Text"
                                    bodyContent="Some text for the body"
                                    placement="top"
                                />
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
                                <CommonPopover
                                    headingId="newHeading"
                                    headingclassName="h3"  
                                    headingContent="Heading Text"
                                    bodyContent="Some text for the body"
                                    placement="top"
                                />
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
                    <button 
                        className={"btn btn-sm btn-u-violet " + (this.state.canSubmit ? "" : "disabled") } 
                        disabled={ !this.state.canSubmit }
                        onClick={ (evt) => this.props.triggerCalculated(evt, this.state) }
                        data-bs-toggle="collapse"
                        data-bs-target="#collapse-form" 
                        aria-expanded="true" 
                        aria-controls="collapse-form"
                    >
                        Calculate
                    </button>
                </div>
            </Formsy>
            </div>
        );
    }

    // // Convert value to selected units + update state.
    // convertTimePeriod(evt) {
    //     const value = evt.target.value;

    //     switch (this.state.selections.timePeriodUnits) {
    //         case 'seconds':
    //             return value / 60;
    //         case 'minutes':
    //             return value;
    //         break;
    //         case 'hours':
    //             return value * 60;
    //         break;
    //         case 'months':
    //             return value * 60 * 31;
    //         break;
    //         default:
    //             return value;
    //         break;
    //     }
    // }
    disableButton() {
        this.setState({ canSubmit: false });
    }
    
    enableButton() {
        this.setState({ canSubmit: true });
    }
    handleFieldChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }
    handleTimePeriodUnitChange(evt) {
        this.setState({
            selections: {
                ...this.state.selections, 
                timePeriodUnits: evt.target.value
            }
        });
    }
}

export default Table;