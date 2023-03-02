import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import "./main.css";
import router from "./routes";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://snapmed.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode>
);
