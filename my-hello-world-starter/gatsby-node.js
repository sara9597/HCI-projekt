const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const raw = await graphql(`query {
    allContentfulBlogPost {
      nodes {
        description {
          internal {
            content
          }
        }
        body {
          raw
        }
        title
        slug
        updatedAt
        image {
          fixed(width: 360, height: 300) {
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
  }`)
 
  const res = raw.data.allContentfulBlogPost.nodes
 
  res.forEach((e, index, array) =>
  actions.createPage({
    component: path.resolve(`./src/Layouts/blog.js`),
    context: {
      ...e,
      next: index < array.length ? array[index + 1] : null,
      prev: index > 0 ? array[index - 1] : null
    },
    path: `post/${e.slug}`,
    slug: `post/${e.slug}`
  })
)


    const ram = await graphql(`
      query {
        allContentfulMusicianBox {
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
  
    const rem = ram.data.allContentfulMusicianBox.nodes
  
    rem.forEach((e, index, array) =>
      actions.createPage({
        component: path.resolve(`./src/Layouts/musician.js`),
        context: {
          ...e,
          next: index < array.length ? array[index + 1] : null,
          prev: index > 0 ? array[index - 1] : null
        },
        path: `post/${e.slug}`,
        slug: `post/${e.slug}`
      })
    )
    

}

