import React, { useState } from "react"
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

  const allMusicians = data.myQuery.nodes

  const [state, setState] = useState({
    filteredMusicians: [],
    query: ""
  })

  const handleInputChange = event => {
    const query = event.target.value
    const filteredMusicians = allMusicians.filter(post => {
      const { title, description } = post
      return (
        description.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase())
      )
    })

    setState({
      query,
      filteredMusicians
    })
  }

  const posts = data.myQuery.nodes ? state.filteredMusicians : allMusicians

  return (
    <>
      <div className={styles.search}>
        <input
          className={styles.input}
          type="text"
          aria-label="Search"
          placeholder="Search musicians"
          value={state.query}
          onChange={handleInputChange}
        />{" "}
      </div>
      <section className={styles.imageParagraph}>
        <ul className={styles.list}>
          {posts.map(node => {
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
        </ul>
      </section>
    </>
  )
}

export default MusiciansContainer
