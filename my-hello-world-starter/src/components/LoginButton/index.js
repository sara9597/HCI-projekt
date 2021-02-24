import React from "react"
import styles from "./style.module.css"
import { Link } from "gatsby"
import { myLocalStorage } from "../../helper"

const loggedIn = () => !!myLocalStorage.getItem("loggedIn")

const LoginButton = () => (
  <nav>
    <div className={styles.button}>
      <button className={styles.button1}>
        <Link to={"/login"}>
          <section
            onClick={
              loggedIn()
                ? () => myLocalStorage.removeItem("loggedIn")
                : () => {}
            }
            role="button"
            tabIndex={0}
            onKeyDown={
              loggedIn()
                ? () => myLocalStorage.removeItem("loggedIn")
                : () => {}
            }
          >
            {loggedIn() ? "LOGOUT" : "LOGIN"}
          </section>
        </Link>
        {loggedIn() && <Link to={"/join"}></Link>}
      </button>
    </div>
  </nav>
)

export default LoginButton
