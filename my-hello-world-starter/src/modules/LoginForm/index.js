import React, { useState } from 'react'
import { navigate } from 'gatsby'

import styles from "./style.module.css"
import style from "../../components/LoginButton/style.module.css"

const users = [
  {
    email: "mate",
    password: "123"
  },
  {
    email: "jure",
    password: "123"
  },
]



const LoginForm = () => {

const [email, setemail] = useState()
const [password, setPassword] = useState()
const [error, setError] = useState(false)
const [loading, setLoading] = useState(false)


const submit = () => {
  setError(false)
  setLoading(true)
  setTimeout(() => {
    const loginSuccessful = !!users.find(user => user.email === email && user.password === password)
    setLoading(false)
    if (loginSuccessful) {
      localStorage.setItem("loggedIn", email)
      setError('Success')
      return navigate('/')
    }
    setError('Wrong email or password')
  }, 2000)
}
 return(
   <main className={styles.loginForm} onKeyDown={key => {
     if (key.key === "Enter")
       return submit()
   }}>
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
)}

export default LoginForm
