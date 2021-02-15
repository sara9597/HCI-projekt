import React from "react"
import styles from "./style.module.css"


const ImageParagraph = ({ image, title, text }) => {

return(
  
  <section className={styles.imageParagraph}>
    <div className={styles.imageHalf}>
      {image}
      <div className={styles.articleHalf}>
        <article>
          <h2>{title}</h2>
          <p>{text}</p>
          <button className={styles.button1}>View profile</button>
        </article>
      </div>
    </div>
  </section>

   
);
}

export default ImageParagraph
