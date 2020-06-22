import gql from 'graphql-tag'

const RECENT_POSTS_QUERY = gql`
    {
        feed4 {
            blogposts {
                id
                name
                categories {
                    id
                }
            }
        }
    }
`
export default RECENT_POSTS_QUERY;