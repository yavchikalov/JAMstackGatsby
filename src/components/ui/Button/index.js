import React from 'react';
import './index.scss';

export default class Button extends React.Component {
    constructor(props) {
        super(props);

        this.text = props.text;
        this.click = props.click;

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.click) this.click();
    }

    render() {
        return (
            <button className="button" onClick={this.handleClick}>{ this.text }</button>
        );
    }
}