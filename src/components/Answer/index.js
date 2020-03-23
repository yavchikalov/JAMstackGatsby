import React from 'react';
import './index.scss';

export default props => (
    <div className={`answer ${props.className}`}>
        <div className="answer__task-question">{ props.task.question }</div>
        <div className="answer__task-code">
            <pre>
                <code>
                    { props.task.code }
                </code>
            </pre>
        </div>
        <div className="answer__content">
            <p>Ответ:</p>
            <pre>
                <code>
                    { props.task.answer || 'Нет ответа' }
                </code>
            </pre>
        </div>
    </div>
);