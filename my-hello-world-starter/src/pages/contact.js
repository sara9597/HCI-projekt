import React from "react"
import HeaderFooterLayout from "../layouts/headerFooter"
import ContactSeparator from "../modules/ContactSeparator"
import ContactForm from "../modules/ContactForm"

const ContactPage = () => (
    <HeaderFooterLayout activeTab="CONTACT">
        <ContactSeparator />
        <ContactForm />
    </HeaderFooterLayout>
)

export default ContactPage