import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  link: new HttpLink({ 
    uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_environment}`,
    headers: {
      'Authorization': `Bearer ${process.env.CONTENTFUL_ACCESS_TOKEN}`,
  },
  }),
  cache: new InMemoryCache(),
});

export default client;