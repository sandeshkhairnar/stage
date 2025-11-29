import * as React from "react"
import "./mexico-rocks-sail.scss"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import MexicoRocksSail from "./components/mexico-rocks-sail"

const MexicoRocksSailPage = () => (
  <Layout>
    <Seo title="Mexico Rocks Sail" />
    <MexicoRocksSail />
  </Layout>
)

export default MexicoRocksSailPage