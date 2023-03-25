import React from 'react';

//third party libraries
import 'antd/dist/reset.css';
import { ConfigProvider } from 'antd';
import { ApolloProvider } from '@apollo/client';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

//etc
import client from './lib/apollo.cjs';
import router from './routes';

//custom hooks
import { AuthProvider } from './hooks/useAuth';

//css
import './main.css';
import theme from '../theme.json';

//Destructuring
const { darkAlgorithm } = theme;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider theme={theme}>
      <ApolloProvider client={client}>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
      </ApolloProvider>
    </ConfigProvider>
  </React.StrictMode>,
);
