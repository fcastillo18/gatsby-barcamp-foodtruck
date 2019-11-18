import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaBicycle } from "react-icons/fa"
// import { GiFoodTruck } from "react-icons/gi"
import BackgroundSection from "../components/Globals/BackgroundSection"
import Info from "../components/Home/Info"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="BarCamp Food Truck"
      styleClass="default-background"
    />
    <Info />
    {/* <GiFoodTruck></GiFoodTruck> */}
  </Layout>
)

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
