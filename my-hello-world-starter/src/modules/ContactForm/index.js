import React from "react"

import styles from "./style.module.css"
import style from "../../components/LoginButton/style.module.css"
import StyledBackgroundSection from "../../components/Images/ContactImage"

const ContactForm = () => (
  <main className={styles.contactForm}>
    
    <div className={styles.box}>
      <div className="contactBox">
        <section className={styles.contactInfo}>
          <h2 className={styles.title}>CONTACT US</h2>
          <p> 2100, Split Croatia</p>
          <p>musicagent@gmail.com</p>
          <p>123-456-7890</p>
        </section>
      </div>
      <section className={styles.form}>
        <form>
          <div>
            <input name="name" type="text" placeholder="Name*" />
          </div>
          <div>
            <input name="email" type="email" placeholder="Email*" />
          </div>
          <div>
            <input name="phone" type="tel" placeholder="Phone*" />
          </div>
          <div className={styles.message}>
            <input name="message" type="text" placeholder="Message" />
          </div>
          <div className={style.button}>
            <button className={style.button1}>
              <section>Send</section>
            </button>
          </div>
        </form>
      </section>
    </div>
  </main>
)

export default ContactForm
