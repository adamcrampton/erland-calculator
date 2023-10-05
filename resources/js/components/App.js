import React, { Component } from 'react';
import Card from './Card';
import Results from './Results';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cardVisible: true,
            resultsVisible: false
        };

        this.showResults = this.showResults.bind(this);
    }
    render() {
        return (
            <div className="accordion w-100">
                <Card visible={ this.state.cardVisible } showResults={ this.showResults }  />
                <Results visible={ this.state.resultsVisible } />
            </div>
        );
    }
    showResults() {
        this.setState({ 
            cardVisible: false,
            resultsVisible: true 
        });
    }
}

export default App;