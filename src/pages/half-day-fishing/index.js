import * as React from "react"
import "./half-day-fishing.scss"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import HalfDayReefFishing from "./components/half-day-fishing"

const HalfDayReefFishingPage = () => (
  <Layout>
    <Seo title="Half Day Reef Fishing" />
    <HalfDayReefFishing />
  </Layout>
)

export default HalfDayReefFishingPage