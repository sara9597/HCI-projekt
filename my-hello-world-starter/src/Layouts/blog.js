import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import Img from "gatsby-image"
import { Link } from "gatsby"

import styles from "./blog.module.css"
import HeaderFooterLayout from "../layouts/headerFooter"

const BlogPost = ({ pageContext }) => {
  const { body, title, image, next, prev } = pageContext

  return (
    <HeaderFooterLayout>
      <main className={styles.container}>
        <header>
          {prev && (
            <Link
              to={`/post/${prev.slug}`}
              style={{
                position: "absolute",
                top: "50%",
                left: "0",
                transform: "translate(0, -50%)",
              }}
              className="active"
            >
              <span>Previous</span>
            </Link>
          )}
          <h2 style={{ margin: "0" }}>{title}</h2>
          {next && (
            <Link
              to={`/post/${next.slug}`}
              style={{
                position: "absolute",
                top: "50%",
                right: "0",
                transform: "translate(0, -50%)",
              }}
              className="active1"
            >
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

export default BlogPost
