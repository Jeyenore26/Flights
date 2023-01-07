import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  ssrMode: true,
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

export default apolloClient;
