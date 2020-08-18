import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import {WebSocketLink} from '@apollo/client/link/ws'
import Chat from './components/Chat';

const App = () => {

  const link = new WebSocketLink({
    uri: 'ws://localhost:4000/',
    options: {
      reconnect: true
    }
  })

  const client = new ApolloClient({
    link,
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <Chat />
    </ApolloProvider>
  );
};

export default App;
