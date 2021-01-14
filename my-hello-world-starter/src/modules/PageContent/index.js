import React from "react"
import styles from "./style.module.css"
import ImageParagraph from "../../components/ImageParagraph"
import Elena from "../../components/Images/Elena"
import Antony from "../../components/Images/Antony"
import Nexus from "../../components/Images/Nexus"
import { addLeadingSlash } from "history/PathUtils";

const firstText = `Solo singer whose
energy makes up for 
the whole orchestra.`

const secondText = ` "Trumpet is my passion. 
Enjoy my music and 
feel the jazz vibe."`

const thirdText = ` Get ready for the night
of your life with this 
most wanted band.`

const PageContent = () => (
  <div>
    <h1 className={styles.title}>OUR MOST POPULAR MUSICIANS</h1>
    <section className={styles.pageContent}>
      <ImageParagraph image={<Elena />} title="Elena" text={firstText} />
      <ImageParagraph image={<Antony />} title="Antony" text={secondText} />
      <ImageParagraph image={<Nexus />} title="Nexus band" text={thirdText} />
    </section>
  </div>
)

export default PageContent
