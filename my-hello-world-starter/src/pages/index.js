import React from "react"

import HeaderFooterLayout from "../layouts/headerFooter"
import TitlePage from "../modules/TitlePage"
import AboutUs from "../components/AboutUs"
import PageContent from "../modules/PageContent"
import Blog from "../modules/Blog"

const IndexPage = () => (
  <HeaderFooterLayout activeTab="HOME">
    <TitlePage />
    <AboutUs />
    <PageContent />
    <Blog />
  </HeaderFooterLayout>
)

export default IndexPage
