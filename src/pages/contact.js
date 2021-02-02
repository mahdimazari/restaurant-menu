import React from "react"
// import { Link } from "gatsby"
// import { IconName } from "react-icons/gi";
// import { FaBeer } from 'react-icons/fa';
import Layout from "../components/layout"
import img from "../images/contactBcg.jpeg"
import SEO from "../components/seo"
import {MainHeader} from '../utils/Header'
const ContactPage = () => (
  <Layout>
    <SEO title="Home" />
   
    <MainHeader Header img={img}> hello from Contact</MainHeader> 
  </Layout>
)

export default ContactPage
