import { split, HttpLink, ApolloClient, InMemoryCache } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { createClient } from 'graphql-ws';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { WebSocketLink } from '@apollo/client/link/ws';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { setContext } from '@apollo/client/link/context';

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem(import.meta.env.VITE_REACT_APP_TOKEN);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const httpLink = new HttpLink({
  uri: import.meta.env.VITE_REACT_APP_HASURA_HTTP_URL,
});

// const wsLink = new WebSocketLink(
//   new SubscriptionClient(import.meta.env.VITE_REACT_APP_HASURA_WS_URL, {
//     reconnect: true,
//     connectionParams: {
//       headers: {
//         Authorization: `Bearer ${localStorage.getItem(import.meta.env.VITE_REACT_APP_TOKEN)}`,
//       },
//     },
//   }),
// );

// The split function takes three parameters:
//
// * A function that's called for each operation to execute
// * The Link to use for an operation if the function returns a "truthy" value
// * The Link to use for an operation if the function returns a "falsy" value
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === 'OperationDefinition' && definition.operation === 'subscription';
  },
  // wsLink,
  httpLink,
);

export default new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
