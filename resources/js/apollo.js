import { ApolloClient, InMemoryCache } from '@apollo/client';

// Configura Apollo Client per connettersi al tuo server GraphQL
const apolloClient = new ApolloClient({
    uri: 'http://localhost:8000/graphql', // URL del server GraphQL
    cache: new InMemoryCache(), // Caching dei dati per migliorare le prestazioni
});

export default apolloClient;