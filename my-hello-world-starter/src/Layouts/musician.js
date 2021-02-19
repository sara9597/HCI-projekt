import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import styles from "./musician.module.css"
import HeaderFooterLayout from "../layouts/headerFooter"
import { style } from "@material-ui/system"
import CoverImage from "../components/Images/CoverImage"

const MusicianPost = ({ pageContext }) => {
  const { body, title, description, image, next, prev } = pageContext

  return (
    <HeaderFooterLayout>
      {" "}
      <div className = {styles.coverImage} style={{ background: "rgba(91, 11, 11, 0.35) linear- gradient(360deg, rgb(255, 255, 255) 0 %, rgba(255, 255, 255, 0) 7.66 %) repeat scroll 0% 0%"}}>
      <CoverImage />
      </div>
      <main className={styles.container}>
        <header className={!prev || !next ? styles.headerTwo : ""}>
          {prev && (
            <Link to={`/post/${prev.slug}`}>
              <span style={{ float: "left" }}>Previous</span>
            </Link>
          )}

          <h2>{title}</h2>

          {next && (
            <Link to={`/post/${next.slug}`}>
              <span style={{ float: "right" }}>Next</span>
            </Link>
          )}
        </header>

        <article className={styles.text}>{renderRichText(body)}</article>
      </main>
    </HeaderFooterLayout>
  )
}

export default MusicianPost
