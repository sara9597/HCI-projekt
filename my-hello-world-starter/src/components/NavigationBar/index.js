import React from "react"
import { navs as navTabs } from "../../constants/const"
import styles from "./style.module.css"
import { Link } from "gatsby"

//const navTabs = ["HOME", "MUSICIANS", "BLOG", "CONTACT", "JOIN"]

const NavigationBar = ({ activeTab, useThisStyle }) => (
<<<<<<< HEAD
  <nav className={styles[useThisStyle || 'navigationBar']}>
    {navTabs.map(({ tab, to }) => (
      <Link to={to} >
        <li className={tab === activeTab ? styles.active : ''}>{tab}</li>
      </Link>)
    )}
=======
  
>>>>>>> b578203f6106473e3081d18962db8bae3f43421e
  </nav>
)

export default NavigationBar
