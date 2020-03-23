/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    const paths = graphql(`
        query {
            allContentfulPath(filter: {node_locale: {eq: "en-US"}}) {
                nodes {
                    name
                }
            }
        }
    `).then(({ data }) => {
        const listPath = data.allContentfulPath.nodes;
        listPath.forEach(({ name }) => {
            const formattedName = name.toLowerCase();
            createPage({
                path: formattedName,
                component: path.resolve(`./src/components/Section/index.js`),
                context: {
                    name
                }
            });
        });
    });

    return paths;
};