import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import styles from "./style.module.css"

const Footer = () => (
  <footer className={styles.footer}>
    <ul className={styles.address}>
      <li className={styles.title}>CONTACT:</li>
      <li>musicagent@gmail.com</li>
      <li className={styles.phone}>234-432</li>
    </ul>
    <ul className={styles.follow}>
      <li>Follow us:</li>
           
    </ul> 
  </footer>
)

export default Footer
