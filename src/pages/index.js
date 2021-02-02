import React from "react"
// import { Link } from "gatsby"
// import { IconName } from "react-icons/gi";
// import { FaBeer } from 'react-icons/fa';
import Layout from "../components/layout"
import img from "../images/homeBcg.jpeg"
import QuickInfo from '../components/HomePageComponents/QuickInfo'
import SEO from "../components/seo"
import { MainHeader, Banner, BannerButton } from '../utils';
const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
 <MainHeader img={img}> <Banner title="Bluetree" subtitle="la bonne bouffe dans le bon endroit"> 
 <BannerButton style={{margin: '2rem auto'}}>Menu</BannerButton>
 </Banner>
 </MainHeader> 
 <QuickInfo />
  </Layout>
)

export default IndexPage
