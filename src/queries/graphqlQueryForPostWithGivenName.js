import gql from 'graphql-tag'

// language=GraphQL
const POST_WITH_GIVEN_NAME_QUERY = gql`
    query POST_WITH_GIVEN_NAME_QUERY($name : String = " ")
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
export default POST_WITH_GIVEN_NAME_QUERY;