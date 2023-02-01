import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  ssrMode: true,
  uri: "https://earthbackend.onrender.com/graphql",
  cache: new InMemoryCache(),
});

export default apolloClient;
