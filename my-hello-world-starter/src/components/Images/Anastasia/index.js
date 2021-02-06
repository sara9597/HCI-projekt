import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Anastasia = () => {
    const data = useStaticQuery(graphql`
    query {
      myImage: file(relativePath: { eq: "Anastasia.jpg" }) {
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

export default Anastasia
