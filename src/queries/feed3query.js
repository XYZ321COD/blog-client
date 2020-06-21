import gql from 'graphql-tag'

// language=GraphQL
const FEED_QUERY3 = gql`
    query FEED_QUERY3($name : String = " ")
    {
        feed3(filter:  $name  ) {
            blogpost {
                id
                name
                createdAt
                description
                categories {
                    id
                    name
                }
            }
        }
    }
`
export default FEED_QUERY3;