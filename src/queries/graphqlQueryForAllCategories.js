import gql from 'graphql-tag'

const CATEGORIES_QUERY = gql`
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
export default CATEGORIES_QUERY;