import React from "react"

import HeaderFooterLayout from "../layouts/headerFooter"
import TitlePage from "../modules/TitlePage"
import AboutUs from "../components/AboutUs"
import PageContent from "../modules/PageContent"

const IndexPage = () => (
  <HeaderFooterLayout activeTab="HOME">
    <TitlePage />
    <AboutUs />
    <PageContent />
  </HeaderFooterLayout>
)

export default IndexPage
