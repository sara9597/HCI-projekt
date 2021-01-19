 import React from "react"
 import styles from "./style.module.css"
 import BlogParagraph from "../../components/BlogParagraph"
 import Jazz from "../../components/Images/Jazz"
 import Piano from "../../components/Images/Piano"

 const firstText = `In 1989 saxophonist Loren Schoenberg did a series of 
 interviews with Mel Lewis on the history of jazz 
 drumming.
 These interviews have been talked about and passed 
 around for years, but now, in  the Internet age, we can 
 get our hands on anything, any time.`

 const secondText = `Learning to play the piano is a rich and rewarding 
 experience. Some people choose the classical route, 
 learning Beethoven or Chopin. Others opt for 
 famous piano songs from the realm of pop and rock.`

 const Blog = () => (
    <div className={styles.container}>
        <h1 className={styles.title}>RECENT BLOG ARTICLES:</h1>
        <section className={styles.blogContent}>
            <BlogParagraph image={<Jazz />} title="The History Of Jazz Drums" text={firstText} />
            <BlogParagraph image={<Piano />} title="Top 10 Popular Piano Songs For Beginners" text={secondText} />
        </section>
    </div>
 )

export default Blog