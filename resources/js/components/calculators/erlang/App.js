import React, { Component } from 'react';
import Card from './Card';
import Results from './Results';
import { Collapse } from 'bootstrap';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardVisible: true,
            dataSet: {},
            resultsVisible: false,
            results: {
                agents: 0,
                calls: 0,
                intensity: 0,
                occupancy: 0,
                serviceLevel: 0,
                shrinkage: 0,
                speedToAnswer: 0
            },
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
    calculate(data) {
        // Make a copy and convert Time Period field.
        const dataSet = data;
        dataSet.timePeriod = this.convertToMinutes(data.timePeriod, 'minutes');

        // Process calculations.
        const intensity = (data.incomingCalls / (data.reportInterval * 60)) * data.handleTime;
        const agents = parseInt(intensity);

        console.log(intensity)

        // Set values for linked components.
        this.setState({
            dataSet: dataSet,
            selections: dataSet.selections,

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
    showResults() {
        const form = document.getElementById('collapse-form');
        const results = document.getElementById('collapse-results');
        Collapse.getOrCreateInstance(results).show();
        Collapse.getOrCreateInstance(form).hide();
    }

    startOver() {
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