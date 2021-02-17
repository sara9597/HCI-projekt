import React from "react"
import Logo from "../../components/Logo"
import Navigation from "../../components/Navigation"
import styles from "./style.module.css"
import LoginButton from "../../components/LoginButton"
import MenuIcon from "@material-ui/icons/Menu"

const NavigationHeader = ({ activeTab }) => (
  <section className={styles.navigationHeader}>
    <div className={styles.menuIcon}><MenuIcon /></div>
    <Logo />
    <Navigation activeTab={activeTab} />
    <LoginButton />
  </section>
)

export default NavigationHeader
