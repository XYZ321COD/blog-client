import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

const cache = new InMemoryCache();
const link = new HttpLink({
    uri: `https://fast-scrubland-21578.herokuapp.com/`
});
const client = new ApolloClient({
    cache,
    link
});

export default client;