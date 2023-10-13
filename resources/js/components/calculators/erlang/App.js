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