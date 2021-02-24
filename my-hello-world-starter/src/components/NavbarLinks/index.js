import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
    display: hidden;
    
  @media (max-width: 880px) {
    padding: 20px 0;
    font-weight: 600;
    font-size: 1.5rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    z-index: 6;
    display: block;
    text-decoration: none;
    color: #111;
    white-space: nowrap;
    margin: 0 1vw;
    transition: all 200ms ease-in;
    position: relative;
    padding-left:50px;
    padding-right:50px;
  
    :after {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 0%;
      content: ".";
      color: transparent;
      background: #c79817;
      height: 2px;
      transition: all 0.4s ease-in;
    }
  
    :hover {
      transform: scale(1.05);
      color: #c79817;
      ::after {
        width: 100%;
      }
    }
  }
`
const NavbarLinks = () => {
  return (
    <>
      <NavItem to="/">HOME</NavItem>
      <NavItem to="/musicians">MUSICIANS</NavItem>
      <NavItem to="/blog">BLOG</NavItem>
      <NavItem to="/contact">CONTACT</NavItem>
      <NavItem to="/join">JOIN</NavItem>
    </>
  )
}

export default NavbarLinks
