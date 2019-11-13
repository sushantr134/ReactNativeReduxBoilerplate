import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import React from "react";
import { Provider } from "react-redux";
import Store from "./redux/store";

const appStore = Store();

const AppWithRedux = () => (
  <Provider store={appStore}>
    <App />
  </Provider>
);
AppRegistry.registerComponent(appName, () => AppWithRedux);
