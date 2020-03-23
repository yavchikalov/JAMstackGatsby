import React from 'react';

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.submit();
    }

    render() {
        return (
            <form autoComplete="off" onSubmit={this.handleSubmit}>
                { this.props.children }
            </form>
        );
    }
}