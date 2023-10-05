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
                <div className="card-header bg-primary text-white">
                    <div className="row">
                        <div className="col">Call Centre Erlang Calculator</div>
                        <div className="col d-flex justify-content-end">
                            <button className="btn btn-warning btn-sm" type="button" data-bs-toggle="collapse" data-bs-target="#card-form">Toggle</button>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div id="card-form" className="collapse show">
                        <p className="card-text pb-2 border-bottom">Set fields to calculate staff numbers required to reach an agreed service level.</p>
                        <Table />
                    </div>
                </div>
            </div>
        );
    };
}

export default Card;