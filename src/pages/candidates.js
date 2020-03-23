import React from 'react';
import Layout from '../components/Layout';
import Candidate from '../components/Candidate';

export default class Candidates extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            candidates: null
        }
    }

    componentDidMount() {
        this.setState({
            candidates: JSON.parse(window.localStorage.getItem('candidates'))
        });
    }

    render() {
        let content = (
            <div style={{fontSize: '2rem', textAlign: 'center'}}>Информации нет :(</div>
        );

        if (this.state.candidates) {
            content = this.state.candidates.filter(({ tasks }) => tasks.length).map(candidate => <Candidate content={candidate} key={candidate.candidateId} className="candidates__answer" />);
        }

        return (
            <Layout>
                <div className="candidates">
                    { content }
                </div>
            </Layout>
        );
    }
}