import gql from 'graphql-tag'

const FEED_QUERY = gql`
  {
    feed {
      categories {
        id
        name
        blogposts {
          id
        }
      }
    }
  }
`
export default FEED_QUERY;