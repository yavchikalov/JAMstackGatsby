import { Link, StaticQuery, graphql } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"

const Header = () => (
    <StaticQuery
      query={graphql`
        {
          allFile(filter: { name: { eq: "logo" } }) {
            edges {
              node {
                publicURL
              }
            }
          }
        }
      `}
      render={({
        allFile: {
          edges: [
            {
              node: { publicURL }
            }
          ]
        }
      }) => (
        <header className="header">
          <Link to="/">
            <img src={publicURL} alt="logo" className="header__logo" />
          </Link>
        </header>
      )}
    />
)

export default Header;
