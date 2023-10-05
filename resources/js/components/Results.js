import React, { Component } from 'react';

class Results extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="card accordion-item">
                <div className="card-header">
                    <button className="bg-primary text-white accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-results" aria-expanded="false" aria-controls="collapse-results">
                        Results
                    </button>
                </div>
                <div id="collapse-results" className={`card-body accordion-collapse collapse ${ this.props.visible && 'show'}`}>
                    <div id="card-results">
                        <p className="card-text pb-2 border-bottom"></p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Results;