import React from 'react'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import styles from './style.module.css'
import Pages from "../Pages";
 
const BlogPageContent = () => {
    const data = useStaticQuery(graphql`
    query {
      myQuery: allContentfulBlogPost {
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
            fixed(width: 380, height: 300) {
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
    <Pages activeTab = '1'/>
</div>
  )
}
export default BlogPageContent
