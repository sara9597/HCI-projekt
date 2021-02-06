import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Fraudio = () => {
    const data = useStaticQuery(graphql`
    query {
      myImage: file(relativePath: { eq: "Fraudio.jpg" }) {
        childImageSharp {
          fixed(width: 300, height: 200) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
    return <Img fixed={data.myImage.childImageSharp.fixed} />
}

export default Fraudio
