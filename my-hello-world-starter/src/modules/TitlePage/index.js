import React from "react"

import TitleImage from "../../components/TitleImage"
import CoverImage from "../../components/Images/CoverImage"
import styles from "./style.module.css"

const TitlePage = () => (
  <section className={styles.titlePage}>
    <TitleImage image = {<CoverImage />} />
  </section>
)

export default TitlePage
