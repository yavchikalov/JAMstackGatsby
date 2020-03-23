import React from 'react';
import './index.scss';
import Button from '../ui/Button';
import Task from '../Task';
import { navigate } from 'gatsby';

export default class TaskManager extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            tasks: props.tasks,
            activeIndex: 0,
            answer: '',
            candidates: null,
            candidateId: null
        }
        
        this.handleAnswer = this.handleAnswer.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        if (!window.candidateId) {
            document.location.href = '/';
        } else {
            this.setState({
                candidateId: window.candidateId,
                candidates: JSON.parse(window.localStorage.getItem('candidates'))
            })
        }
    }

    handleAnswer() {
        const { description, content } = this.state.tasks[this.state.activeIndex].node;
            
        const candidate = this.state.candidates.find(({ candidateId }) => candidateId === this.state.candidateId);

        candidate.tasks.push({
            question: description.description,
            code: content.content,
            answer: this.state.answer
        });

        window.localStorage.setItem('candidates', JSON.stringify(this.state.candidates));

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