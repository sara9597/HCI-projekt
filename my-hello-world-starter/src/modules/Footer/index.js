import React from "react"
import styles from "./style.module.css"

const Footer = () => (
  <footer className={styles.footer}>
    <ul className={styles.left}>
      <li className={styles.rights}>©2020 by MusicAgent </li>
      <li className={styles.logo}>
      <img
      src="https://github.com/sara9597/HCI-projekt/blob/master/my-hello-world-starter/src/images/Logo.png?raw=true"
      className={styles.icon}
      onClick={() => window.open("/", "_self")}
    ></img>
      </li>
    </ul>
    <ul className={styles.address}>
      <li className={styles.title}>CONTACT:</li>
      <li>musicagent@gmail.com</li>
      <li className={styles.phone}>234-432</li>
    </ul>
    <ul className={styles.follow}>
      <li>
        <div>
          <img
            src="https://github.com/sara9597/HCI-projekt/blob/master/my-hello-world-starter/src/images/instagram.png?raw=true"
            className={styles.icons}
            alt="instagram"
          ></img>
          <img
            src="https://github.com/sara9597/HCI-projekt/blob/master/my-hello-world-starter/src/images/facebook.png?raw=true"
            className={styles.icons}
            alt="facebook"
          ></img>
          <img
            src="https://github.com/sara9597/HCI-projekt/blob/master/my-hello-world-starter/src/images/twitter.png?raw=true"
            className={styles.icons}
            alt="twitter"
          ></img>
          
        </div>
      </li>
    </ul>
  </footer>
)

export default Footer
