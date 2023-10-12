import React, { Component } from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Popover } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';

class CommonPopover extends Component {
    constructor(props) {
        super(props);

        this.popover = (
            <Popover id={ this.props.headingId }>
              <Popover.Header as={ this.props.headingClass }>{ this.props.headingContent }</Popover.Header>
              <Popover.Body>{ this.props.bodyContent }</Popover.Body>
            </Popover>
          );
    }
    render() {
        return (
            <OverlayTrigger trigger="click" placement={ this.props.placement } overlay={ this.popover }>
                <button class="btn"><FontAwesomeIcon icon={ faCircleQuestion } /></button>
            </OverlayTrigger>
        );
    }
}

export default CommonPopover;