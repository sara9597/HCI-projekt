import React from "react"
import { Link } from "gatsby"
import CoverImage from "../../components/Images/CoverImage"
import styles from "./style.module.css"

const TitleImage = () => (
  <section className={styles.titleImage}>
  
    <CoverImage/>
      <Link to="/musicians">
         <button id="botun">BOOK A MUSICIAN</button>
      </Link>
  </section>
)

export default TitleImage
