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
        <header>
          {prev && (
            <Link
              to={`/post/${prev.slug}`}
              style={{
                position: "absolute",
                top: "50%",
                left: "0",
                transform: "translate(0, -50%)"
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
                transform: "translate(0, -50%)"
              }}
              className="active1"
            >
              <span>Next</span>
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
                  modal
                  nested
                >
                  {user ? (
                    <div className={styles.modal}>
                      <button
                        className={styles.close}
                        onClick={close}
                        style={{
                          backgroundColor: "white"
                        }}
                      >
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
                    (setTimeout(() => navigate("/login"), 4000),
                    "Please login first. You will be redirected to login page shortly.")
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
