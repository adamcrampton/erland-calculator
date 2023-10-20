import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faHeadset, faPhone, faStopwatch } from '@fortawesome/free-solid-svg-icons';

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
                        <div className="result-icons w-100 text-center">
                            <div className="row">
                                <div className="col">
                                    <span className="d-block fs-6 mb-2">Agents</span>
                                    <FontAwesomeIcon icon={ faHeadset } size="4x" className="blue" />
                                    <span className="d-block fs-3 mt-2"><strong>{ this.props.results.agents }</strong></span>
                                </div>
                                <div className="col">
                                    <span className="d-block fs-6 mb-2">Service Level</span>
                                    <FontAwesomeIcon icon={ faStopwatch } size="4x" className="pink" />
                                    <span className="d-block fs-3 mt-2"><strong>{ this.props.results.serviceLevel }</strong>%</span>
                                </div>
                                <div className="col">
                                    <span className="d-block fs-6 mb-2">Occupancy</span>
                                    <FontAwesomeIcon icon={ faChartPie } size="4x" className="u-violet" />
                                    <span className="d-block fs-3 mt-2"><strong>{ this.props.results.occupancy }</strong>%</span>
                                </div>
                                <div className="col">
                                    <span className="d-block fs-6 mb-2">Calls</span>
                                    <FontAwesomeIcon icon={ faPhone } size="4x" className="r-violet" />
                                    <span className="d-block fs-3 mt-2"><strong>{ this.props.dataSet.incomingCalls }</strong></span>
                                </div>
                            </div>
                        </div>
                        <div className="result-summary mt-2">
                            <h4 className="mt-3">Summary</h4>
                            These calculations are based on <strong>{ this.props.dataSet.incomingCalls }</strong> incoming calls over a period of <strong>{ this.props.dataSet.timePeriod } { this.props.selections.timePeriodUnits }
                            </strong>.
                            <h4 className="mt-3">Your Results</h4>
                            <p className="card-text">The number of agents required is <strong>{ this.props.results.agents }</strong>, which includes a shrinkage factor of <strong>{ this.props.results.shrinkage }</strong>.</p>
                            <p className="card-text">Based on the above data, the Service Level Calculated is <strong>{ this.props.results.serviceLevel }</strong>, with an Average Speed To Answer of <strong>{ this.props.results.speedToAnswer }</strong>.</p>
                        </div>
                        <div className="text-center">
                            <button 
                                className="btn btn-sm btn-u-violet me-1" 
                                onClick={ this.props.toggleForm }
                            >
                                Show Calculator
                            </button>
                            <button 
                                className="btn btn-sm btn-r-violet" 
                                onClick={ this.props.startOver }
                            >
                                Start Over
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Results;