import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../Layout';
import TaskManager from '../TaskManager';

export const query = graphql`
    query($name: String) {
        allContentfulQuestions(filter: {section: {name: {eq: $name}}}) {
            edges {
                node {
                    id
                    name,
                    description {
                        description
                    }
                    content {
                        content
                    }
                    section {
                        name
                    }
                }
            }
        }
    }
`;

export default props => {
    const tasks = props.data.allContentfulQuestions.edges;
    const content = tasks.length ? <TaskManager tasks={tasks} /> : 'Нет задач';
    return (
        <Layout>
            { content }
        </Layout>
    );
}