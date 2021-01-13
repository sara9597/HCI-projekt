import React from "react"

import Logo from "../Logo"
import Navigation from "../Navigation"

import styles from "./style.module.css"
import LoginButton from "../LoginButton"

const NavigationHeader = ({ activeTab }) => (
  <section className={styles.navigationHeader}>
    <Logo />
    <Navigation activeTab={activeTab} />
    <LoginButton />
  </section>
)

export default NavigationHeader
