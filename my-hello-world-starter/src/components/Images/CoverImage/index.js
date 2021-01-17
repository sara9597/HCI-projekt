import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const CoverImage = () => {
  const data = useStaticQuery(graphql`
    query {
      myImage: file(relativePath: { eq: "TitleImage.jpg" }) {
        childImageSharp {
          fixed( height: 500) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <Img fixed={data.myImage.childImageSharp.fixed} />
}

export default CoverImage