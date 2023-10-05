import React, { Component } from 'react';
import Table from './Table';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <div className="card">
                <div className="card-header bg-primary text-white">Call Centre Erlang Calculator</div>
                <div className="card-body">
                    <p className="card-text pb-2 border-bottom">Set fields to calculate staff numbers required to reach an agreed service level.</p>
                    <Table />
                </div>
            </div>
        );
    };
}

export default Card;