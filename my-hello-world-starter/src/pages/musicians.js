import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import MusiciansPageContent from "../components/MusiciansPageContent"

const MusiciansPage = () => (
    <HeaderFooterLayout activeTab="MUSICIANS">
    <MusiciansPageContent />
    </HeaderFooterLayout>
)

export default MusiciansPage