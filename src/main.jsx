import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { ChakraProvider } from "@chakra-ui/react";
import "./main.css";
import router from "./routes";
import { ApolloProvider } from "@apollo/client";
import client from './lib/apollo.cjs'
import { AuthProvider } from "./hooks/useAuth";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <ApolloProvider client={client}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ApolloProvider>
    </ChakraProvider>
  </React.StrictMode>
);
