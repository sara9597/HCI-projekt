import React from "react"
import Logo from "../../components/Logo"
import Navigation from "../../components/Navigation"
import styles from "./style.module.css"
import LoginButton from "../../components/LoginButton"
import { useState } from "react"
import styled from "styled-components"
import NavbarLinks from "../../components/NavbarLinks"

const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media (max-width: 880px) {
    display: flex;
  }
`

const Navbox = styled.div`
  display: none;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
  z-index: 2;
  margin-top: 8px;
  position: absolute;

  @media (max-width: 880px) {
    display:flex;
    flex-direction: column;
    position: absolute;
    width: 100%;
    height: 420px;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #dfc7dc;
    transition: all 0.3s ease-in;
    top: 8vh;
    margin-top: 8px;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${props => (props.open ? "rotate(-45deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, 0px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }
`

const NavigationHeader = ({ activeTab }) => {

  const [navbarOpen, setNavbarOpen] = useState(false)

  return (

  <section className={styles.navigationHeader}>
   <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Hamburger open /> : <Hamburger />}
      </Toggle>
      {navbarOpen ? (
        <Navbox>
          <NavbarLinks />
        </Navbox>
      ) : (
        <Navbox open>
          <NavbarLinks />
        </Navbox>
      )}
    <Logo />
    <Navigation activeTab={activeTab} />
    <LoginButton />
  </section>
  )
}
export default NavigationHeader
