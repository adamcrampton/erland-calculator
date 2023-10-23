import React, { Component } from 'react';
import Card from './Card';
import Results from './Results';
import { Collapse } from 'bootstrap';

class App extends Component {
    constructor(props) {
        super(props);

        this.resultDefaults = {
            agents: 0,
            calls: 0,
            callHasToWait: 0,
            callsPerHour: 0,
            immediateAnswer: 0,
            intensity: 0,
            occupancy: 0,
            serviceLevel: 0,
            shrinkage: 0,
            speedToAnswer: 0,
            totalCallMinutes: 0
        };

        this.state = {
            applyShrinkage: true,
            cardVisible: true,
            dataSet: {},
            resultsVisible: false,
            results: this.resultDefaults,
            selections: {
                timePeriodUnits: 'minutes'
            }
        };

        this.calculate = this.calculate.bind(this);
        this.startOver = this.startOver.bind(this);
        this.toggleResults = this.toggleResults.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
    }
    render() {
        return (
            <div className="accordion w-100">
                <Card 
                    calculate={ this.calculate }
                    showResults={ this.showResults }
                    startOver={ this.startOver }
                    toggleForm={ this.toggleForm }
                    visible={ this.state.cardVisible } 
                />
                <Results
                    dataSet={ this.state.dataSet }
                    applyShrinkage={ this.state.applyShrinkage }
                    results={ this.state.results }
                    showResults={ this.showResults }
                    startOver={ this.startOver }
                    toggleForm={ this.toggleForm }
                    selections={ this.state.selections }
                    visible={ this.state.resultsVisible }
                />
            </div>
        );
    }
    // Calculates various data points for the Results component using
    // the following inputs and an Erlang calculation:
    // - Incoming call count
    // - Time period
    // - Shrinkage (optional)
    // - Target answer time
    // - Average handle time
    //
    // The following fields are not implemented and could/should be a TODO:
    // - Required Service Level
    // - Max Occupancy
    // - Average Patience
    // - Week Work Hours
    // - Report Interval
    calculate(data) {
        // Make a copy and convert Time Period field.
        const dataSet = data;
        dataSet.timePeriod = this.convertToMinutes(data.timePeriod, 'minutes');

        // Set shrinkage toggle.
        this.setState({ applyShrinkage: data.applyShrinkage });

        // Process calculations using Erlang C Formula.
        // See: https://www.callcentrehelper.com/erlang-c-formula-example-121281.htm
        // =====================
        // Base data.
        const callsPerHour = (60 / data.timePeriod) * data.incomingCalls;
        const callMinutes = data.incomingCalls * (data.handleTime / 60);
        const intensity = callMinutes / 60;
        let agents = parseInt(intensity + 1);
        const occupancy = (intensity / agents) * 100;

        // Update if Shrinkage is a factor.
        if (data.applyShrinkage) {
            agents = agents / (1 - (data.shrinkage / 100));
        }

        // Work out N! (N Factorial) for formula (N = Number of Agents).
        const nFactorial = this.getFactorial(agents);

        // Work out powers A_N (Traffic Intensity to the power of N).
        const aPowers = Math.pow(parseInt(intensity), agents);

        // Work out top row of Erlang formula.
        // aPowers / nFactorial * agents
        const formulaTop = (aPowers / nFactorial) * (agents / (agents + intensity));

        // Work out sum of a series, looping until counter is N-1.
        let sumOfSeries = 0;

        for (let index = 0; index <= agents; index++) {
            sumOfSeries+= Math.pow(intensity, index) / this.getFactorial(index);
        }

        // Take top row (X) and sumOfSeries (Y) and put into formula.
        // Pw = X / (Y + X)
        // This works out the probability that the call has to wait.
        const callHasToWait = formulaTop / (sumOfSeries + formulaTop);

        // Next we calculate service level.
        // See above link for explanation, easier to do in 2 steps.
        const slPreCalc = -(agents - intensity) * (data.targetAnswerTime / data.handleTime);
        const serviceLevel = (1 - (callHasToWait * Math.exp(slPreCalc))) * 100;

        // Calculate Average Speed To Answer.
        const speedToAnswer = (callHasToWait * data.handleTime) / (agents - intensity);

        // Calculate percentage of calls answered immediately.
        const immediateAnswer = (1 - callHasToWait) * 100;

        // Set values for linked components.
        this.setState({
            dataSet: dataSet,
            selections: dataSet.selections,
            results: {
                ...this.state.results,
                agents: Math.round(agents),
                callHasToWait: callHasToWait,
                callsPerHours: callsPerHour,
                immediateAnswer: immediateAnswer,
                intensity: intensity,
                occupancy: parseFloat(occupancy).toFixed(2),
                serviceLevel: parseFloat(serviceLevel).toFixed(2),
                shrinkage: data.shrinkage,
                speedToAnswer: parseFloat(speedToAnswer).toFixed(2),
                totalCallMinutes: callMinutes
            }
        });
    }
    convertToMinutes(value, unit) {
        switch (unit) {
            case 'seconds':
                return value / 60;
            case 'minutes':
                return value;
            break;
            case 'hours':
                return value * 60;
            break;
            case 'months':
                return value * 60 * 31;
            break;
            default:
                return value;
            break;
        }
    }
    // https://stackoverflow.com/questions/3959211/what-is-the-fastest-factorial-function-in-javascript
    getFactorial(num) {
        let rval = 1;
        for (let i = 2; i <= num; i++)
            rval = rval * i;
        return rval;
    }
    showResults() {
        const form = document.getElementById('collapse-form');
        const results = document.getElementById('collapse-results');
        Collapse.getOrCreateInstance(results).show();
        Collapse.getOrCreateInstance(form).hide();
    }

    startOver() {
        // Reset values to default.
        // #!#!#! does not work
        this.setState({
            applyShrinkage: true,
            dataSet: {},
            results: this.resultDefaults,
            selections: {
                timePeriodUnits: 'minutes'
            }
        });

        // Reset collapse states.
        const form = document.getElementById('collapse-form');
        const results = document.getElementById('collapse-results');
        Collapse.getOrCreateInstance(results).hide();
        Collapse.getOrCreateInstance(form).show();
    }
    toggleResults() {
        const results = document.getElementById('collapse-results');
        Collapse.getOrCreateInstance(results).toggle();
    }
    toggleForm() {
        const form = document.getElementById('collapse-form');
        Collapse.getOrCreateInstance(form).toggle();
    }
}

export default App;