/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import './bootstrap.min.css';
import Navbar from '../components/Global/navbar';
// import { useStaticQuery, graphql } from "gatsby"
// import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
 return(
   <React.Fragment>
     <Navbar />
     {children}
   </React.Fragment>
 )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
