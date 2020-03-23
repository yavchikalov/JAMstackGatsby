import React from 'react';
import './index.scss';
import Button from '../ui/Button';
import Task from '../Task';
import { navigate } from 'gatsby';

export default class TaskManager extends React.Component {
    constructor(props) {
        super(props);

        if (!window.candidateId) document.location.href = '/';

        this.state = {
            tasks: props.tasks,
            activeIndex: 0,
            answer: '',
            candidateId: window.candidateId
        }
        
        this.handleAnswer = this.handleAnswer.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleAnswer() {
        const { description, content } = this.state.tasks[this.state.activeIndex].node;
            
        const candidates = JSON.parse(localStorage.getItem('candidates'));
        const candidate = candidates.find(({ candidateId }) => candidateId === this.state.candidateId);

        candidate.tasks.push({
            question: description.description,
            code: content.content,
            answer: this.state.answer
        });

        localStorage.setItem('candidates', JSON.stringify(candidates));

        if (this.state.activeIndex === this.state.tasks.length - 1) {
            navigate('/finally');
        } else {
            this.setState(state => {
                return { 
                    activeIndex: state.activeIndex + 1,
                    answer: ''
                };
            });

        }
    }
    
    handleChange(value) {
        this.setState({ answer: value });
    }

    render() {
        return (
            <div className="task-manager">
                <div className="task-manager__content">
                    <div className="task-manager__task">
                        <Task node={this.state.tasks[this.state.activeIndex].node} change={this.handleChange} value={this.state.answer} />
                        <Button text="Ответить" click={this.handleAnswer} />
                    </div>
                    <div className="task-manager__description">
                        Если возникли трудности или вопросы, то обращайтесь за помощью, не стесняйтесь.
                    </div>
                </div>
                <div className="task-manager__status">
                    { this.state.activeIndex + 1 } / { this.state.tasks.length }
                </div>
            </div>
        );
    }
}