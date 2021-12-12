import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { App } from "./components/index";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { URL } from "./utils/constants";

const client = new ApolloClient({
  uri: URL,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById("root")
);
