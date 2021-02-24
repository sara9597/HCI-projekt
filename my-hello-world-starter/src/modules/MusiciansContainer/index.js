import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import styles from "./style.module.css"
import Pages from "../../components/Pages"

import {
  FormLabel,
  FormControl,
  Checkbox,
  FormGroup,
  FormControlLabel
} from "@material-ui/core"

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
          genre
          updatedAt
          image {
            fluid(maxWidth: 300, maxHeight: 300, quality: 100) {
              src
            }
          }
        }
      }
    }
  `)

  const movie = [
    { genre: "Pop" },
    { genre: "Rock" },
    { genre: "House" },
    { genre: "Jazz" },
    { genre: "Funk" },
    { genre: "Classic" }
  ]
  const allMusicians = data.myQuery.nodes

  const [state, setState] = useState({
    filteredMusicians: [],
    query: "",
    myQuery: ""
  })

  const [genre, setGenre] = useState([])

  const handleChange = e => {
    if (e.target.checked) {
      setGenre([...genre, e.target.value])
    } else {
      setGenre(genre.filter(id => id !== e.target.value))
    }
  }

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

  const posts =
    genre.length === 0 && !state.query
      ? allMusicians
      : state.query
      ? state.filteredMusicians
      : allMusicians.filter(movie =>
          genre.some(category => [movie.genre].flat().includes(category))
        )

  return (
    <>
      <section className={styles.imageParagraph}>
        {" "}
        <div className={styles.filters}>
          <div className={styles.search}>
            <input
              className={styles.input}
              type="text"
              aria-label="Search"
              placeholder="Search musicians..."
              value={state.query}
              onChange={handleInputChange}
            />{" "}
          </div>{" "}
          <div className={styles.form}>
            <FormControl
              style={{
                display: "flex",
                flexDirection: "column",
                paddingLeft: "0px"
              }}
            >
              <FormLabel
                className={styles.formLabel}
                style={{ paddingLeft: "7.3vw", fontSize: "20px" }}
              >
                <strong>Filter By Genre:</strong>
              </FormLabel>
              <FormGroup className={styles.formGroup}>
                {movie.map(movie => (
                  <FormControlLabel
                    key={movie.genre}
                    control={
                      <Checkbox
                        onChange={handleChange}
                        style={{
                          color: "#8f6a43",
                          
                        }}
                        size="medium"
                      />
                    }
                    label={movie.genre}
                    value={movie.genre}
                  />
                ))}
              </FormGroup>
            </FormControl>
          </div>
        </div>
        <ul className={styles.list}>
          {posts.map(node => {
            return (
              <Link to={`/post/${node.slug}`} key={node.slug}>
                <section className={styles.imageParagraph}>
                  <li key={node.title}>
                    <div className={styles.imageHalf}>
                      <img src={node.image.fluid.src} />
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
        <Pages activeTab="1" />
      </section>
    </>
  )
}

export default MusiciansContainer
