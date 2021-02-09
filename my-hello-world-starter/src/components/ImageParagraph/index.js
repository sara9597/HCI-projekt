import React,  {useState} from "react"
import styles from "./style.module.css"
import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"


const ImageParagraph = ({ image, title, text }) => {

return(
  
  <section className={styles.imageParagraph}>
    <div className={styles.imageHalf}>
      {image}
      <div className={styles.articleHalf}>
        <article>
          <h2>{title}</h2>
          <p>{text}</p>
            <Popup trigger={ <button className={styles.button1} >
            View profile
          </button>}  modal
            nested>
            {close => (
              <div className={styles.modal}>
                <button className={styles.close} onClick={close}>
                  &times;
        </button>
                <div className={styles.header}> {title} </div>
                <div className={styles.content}>
</div>
                  <div className={styles.actions}>
                    <Popup
                      trigger={<button className={styles.button2}> Trigger </button>}
                      position="top center"
                      nested
                    >
                      <span>
                        {text}
                      </span>
                    </Popup>
                    <button
                      className={styles.button2}
                      onClick={() => {
                        console.log('modal closed ');
                        close();
                      }}
                    >
                      Close
          </button>
              </div>
              </div>
         )}
          </Popup>
        </article>
      </div>
    </div>
  </section>

   
);
}

export default ImageParagraph
