import React from "react"
import { Link, graphql } from "gatsby"

import Layout from '../components/Layout';
import CandidateForm from '../components/CandidateForm';

export const query = graphql`
    query {
        allContentfulPath(sort: {order: ASC, fields: createdAt}, filter: {node_locale: {eq: "en-US"}}) {
            edges {
                node {
                    name
                }
            }
        }
    }
`;

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: true
        };
        this.handleContinue = this.handleContinue.bind(this);
        this.paths = props.data.allContentfulPath.edges;
    }

    handleContinue() {
        this.setState({ form: false });
    }

    render() {
        const listPath = this.paths.map(({ node: { name, id } }) => (
            <Link key={id} to={name.toLowerCase()} className="category">{ name }</Link>
        ));
        let content;
        if (this.state.form) {
            content = <CandidateForm continue={this.handleContinue} />
        } else {
            content = listPath;
        }
        return (
            <Layout>
                { content }
            </Layout>
        );
    }
}
