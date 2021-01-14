import React from "react"
import styles from "./style.module.css"

const ImageParagraph = ({ image, title, text }) => (
  <section className={styles.imageParagraph}>
    <div className={styles.imageHalf}>
      {image}
      <div className={styles.articleHalf}>
        <article>
          <h2>{title}</h2>
          <p>{text}</p>
        </article>
      </div>
    </div>
  </section>
)

export default ImageParagraph
