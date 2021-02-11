import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import MusiciansContainer from "../modules/MusiciansContainer"
import Pages from "../components/Pages"

const MusiciansPage = () => (
    <HeaderFooterLayout activeTab="MUSICIANS">
    <MusiciansContainer />
    <Pages activeTab ="1"/>
    </HeaderFooterLayout>
)

export default MusiciansPage