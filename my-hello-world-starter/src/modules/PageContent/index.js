import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styles from "./style.module.css"
import Carousel from "react-elastic-carousel"

const breakPoints = [
  { width: 550, itemsToShow: 1 },
  { width: 768, itemsToShow: 2 },
  { width: 1100, itemsToShow: 3 }
]

const PageContent = () => {
  const data = useStaticQuery(graphql`
    query {
      myQuery: allContentfulMusicianBox(skip: 0, limit: 4) {
        nodes {
          internal {
            content
          }
          title
          description
          slug
          updatedAt
          image {
            fixed(width: 280, height: 200) {
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
      <h1 className={styles.title}>
        <span>OUR NEWEST MUSICIANS</span>
      </h1>
      <div className={styles.containerContent}>
        <section className={styles.pageContent}>
          <ul className={styles.list}>
            <Carousel breakPoints={breakPoints}>
              {data.myQuery.nodes.map(node => {
                return (
                  <Link to={`/post/${node.slug}`} key={node.slug}>
                    <section className={styles.imageParagraph}>
                      <li key={node.title}>
                        <div className={styles.imageHalf}>
                          <Img fixed={node.image.fixed} />
                          <div className={styles.articleHalf}>
                            <article>
                              <h2>{node.title}</h2>
                              <p>{node.description}</p>
                              <button className={styles.button1}>
                                View profile
                              </button>
                            </article>
                          </div>
                        </div>
                        <span>{node.internal.content}</span>
                      </li>
                    </section>
                  </Link>
                )
              })}
            </Carousel>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default PageContent
