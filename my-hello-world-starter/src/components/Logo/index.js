import React from "react"
import styles from "./style.module.css"

const Logo = () => (
  <div className={styles.logo} onClick={() => window.open("/", "_self")}>
    <img
      src="https://github.com/sara9597/HCI-projekt/blob/master/my-hello-world-starter/src/images/Logo.png?raw=true"
      className={styles.icon}
    ></img>
  </div>
)

export default Logo
