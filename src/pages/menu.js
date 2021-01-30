import React from "react"
// import { Link } from "gatsby"
// import { IconName } from "react-icons/gi";
import { FaBeer } from 'react-icons/fa';
import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const MenuPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <h3> This is Menu page <FaBeer /> </h3>

  </Layout>
)

export default MenuPage
