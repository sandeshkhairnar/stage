import * as React from "react"
import "./bacalar-chico-reserve.scss"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import BacalarChicoReserve from "./components/bacalar-chico-reserve"

const BacalarChicoReservePage = () => (
  <Layout>
    <Seo title="Bacalar Chico Reserve" />
    <BacalarChicoReserve />
  </Layout>
)

export default BacalarChicoReservePage