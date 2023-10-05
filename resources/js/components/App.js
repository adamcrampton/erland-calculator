import React, { Component } from 'react';
import Card from './Card';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="w-100">
                <Card />
            </div>
        );
    }
}

export default App;