import React from "react"
import Logo from "../../components/Logo"
import styles from "./style.module.css"

const Footer = () => (
  <footer className={styles.footer}>
    <ul className={styles.left}>
      <li className={styles.rights}>©2020 by MusicAgent </li>
      <li className={styles.logo}>
        {" "}
        <Logo />{" "}
      </li>
    </ul>
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
