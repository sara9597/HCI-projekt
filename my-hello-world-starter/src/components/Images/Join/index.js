import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Join = () => {
    const data = useStaticQuery(graphql`
    query {
      myImage: file(relativePath: { eq: "Join.jpg" }) {
        childImageSharp {
          fixed(width: 700,height:700) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

    return <Img fixed={data.myImage.childImageSharp.fixed} />
  
}
export default Join
