import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'

 
const BlogHome = () => {
    const data = useStaticQuery(graphql`
    query {
      myQuery: allContentfulBlogPost(skip: 0, limit: 2) {
        nodes {
          description {
            internal {
              content
            }
          }
          body {
            raw
          }
          title
          slug
          updatedAt
          image {
            fixed(width: 360, height: 300) {
              src
              srcSet
              srcSetWebp
              srcWebp
              width
              height
              base64
              aspectRatio
            }
          }
        }
      }
    }
  `)

  return (
<div className={styles.container}>
 <h1 className={styles.title}>BLOG</h1>
      <ul className={styles.list}>
        {data.myQuery.nodes.map(node => {
          return (
            <Link to={`/post/${node.slug}`}>
              <div className={styles.blogParagraph}>
                  <div className={styles.imgHalf}>
                    <Img fixed={node.image.fixed} />
                    <div className={styles.artHalf}>
                      <article>
                        <h2>{node.title}</h2>
                        <p>{node.description.internal.content}</p>
                        <section>
                             <button className={styles.button1}>See more</button>
                        </section>
                      </article>
                    </div>
                  </div>
              </div>
            </Link>
          )
        })}
      </ul>
</div>
  )
}
export default BlogHome