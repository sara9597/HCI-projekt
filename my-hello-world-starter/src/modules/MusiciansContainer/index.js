import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styles from "./style.module.css"

const MusiciansContainer = () => {
  const data = useStaticQuery(graphql`
    query {
      myQuery: allContentfulMusicianBox {
        nodes {
          internal {
            content
          }

          title
          description
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
    <section className={styles.imageParagraph}>
      <ul className={styles.list}>
        {data.myQuery.nodes.map(node => {
          return (
            <Link to={`/post/${node.slug}`}>
              <section className={styles.imageParagraph}>
                <li>
                  <div className={styles.imageHalf}>
                    <Img fixed={node.image.fixed} />
                    <div className={styles.articleHalf}>
                      <article>
                        <h2>{node.title}</h2>
                        <p>{node.description}</p>
                        <button className={styles.button1}>View profile</button>
                      </article>
                    </div>
                  </div>
                  <span>{node.internal.content}</span>
                </li>
              </section>
            </Link>
          )
        })}
      </ul>
    </section>
  )
}

export default MusiciansContainer
