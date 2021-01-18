import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CoverImage = () => {
  const data = useStaticQuery(graphql`
    query {
      myImage: file(relativePath: { eq: "TitleImage.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 1920, maxHeight: 700, quality: 100) {
                ...GatsbyImageSharpFluid
              }
        }
      }
    }
  `)
  return <Img fluid={data.myImage.childImageSharp.fluid} />
}

export default CoverImage