import React from "react"
import styles from "./style.module.css"
import ImageParagraph from "../../components/ImageParagraph"
import TheKicks from "../../components/Images/TheKicks"
import Fraudio from "../../components/Images/Fraudio"
import Anastasia from "../../components/Images/Anastasia"
import TheHotShots from "../../components/Images/TheHotShots"
import DJCoby from "../../components/Images/DJCoby"
import Breakthrough from "../../components/Images/Breakthrough"
import SearchBox from "../Search"

const firstText = `Bringing fun, energy and
a killer repertoire to
every event.`

const secondText = `Fraudio showcase on-stage 
chemistry, incredible talent & 
loads of experience!`

const thirdText = ` When it comes to a pop guitar
show request here is the 
answer.`

const fourthText = `The Hot Shots are a 
professional and energetic 
Rock & Pop Party band!`
const fifthText = `The hottest party DJ in town!
Young & cool-guaranteed 
to kick off your party.
`
const sixthText = `With their fresh and unique 
style, exciting performance, 
take the music to the next level!`

const MusiciansPageContent = () => (
  <div className={styles.container}>
    <div>
      <SearchBox
        hint="e.g. The Kicks"
      />
    </div>
    <div className={styles.containerContent}>
      <p className={styles.arrowleft}></p>
      <section className={styles.pageContent}>
        <div className={styles.firstRow}>
          <ImageParagraph
           image={<TheKicks />}
            title="The Kicks"
            text={firstText}
          />
          <ImageParagraph
            image={<Fraudio />}
            title="Fraudio"
            text={secondText}
          />
          <ImageParagraph
            image={<Anastasia />}
            title="Anastasia band"
            text={thirdText}
          />
        </div>
        <div className={styles.secondRow}>
          <ImageParagraph
            image={<TheHotShots />}
            title="The Hot Shots"
            text={fourthText}
          />
          <ImageParagraph image={<DJCoby />} title="DJ Coby" text={fifthText} />
          <ImageParagraph
            image={<Breakthrough />}
            title="Breakthrough"
            text={sixthText}
          />
        </div>
      </section>
      <p className={styles.arrowright}></p>
    </div>
  </div>
)

export default MusiciansPageContent
