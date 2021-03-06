import React from 'react';
import Link from 'gatsby-link';
import PostListing from '../components/Posts/PostListing';


const IndexPage = ({data}) => (
  <div>
    <h2>Here Are My Thoughts Bruh</h2>
    {data.allMarkdownRemark.edges.map(({node}) => (
      <PostListing key={node.id} post={node} />
    ))}
  </div>
);

export default IndexPage

export const query = graphql`
query SiteMeta {
  site {
    siteMetadata {
      title
      desc
      funnelName
    }
  }
  allMarkdownRemark(sort: {
    fields: [frontmatter___date],
    order: DESC
  }) {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString:"MMMM DD YYYY")
        }
        html
        fields { 
          slug 
        }
        excerpt(pruneLength: 280)
      }
    }
  }
}
`