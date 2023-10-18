import { withFormsy } from 'formsy-react';
import React, { Component } from 'react';

class FormGroupInput extends Component {
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(event) {
        // Updates value in parent component.
        this.props.handleFieldChange(event);
        // Note: setValue() is used by Formsy as part of the validation process.
        this.props.setValue(event.currentTarget.value);
      }
    
      render() {
        const errorMessage = this.props.errorMessage;
    
        return (
          <div className="w-100">
            <div className="input-group input-group-sm">
              <input 
                  className="form-control form-control-sm"
                  onChange={ this.changeValue } 
                  type={ this.props.type ?? 'text' } 
                  name={ this.props.name }
                  value={ this.props.value } 
                  validations={ this.props.validations }
              />
              <span className="input-group-text">{ this.props.label }</span>
            </div>
            <span className="badge bg-danger mt-2">{ errorMessage }</span>
          </div>
        );
    }
}

export default withFormsy(FormGroupInput);