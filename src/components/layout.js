/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React from "react"
import PropTypes from "prop-types"
import SEO from './SEO';

import Header from "./Header"

const Layout = ({ children }) => {
    return (
        <div className="app">
            <SEO title="Interview" />
            <Header />
            <div className="app__content">
                <main>{children}</main>
            </div>
        </div>
    )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
