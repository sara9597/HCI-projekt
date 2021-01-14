import React from "react"

import HeaderFooterLayout from "../layouts/headerFooter"
import TitlePage from "../modules/TitlePage"
import AboutUs from "../components/AboutUs"

const IndexPage = () => (
  <HeaderFooterLayout activeTab="Home">
    <TitlePage />
    <AboutUs />
  </HeaderFooterLayout>
)

export default IndexPage
