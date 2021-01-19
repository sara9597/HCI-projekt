import React from "react"
import styles from "./style.module.css"

const LoginButton = () => (
  <div className={styles.button}>
    <button className={styles.button1} onClick={() => window.open("login", "_self")}>
      <section>LOGIN</section>
    </button>
  </div>
)

export default LoginButton
