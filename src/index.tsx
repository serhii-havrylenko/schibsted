/**
 * src/index.ts
 * app client side entry point
 */
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';

import Routes from '#components/Routes';
import env from '#env';
import configureStore from '#store';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
});
const history = createBrowserHistory();
const store = configureStore(window.__INITIAL_STATE__, history);
const client = new ApolloClient({
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__),
  link: createHttpLink({ fetch, uri: env.apolloServerUrl }),
  ssrForceFetchDelay: 100,
});

/**
 * renderApp hydrates application after SSR return page
 * @param  Component root component to render
 */
const renderApp = (Component: React.ComponentType): void => {
  hydrate(
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <ApolloProvider client={client}>
          <ConnectedRouter history={history}>
            <Component />
          </ConnectedRouter>
        </ApolloProvider>
      </Provider>
    </MuiThemeProvider>,
    document.getElementById('react-root'),
  );
};

renderApp(Routes);
