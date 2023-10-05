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
            <div className="card accordion-item">
                <div className="card-header">
                    <button className="bg-primary text-white accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-form" aria-expanded="true" aria-controls="collapse-form">
                        Call Centre Erlang Calculator
                    </button>
                </div>
                <div id="collapse-form" className="card-body accordion-collapse collapse show">
                    <div id="card-form">
                        <p className="card-text pb-2 border-bottom">Set fields to calculate staff numbers required to reach an agreed service level.</p>
                        <Table />
                    </div>
                </div>
            </div>
        );
    };
}

export default Card;