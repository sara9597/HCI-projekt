import React from "react"
import styles from "./style.module.css"

const Filter = () => (
  <>
    <form className={styles.controls} id="Filters">
      <fieldset className={styles.fieldset}>
        <h4>Filter by genre:</h4>
        <div className={styles.checkbox}>
          <input type="checkbox" value=".square" />
          <label>Pop</label>
        </div>
        <div className={styles.checkbox}>
          <input type="checkbox" value=".circle" />
          <label>Rock</label>
        </div>
        <div className={styles.checkbox}>
          <input type="checkbox" value=".triangle" />
          <label>Jazz</label>
        </div>
        <div className={styles.checkbox}>
          <input type="checkbox" value=".triangle" />
          <label>Classic</label>
        </div>
        <div className={styles.checkbox}>
          <input type="checkbox" value=".triangle" />
          <label>House</label>
        </div>
      </fieldset>
    </form>
  </>
)

export default Filter
