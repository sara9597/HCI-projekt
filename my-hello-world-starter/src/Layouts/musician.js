import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import styles from "./musician.module.css"
import HeaderFooterLayout from "../layouts/headerFooter"

const MusicianPost = ({ pageContext }) => {
  const { body, title, image, next, prev } = pageContext

  return (
    <HeaderFooterLayout>
      <main className={styles.container}>
        <header className={!prev || !next ? styles.headerTwo : ""}>
          {prev && (
            <Link to={`/post/${prev.slug}`}>
              <span>Previous</span>
            </Link>
          )}
          <h2>{title}</h2>
          {next && (
            <Link to={`/post/${next.slug}`}>
              <span>Next</span>
            </Link>
          )}
        </header>
        <Img fixed={image.fixed} />
        <article>{renderRichText(body)}</article>
      </main>
    </HeaderFooterLayout>
  )
}

export default MusicianPost
