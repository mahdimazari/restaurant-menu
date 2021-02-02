import React from "react"
// import { Link } from "gatsby"
// import { IconName } from "react-icons/gi";
// import { FaBeer } from 'react-icons/fa';
import Layout from "../components/layout"
import img from "../images/menuBcg.jpeg"
import SEO from "../components/seo"
import {MainHeader} from '../utils/Header'
import { Banner } from "../utils"

const MenuPage = () => (
  <Layout>
    <SEO title="Home" />
    <MainHeader Header img={img}> <Banner title="menu" subtitle= {` let's dig in `} /> </MainHeader> 
  </Layout>
)

export default MenuPage
