import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import ContactForm from "../../../modules/LoginForm"
import LoginForm from "../../../modules/LoginForm";

const LoginImage = ({ className }) => {
    const data = useStaticQuery(graphql`
    query {
      myImage: file(relativePath: { eq: "Login.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100,maxHeight:700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

    const imageData = data.myImage.childImageSharp.fluid
    return (
        <BackgroundImage
            Tag="section"
            className={className}
            fluid={imageData}
            backgroundColor={`#040e18`}
        >
            <LoginForm />
        </BackgroundImage>
    )
}
const StyledBackgroundSection = styled(LoginImage)`
  width: 100%;
  background-position: 0 0px;
  transition: 0.5s ease-out;
  background-repeat: none;
  background-size: cover;
`

export default StyledBackgroundSection
