import React from 'react';
import FieldInput from '../ui/FieldInput';
import FieldSubmit from '../ui/FieldSubmit';
import Form from '../ui/Form';
import './index.scss';

export default class Fullname extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            surname: '',
            patronymic: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInput = this.handleInput.bind(this);
    }

    handleSubmit() {
        const { name, surname, patronymic } = this.state;
        if (name || surname || patronymic) {
            const candidatesStorage = localStorage.getItem('candidates');
            if (!candidatesStorage) localStorage.setItem('candidates', JSON.stringify([]));
            const candidates = candidatesStorage ? JSON.parse(candidatesStorage) : [];
            const candidateId = Date.now();
            window.candidateId = candidateId;

            candidates.push({
                ...this.state,
                candidateId,
                tasks: []
            });

            localStorage.setItem('candidates', JSON.stringify(candidates));
            this.props.continue();
        } else {
            alert('Ну хотя бы имя, пожалуйста');
        }
    }

    handleInput(field, value) {
        this.setState({
            [field]: value
        });
    }

    render() {
        return (
            <div className="candidate-form">
                <h2 className="candidate-form__header">ФИО кандидата</h2>
                <Form submit={this.handleSubmit}>
                    <FieldInput
                        value={this.state.surname}
                        placeholder="Фамилия"
                        className="candidate-form__field-input"
                        change={value => this.handleInput('surname', value)}
                    />
                    <FieldInput
                        value={this.state.name}
                        placeholder="Имя"
                        className="candidate-form__field-input"
                        change={value => this.handleInput('name', value)}
                    />
                    <FieldInput
                        value={this.state.patronymic}
                        placeholder="Отчество"
                        className="candidate-form__field-input"
                        change={value => this.handleInput('patronymic', value)}
                    />
                    <FieldSubmit value="Продолжить" />
                </Form>
            </div>
        );
    }
}
