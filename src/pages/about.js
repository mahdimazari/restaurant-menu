import React from "react"
// import { Link } from "gatsby"
// import { IconName } from "react-icons/gi";
// import { FaBeer } from 'react-icons/fa';
import Layout from "../components/layout"
import img from "../images/aboutBcg.jpeg"
import SEO from "../components/seo"
import {PageHeader} from '../utils/Header'
import { Banner } from "../utils"

const AboutPage = () => (
  <Layout>
    <SEO title="Home" />
    
    <PageHeader Header img={img}> <Banner title="about us" subtitle="a little about us" /> </PageHeader> 
  </Layout>
)

export default AboutPage
