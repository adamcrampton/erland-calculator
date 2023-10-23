import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartPie, faHeadset, faPhone, faStar, faStopwatch, faTachometerAlt, faUserCheck, faUserClock } from '@fortawesome/free-solid-svg-icons';

class Results extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="card accordion-item">
                <div className="card-header">
                    <button className="bg bg-skobe text-white accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-results" aria-expanded="false" aria-controls="collapse-results" disabled={ !this.props.dataSet.hasOwnProperty('applyShrinkage') }>
                        Results
                    </button>
                </div>
                <div id="collapse-results" className={`card-body accordion-collapse collapse ${ this.props.visible && 'show'}`}>
                    <div id="card-results">
                        <div className="result-icons w-100 text-center">
                            <div className="row mb-3">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-title">Incoming<br />Calls</div>
                                            <FontAwesomeIcon icon={ faPhone } size="3x" className="r-violet" />
                                            <span className="d-block fs-3 mt-2"><strong>{ this.props.dataSet.incomingCalls }</strong></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-title">Calls<br />Per Hour</div>
                                            <FontAwesomeIcon icon={ faStopwatch } size="3x" className="sky" />
                                            <span className="d-block fs-3 mt-2"><strong>{ this.props.results.callsPerHour }</strong></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-title">Call Has<br />To Wait %</div>
                                            <FontAwesomeIcon icon={ faUserClock } size="3x" className="pink" />
                                            <span className="d-block fs-3 mt-2"><strong>{ this.props.results.serviceLevel }%</strong></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-title">Calls Answered<br />Immediately</div>
                                            <FontAwesomeIcon icon={ faUserCheck } size="3x" className="u-violet" />
                                            <span className="d-block fs-3 mt-2"><strong>{ this.props.results.occupancy }%</strong></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-title">Speed To<br />Answer</div>
                                            <FontAwesomeIcon icon={ faTachometerAlt } size="3x" className="pumpkin" />
                                            <span className="d-block fs-3 mt-2"><strong>{ this.props.results.speedToAnswer } secs</strong></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-title">Agents<br />Required</div>
                                            <FontAwesomeIcon icon={ faHeadset } size="3x" className="melon" />
                                            <span className="d-block fs-3 mt-2"><strong>{ this.props.results.agents }</strong></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-title">Service<br />Level</div>
                                            <FontAwesomeIcon icon={ faStar } size="3x" className="cambridge" />
                                            <span className="d-block fs-3 mt-2"><strong>{ this.props.results.serviceLevel }%</strong></span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="card-title">Occupancy<br />Rate</div>
                                            <FontAwesomeIcon icon={ faChartPie } size="3x" className="green" />
                                            <span className="d-block fs-3 mt-2"><strong>{ this.props.results.occupancy }%</strong></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="result-summary mt-2">
                            <h4 className="mt-3">Summary</h4>
                            These calculations are based on <strong>{ this.props.dataSet.incomingCalls }</strong> incoming calls over a period of <strong>{ this.props.dataSet.timePeriod } { this.props.selections.timePeriodUnits }</strong>.
                            <h4 className="mt-3">Your Results</h4>
                            <p className="card-text">The number of agents required is <strong>{ this.props.results.agents }</strong>.</p>
                            { this.props.applyShrinkage && <p>This includes a shrinkage factor of <strong>{ this.props.results.shrinkage }%</strong>.</p> } 
                            <p className="card-text">Based on the above data, the Service Level Calculated is <strong>{ this.props.results.serviceLevel }</strong>, with an Average Speed To Answer of <strong>{ this.props.results.speedToAnswer } seconds</strong>.</p>
                        </div>
                        <div className="text-center mt-2">
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