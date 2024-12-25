import * as React from "react"
import { graphql } from "gatsby"

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
    
  const { allMarkdownRemark } = data // data.markdownRemark holds your post data
  console.log(data,"data")
//   const { allMarkdownRemark.nodes } = allmarkdownRemark
  console.log(allMarkdownRemark.nodes,'nodes')

  return (
    <div>
       
      
      

    </div>
  )
}

export const pageQuery = graphql`
  query MyQuery {
  allMarkdownRemark {
    nodes {
      frontmatter {
       slug
      }
      html
    }
  }
}
`