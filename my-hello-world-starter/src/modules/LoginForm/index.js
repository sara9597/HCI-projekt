import React, { useState } from "react"
import { navigate } from "gatsby"

import styles from "./style.module.css"
import style from "../../components/LoginButton/style.module.css"
import { myLocalStorage } from "../../pages/helper"

const users = [
  {
    email: "sara@gmail.com",
    password: "123"
  },
  {
    email: "karla@gmail.com",
    password: "123"
  }
]

const LoginForm = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  const submit = () => {
    setError(false)
    setLoading(true)
    setTimeout(() => {
      const loginSuccessful = !!users.find(
        user => user.email === email && user.password === password
      )

      setLoading(false)
      if (loginSuccessful) {
        myLocalStorage.setItem("loggedIn", email)

        setError("Success")
        return navigate("/musicians")
      }

      setError("Wrong email or password")
    }, 2000)
  }

  return (
    <main className={styles.loginForm}>
      <section className={styles.form}>
        <form>
          <div>
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              name="email"
              onChange={e => setEmail(e.target.value)}
              type="text"
              placeholder="Type here..."
            />
          </div>
          <div>
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Type here..."
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <p
            className={`${styles[error !== "Success" ? "error" : "success"]} ${
              error ? styles.show : ""
            }`}
          >
            {error}
          </p>
          <div className={style.button}>
            <button
              className={styles.button1}
              type="button"
              onClick={() => submit()}
            >
              {loading ? (
                <section>Loading...</section>
              ) : (
                <section>LOGIN</section>
              )}
            </button>
          </div>

          <p className={styles.join}>
            No account?{" "}
            <strong
              className={styles.join1}
              onClick={() => window.open("/join", "_self")}
            >
              JOIN{" "}
            </strong>{" "}
            us!
          </p>
        </form>
      </section>
    </main>
  )
}

export default LoginForm
