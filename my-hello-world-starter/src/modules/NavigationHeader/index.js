import React from "react"

import Logo from "../components/Logo"
import Navigation from "../Navigation"

import styles from "./style.module.css"
import LoginButton from "../components/LoginButton"

const NavigationHeader = ({ activeTab }) => (
  <section className={styles.navigationHeader}>
    <Logo />
    <Navigation activeTab={activeTab} />
    <LoginButton />
  </section>
)

export default NavigationHeader
