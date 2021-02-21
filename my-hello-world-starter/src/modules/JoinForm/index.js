import React from "react"

import styles from "./style.module.css"
import style from "../../components/LoginButton/style.module.css"
import Join from "../../components/Images/Join"
const JoinForm = () => (
  <main className={styles.contactForm}>
    <div className={styles.box}>
      <section className={styles.form}>
        <h2>
          <strong>JOIN US</strong>
        </h2>
        <form>
          <div>
            <input name="name" type="text" placeholder="Name*" />
          </div>
          <div>
            <input
              name="bandName"
              type="text"
              placeholder="Band/musician name*"
            />
          </div>
          <div>
            <input name="email" type="email" placeholder="Email*" />
          </div>
          <div>
            <input name="phone" type="tel" placeholder="Phone*" />
          </div>
          <div>
            <input name="promi" type="text" placeholder="Link to promo*" />
          </div>
          <div className={styles.message}>
            <input name="message" type="text" placeholder="Message" />
          </div>
          <div className={styles.button}>
            <button className={styles.button1}>
              <section>Apply now</section>
            </button>
          </div>
        </form>
      </section>

      <div className={styles.image}>
        <Join />
      </div>
    </div>
  </main>
)

export default JoinForm
