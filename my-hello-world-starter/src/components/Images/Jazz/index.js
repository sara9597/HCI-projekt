import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Jazz = () => {
  const data = useStaticQuery(graphql`
    query {
      myImage: file(relativePath: { eq: "Jazz.jpg" }) {
        childImageSharp {
            fluid(maxWidth: 340, maxHeight: 300, quality: 100) {
                ...GatsbyImageSharpFluid
              }
        }
      }
    }
  `)
  return <Img fluid={data.myImage.childImageSharp.fluid} />
}

export default Jazz