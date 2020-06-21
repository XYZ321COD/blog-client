import gql from 'graphql-tag'

// language=GraphQL
const FEED_QUERY2 = gql`
    query FEED_QUERY2($category : String = "NoPosts")
    {
        feed2(filter:  $category ) {
            blogposts {
                id
                name
                description
                categories {
                    id
                    name
                }
            }
        }
    }
`
export default FEED_QUERY2;