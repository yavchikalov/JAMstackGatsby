import React from 'react';
import './index.scss';

export default class Task extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.change(event.target.value);
    }

    render() {
        return (
            <div className="task">
                <div className="task__question">
                    <p>{ this.props.node.description.description }</p>
                    <div className="task__question-code">
                        <pre>
                            <code>
                                { this.props.node.content.content }
                            </code>
                        </pre>
                    </div>
                </div>

                <div className="task__answer">
                    <textarea placeholder="Напишите ответ сюда" onChange={this.handleChange} value={this.props.value}></textarea>
                </div>
            </div>
        );
    }
}