import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import React from "react";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import { Provider } from "react-redux";
import Store from "./redux/store";

const appStore = Store();
const client = new ApolloClient({ link: new HttpLink(), cache: new InMemoryCache() });

const AppWithReduxGraphQL = () => (
  <Provider store={appStore}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>
);
AppRegistry.registerComponent(appName, () => AppWithReduxGraphQL);
