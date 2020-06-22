import gql from 'graphql-tag'

// language=GraphQL
const ALL_POST_FOR_CATEGORY_QUERY = gql`
    query ALL_POST_FOR_CATEGORY_QUERY($category : String = "NoPosts")
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
export default ALL_POST_FOR_CATEGORY_QUERY;