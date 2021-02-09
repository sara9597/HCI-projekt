import React from "react"
import styles from "./style.module.css"
import BlogParagraph from "../../components/BlogParagraph"
import Jazz from "../../components/Images/Jazz"
import Piano from "../../components/Images/Piano"
import FirstDance from "../../components/Images/FirstDance"
import MusicAndHealth from "../../components/Images/MusicAndHealth"
import Genre from "../../components/Images/Genre"
import Pages from "../Pages";

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

const thirdText = `Your first dance on your wedding day is romantic, 
personal, and unforgettable. So, of course, you need to 
find the perfect tune to mark the special occasion. But 
finding the right song to fill just three minutes of your 
entire wedding day is a tough task.`

const fourthText = `Music is a fundamental attribute of the human species. 
The human brain and nervous system are hard-wired to distinguish music from 
noise and to respond to rhythm and repetition, tones and tunes. Is this a
biologic accident, or does it serve a purpose?`

const fifthText = `Music genres refer to styles of music. Rock is a music genre,
as is country, reggae, classical, jazz, and others. Genres are a key to unlocking 
lost avenues for music industry success. It really is an important part of communicating your music to 
the masses.`

const BlogPageContent = (activeTab) => (
    <div className={styles.container}>
        <h1 className={styles.title}>BLOG</h1>
        <section className={styles.blogContent}>
            <BlogParagraph image={<Jazz />} title="The History Of Jazz Drums" text={firstText} />
            <BlogParagraph image={<Piano />} title="Top 10 Popular Piano Songs For Beginners" text={secondText} />
            <BlogParagraph image={<FirstDance />} title="The 15 Best First Dance Songs for Your Wedding" text={thirdText} />
            <BlogParagraph image={<MusicAndHealth />} title="Music and health" text={fourthText} />
            <BlogParagraph image={<Genre />} title="What Is a Music Genre?" text={fifthText} />
        </section>
        <Pages activeTab = '1'/>
    </div>
)

export default BlogPageContent
