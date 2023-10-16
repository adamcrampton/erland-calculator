import { withFormsy } from 'formsy-react';
import React, { Component } from 'react';

class FormInput extends Component {
    constructor(props) {
        super(props);
        this.changeValue = this.changeValue.bind(this);

        console.log(props)
    }

    changeValue(event) {
        // Note: setValue() is used by Formsy as part of the validation process.
        this.props.setValue(event.currentTarget.value);
      }
    
      render() {
        const errorMessage = this.props.errorMessage;
    
        return (
          <div>
            <input 
                className="form-control form-control-sm"
                onChange={ this.changeValue } 
                type={ this.props.type ?? 'text' } 
                name={ this.props.name }
                value={ this.props.value } 
                validations={ this.props.validations }
                required
            />
            <span>{ errorMessage }</span>
          </div>
        );
    }
}

export default withFormsy(FormInput);