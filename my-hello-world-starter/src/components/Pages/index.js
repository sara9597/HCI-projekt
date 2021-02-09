import React from "react"
import styles from "./style.module.css"
import { Link } from "gatsby"

const navPages = [
  { tab:'1' },
  { tab: '2' },
  { tab: '3' }
]



const Pages = ({ activeTab, useThisStyle }) => (
  <nav className={styles[useThisStyle || 'container']}>
    <p className={styles.arrowleft}></p>
    {navPages.map(({ tab }) => (
    
        <button
          className={tab === activeTab ? styles.active : ''}
         
        >
          {tab}
        </button>
      
    ))}
    <p className={styles.arrowright}></p>
  </nav>
)

export default Pages
