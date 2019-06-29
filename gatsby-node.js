
const path = require("path")

exports.createPages = async({graphql,actions}) => {
  const {createPage} =actions

  const {data} = await graphql(`
    query{
      posts:allContentfulArticles{
    edges{
      node{
        slug
      }
    }
  }
    }
    `)
    data.posts.edges.forEach(({node})=>{
      createPage({
        path:`article/${node.slug}`,
        component:path.resolve("./src/templates/blog-template.js"),
        context: {
          slug:node.slug,
        },
      })
    })
}
