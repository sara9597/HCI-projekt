import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"

import ContactForm from "../modules/ContactForm"

const ContactPage = () => (
    <HeaderFooterLayout activeTab="CONTACT">
 
        <ContactForm />
    </HeaderFooterLayout>
)

export default ContactPage