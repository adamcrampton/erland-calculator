import React, { Component } from 'react';
import Card from './Card';
import Results from './Results';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="accordion w-100">
                <Card />
                <Results />
            </div>
        );
    }
}

export default App;