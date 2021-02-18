import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import BackgroundImage from "gatsby-background-image"
import ContactForm from "../../../modules/ContactForm"

const ContactImage = ({ className }) => {
  const data = useStaticQuery(graphql`
    query {
      myImage: file(relativePath: { eq: "ContactBackground.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
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
      <ContactForm />
    </BackgroundImage>
  )
}
const StyledBackgroundSection = styled(ContactImage)`
  width: 100%;
  transition: 0.5s ease-out;
  background-position: 100px 0px 0 0;
  background-repeat: repeat-y;
  background-size: cover;
`

export default StyledBackgroundSection
