// import React from "react"
// import { renderRichText } from "gatsby-source-contentful/rich-text"
// import Img from "gatsby-image"
// import { Link } from "gatsby"

// import styles from "./musician.module.css"
// import HeaderFooterLayout from "../layouts/headerFooter"

// const MusicianPost = ({ pageContext }) => {
//   const { title, image, next, prev } = pageContext

//   return (
//     <HeaderFooterLayout>
//       <main className={styles.container}>
//         <header className={!prev || !next ? styles.headerTwo : ""}>
//           {prev && (
//             <Link to={`/musicians/${prev.slug}`}>
//               <span>Previous</span>
//             </Link>
//           )}
//           <h2>{title}</h2>
//           {next && (
//             <Link to={`/musicians/${next.slug}`}>
//               <span>Next</span>
//             </Link>
//           )}
//         </header>
//         <Img fixed={image.fixed} />
//       </main>
//     </HeaderFooterLayout>
//   )
// }

// export default MusicianPost
