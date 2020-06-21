import gql from 'graphql-tag'

const FEED_QUERY4 = gql`
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
export default FEED_QUERY4;