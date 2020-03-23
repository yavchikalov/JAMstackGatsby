import React from 'react';
import './index.scss';
import Answer from '../Answer';

export default props => {
    const taskList = props.content.tasks.map((task, key) => {
        return <Answer key={key} task={task} className="candidate__answer" />
    });

    return (
        <div className={`candidate ${props.className || ''}`}>
            <div className="candidate__fullname">
                <span>ФИО:</span> { `${props.content.surname} ${props.content.name} ${props.content.patronymic}` }
            </div>
            { taskList }
        </div>
    );
}