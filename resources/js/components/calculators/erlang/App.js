import React, { Component } from 'react';
import Card from './Card';
import Results from './Results';
import { Collapse } from 'bootstrap';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardVisible: true,
            resultsVisible: false
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
                    visible={ this.state.cardVisible } 
                    showResults={ this.showResults }
                    toggleForm={ this.toggleForm }
                    startOver={ this.startOver }
                    calculate={ this.calculate }
                />
                <Results 
                    visible={ this.state.resultsVisible } 
                    showResults={ this.showResults }
                    toggleForm={ this.toggleForm }
                    startOver={ this.startOver }
                />
            </div>
        );
    }
    calculate(data) {
        // Make a copy and convert Time Period field.
        const dataSet = data;
        dataSet.timePeriod = this.convertToMinutes(data.timePeriod, 'minutes');

        console.log(dataSet);
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