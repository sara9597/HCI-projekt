const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const data = await graphql(`
    query {
      myQuery: allContentfulMusicianBox {
        nodes {
          internal {
            content
          }

          title
          description
          slug
          updatedAt
          image {
            fixed(width: 280, height: 200) {
              src
              srcSet
              srcSetWebp
              srcWebp
              width
              height
              base64
              aspectRatio
            }
          }
        }
      }
    }
  `)

  const res = data.myQuery.nodes
  {
    console.log(res)
  }

  res.forEach((e, index, array) =>
    actions.createPage({
      component: path.resolve(`./src/Layouts/musician`),
      context: {
        ...e,
        next: index < array.length ? array[index + 1] : null,
        prev: index > 0 ? array[index - 1] : null
      },
      path: `posts/${e.slug}`,
      slug: `posts/${e.slug}`
    })
  )
}
