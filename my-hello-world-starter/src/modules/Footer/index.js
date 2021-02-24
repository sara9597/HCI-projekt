import React from "react"
import styles from "./style.module.css"
import { Link } from "gatsby"
import PhoneIcon from "@material-ui/icons/Phone"
import MailOutlineIcon from "@material-ui/icons/MailOutline"

const Footer = () => (
  <footer className={styles.footer}>
    <ul className={styles.left}>
      <li className={styles.rights}>©2020 by MusicAgent </li>
      <li className={styles.logo}>
        <img
          src="https://github.com/sara9597/HCI-projekt/blob/master/my-hello-world-starter/src/images/Logo.png?raw=true"
          className={styles.icon}
          onClick={() => window.open("/", "_self")}
          onKeyDown={() => window.open("/", "_self")}
          alt="logo"
        ></img>
      </li>
    </ul>
    <ul className={styles.address}>
      <li className={styles.title}>CONTACT:</li>
      <li>
        <MailOutlineIcon style={{ marginBottom: "-5px" }} />{" "}
        musicagent@gmail.com
      </li>
      <li className={styles.phone}>
        <PhoneIcon style={{ marginBottom: "-5px" }} /> 234-432
      </li>
    </ul>
    <ul className={styles.follow}>
      <li>
        <div>
          <Link to="/404">
            <img
              src="https://github.com/sara9597/HCI-projekt/blob/master/my-hello-world-starter/src/images/instagram.png?raw=true"
              className={styles.icons}
              alt="instagram"
            ></img>
          </Link>
          <Link to="/404">
            <img
              src="https://github.com/sara9597/HCI-projekt/blob/master/my-hello-world-starter/src/images/facebook.png?raw=true"
              className={styles.icons}
              alt="facebook"
            ></img>
          </Link>
          <Link to="/404">
            <img
              src="https://github.com/sara9597/HCI-projekt/blob/master/my-hello-world-starter/src/images/twitter.png?raw=true"
              className={styles.icons}
              alt="twitter"
            ></img>
          </Link>
        </div>
      </li>
    </ul>
  </footer>
)

export default Footer
