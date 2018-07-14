// @flow
import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient } from "apollo-client";
import { withClientState } from "apollo-link-state";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";

import "./index.css";
import "semantic-ui-css/semantic.min.css";
import "react-datepicker/dist/react-datepicker.css";
import App from "./App";
import { resolvers, defaults } from "./resolvers";
import registerServiceWorker from "./registerServiceWorker";

const cache = new InMemoryCache();

const typeDefs = `
type User {
    id: Int!
    name: String!
    age: Int!
    email: String!
    img: String!
}
type Mutation {
  addUser(name: String!, age: Int!, email: String!, img: String!): User
}
type Query {
    users: [User],
    user(id: Int!): User
}
`;

const client = new ApolloClient({
  cache,
  link: withClientState({ resolvers, defaults, cache, typeDefs })
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
registerServiceWorker();
