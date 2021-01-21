import React from "react"
import styles from "./style.module.css"

const BlogParagraph = ({ image, title, text }) => (
  <div className={styles.blogParagraph}>
    <div className={styles.imgHalf}>
      <section className={styles.img}>{image}</section>
      <div className={styles.artHalf}>
        <article>
          <h2>{title}</h2>
          <p>{text}</p>
          <section>
            <button className={styles.button1}>See more</button>
          </section>
        </article>
      </div>
    </div>
  </div>
)

export default BlogParagraph