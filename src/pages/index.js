import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaBicycle } from "react-icons/fa"
import { GiFoodTruck } from "react-icons/gi"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <GiFoodTruck></GiFoodTruck>
  </Layout>
)

export default IndexPage
