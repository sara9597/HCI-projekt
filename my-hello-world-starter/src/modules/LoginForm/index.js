import React from "react"

import styles from "./style.module.css"
import style from "../../components/LoginButton/style.module.css"

const LoginForm = () => (
  <main className={styles.loginForm}>
    <section className={styles.form}>
      <form>
        <div>
          <label htmlFor="name">
            <strong>Email</strong>
          </label>
          <input name="name" type="text" placeholder="Type here..." />
        </div>
        <div>
          <label htmlFor="name">
            <strong>Password</strong>
          </label>
          <input name="email" type="email" placeholder="Type here..." />
        </div>
        <div className={style.button}>
          <button className={styles.button1}>
            <section>LOGIN</section>
          </button>
        </div>

        <p className={styles.join}>
          No account?{" "}
          <strong className={styles.join1} onClick={() => window.open("/", "_self")}>JOIN </strong> us!
        </p>
      </form>
    </section>
  </main>
)

export default LoginForm
