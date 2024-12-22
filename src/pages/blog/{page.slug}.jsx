import * as React from "react"
import { graphql } from "gatsby"

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, layout } = markdownRemark
  return (
    <div>
      <div>
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          dangerouslySetInnerHTML={{ __html: layout }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query MyQuery($id: StringQueryOperatorInput = {}) {
  markdownRemark(id: $id) {
    html
    frontmatter {
      date
      layout
      rating
      thumbnail
      title
    }
  }
}
`