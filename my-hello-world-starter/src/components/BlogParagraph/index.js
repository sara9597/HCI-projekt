// import React from "react"
// import styles from "./style.module.css"

// const BlogParagraph = ({ image, title, text }) => (
//   <div className={styles.imageParagraph}>
//     <div className={styles.imageHalf}>
//       {image}
//       <div className={styles.articleHalf}>
//         <article>
//           <h2>{title}</h2>
//           <p>{text}</p>
//           <button className={styles.button1}>See more</button>
//         </article>
//       </div>
//     </div>
//   </div>
// )

// export default BlogParagraph

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
          <button className={styles.button1}>See more</button>
        </article>
      </div>
    </div>
  </div>
)

export default BlogParagraph