import React from "react"

import HeaderFooterLayout from "../layouts/headerFooter"
import TitlePage from "../modules/TitlePage"
import AboutUs from "../components/AboutUs"
import PageContent from "../modules/PageContent"
import BlogHome from "../modules/BlogHome"

const IndexPage = () => (
  <HeaderFooterLayout activeTab="HOME">
    <TitlePage />
    <AboutUs />
    <PageContent />
    <BlogHome />
  </HeaderFooterLayout>
)

export default IndexPage
