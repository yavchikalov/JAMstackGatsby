import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export const query = graphql`
    query {
        file(name: {eq: "robot"}) {
            publicURL
        }
    }
`;

export default ({ data: { 
    file: { publicURL }
 } }) => (
    <Layout>
        <div className="finally">
            <div className="finally__content">
                <div className="finally__description">
                    <p>Вы заверишили тестирование.</p>
                    <p>Благодарим за потраченное время!</p>
                </div>
                <div className="finally__icon">
                    <img src={publicURL} alt="robot" />
                </div>
            </div>
        </div>
    </Layout>
);