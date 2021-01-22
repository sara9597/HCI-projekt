import React from "react"
import styles from "./style.module.css"

const AboutUs = () => (
  <section className={styles.about}>
    <div>
      Trying to find the perfect musician for your event?
      <strong> MusicAgent</strong> is the right place for you. <br /> Connect
      with over <strong> 1,000 </strong>musicians with just a few clicks.
      <br /> MusicAgent has been connecting clients and musicians since 2020.{" "}
      <br />
      <br />
      <br />
      If you are a musician and want to be a part of our community
      <span onClick ={() => window.open("/join", "_self")}> JOIN </span> us!
    </div>
  </section>
)

export default AboutUs
