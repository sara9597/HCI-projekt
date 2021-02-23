import React, { useState } from "react"

import { navigate } from "gatsby"

import Img from "gatsby-image"
import { Link } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import styles from "./musician.module.css"
import HeaderFooterLayout from "../layouts/headerFooter"
import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"

const MusicianPost = ({ pageContext }) => {
  const { body, title, description, image, next, prev } = pageContext
  const [user, setUser] = useState(localStorage.getItem("loggedIn"))

  return (
    <HeaderFooterLayout>
      {" "}
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
        <Img fixed={image.fixed} />
        <article className={styles.text}>{renderRichText(body)}</article>
        <Popup
          trigger={
            <button className={styles.button1}>
              <strong>Book musician</strong>
            </button>
          }
          modal
          nested
        >
          {close => (
            <div className={styles.modal}>
              <button className={styles.close} onClick={close}>
                &times;
              </button>
              <div className={styles.header}> {title} </div>
              <div className={styles.content}>
                <span>Do you want to book {title}? </span>
              </div>
              <div className={styles.actions}>
                <Popup
                  trigger={<button className={styles.button2}> Book </button>}
                  position="top center"
                  nested
                >
                  {user ? (
                    <div className={styles.modal}>
                      <button className={styles.close} onClick={close}>
                        &times;
                      </button>
                      <div className={styles.header}> {title} </div>
                      <div className={styles.content}>
                        <span>Are you sure you want to book {title}? </span>
                      </div>
                      <div className={styles.actions}>
                        <Popup
                          trigger={
                            <button
                              className={styles.button2}
                              style={{ paddingBottom: "2px" }}
                            >
                              {" "}
                              Yes{" "}
                            </button>
                          }
                          position="top center"
                          nested
                        ></Popup>
                        <button
                          className={styles.button2}
                          onClick={() => {
                            console.log("modal closed ")
                            close()
                          }}
                        >
                          No
                        </button>
                      </div>
                      <span className={styles.content}>
                        Find out free dates via phone: 234-432 or email:
                        musicagent@gmail.com
                      </span>
                    </div>
                  ) : (
                    "Please login first"
                  )}
                </Popup>

                <button
                  className={styles.button2}
                  onClick={() => {
                    console.log("modal closed ")
                    close()
                  }}
                >
                  Close
                </button>
              </div>
              <span className={styles.content}>
                Find out free dates via phone: 234-432 or email:
                musicagent@gmail.com
              </span>
            </div>
          )}
        </Popup>
      </main>
    </HeaderFooterLayout>
  )
}

export default MusicianPost
