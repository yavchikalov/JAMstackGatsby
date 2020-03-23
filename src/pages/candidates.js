import React from 'react';
import Layout from '../components/Layout';
import Candidate from '../components/Candidate';

export default () => {
    const candidates = JSON.parse(localStorage.getItem('candidates'));
    let content = (
        <div style={{fontSize: '2rem', textAlign: 'center'}}>Информации нет :(</div>
    );

    if (candidates) {
        content = candidates.filter(({ tasks }) => tasks.length).map(candidate => <Candidate content={candidate} key={candidate.candidateId} className="candidates__answer" />);
    }

    return (
        <Layout>
            <div className="candidates">
                { content }
            </div>
        </Layout>
    );
}