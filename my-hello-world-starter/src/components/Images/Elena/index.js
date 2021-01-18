import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Elena = () => {
  const data = useStaticQuery(graphql`
    query {
      myImage: file(relativePath: { eq: "Elena.jpg" }) {
        childImageSharp {
          fixed(width: 240, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return <Img fixed={data.myImage.childImageSharp.fixed} />
}

export default Elena
