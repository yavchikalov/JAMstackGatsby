import React from 'react';
import './index.scss';

export default class FieldInput extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        if (this.props.change) this.props.change(event.target.value);
    }

    render() {
        return (
            <input
                type="text"
                value={this.props.value}
                placeholder={this.props.placeholder}
                className={`${this.props.className} field-input`}
                onChange={this.handleChange}
            />
        );
    }
}