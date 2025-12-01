import * as React from "react"
import "./full-day-fishing.scss"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import FullDayReefFishing from "./components/full-day-fishing"

const FullDayReefFishingPage = () => (
  <Layout>
    <Seo title="Full Day Reef Fishing" />
    <FullDayReefFishing />
  </Layout>
)

export default FullDayReefFishingPage