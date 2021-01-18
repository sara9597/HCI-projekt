import React from "react"

import styles from "./style.module.css"

const navTabs = ["HOME", "MUSICIANS", "BLOG", "CONTACT", "JOIN"]

const NavigationBar = ({ activeTab, useThisStyle }) => (
  <nav className={styles[useThisStyle || "navigationBar"]}>
    {navTabs.map((tab, index) => (
      <li key={index} className={tab === activeTab ? styles.active : ""}>{tab}</li>
    ))}
  </nav>
)

export default NavigationBar
