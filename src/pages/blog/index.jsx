import * as React from "react"
import { graphql } from "gatsby"

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { allMarkdownRemark } = data // data.markdownRemark holds your post data
  console.log(data,"data")
//   const { allMarkdownRemark.nodes } = allmarkdownRemark
  console.log(allMarkdownRemark.nodes,'nodes')
  const cards = allMarkdownRemark.nodes.map((data)=>{

   return ( <div>
<h1>{data.frontmatter.title}</h1>
<h2>{data.frontmatter.date}</h2>
<div
  dangerouslySetInnerHTML={{ __html: data.html }}
/>
</div>)
})
  return (
    <div>
       
      
      {cards}

    </div>
  )
}

export const pageQuery = graphql`
  query MyQuery {
  allMarkdownRemark {
    nodes {
      frontmatter {
        date
        layout
        rating
        thumbnail
        title
      }
      html
    }
  }
}
`