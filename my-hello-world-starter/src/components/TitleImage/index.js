import React from "react"

import CoverImage from "../../components/Images/CoverImage"
import styles from "./style.module.css"

const TitleImage = () => (
  <section className={styles.titleImage}>
  
    <CoverImage/>
      <button>
        <span>BOOK A MUSICIAN</span>
      </button>
    
  </section>
)

export default TitleImage
