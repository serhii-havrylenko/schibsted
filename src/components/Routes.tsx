/**
 * Routes.tsx
 * define application routing
 */
import { Location } from 'history';
import * as React from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Application from '#components/App';
import * as Pages from '#pages';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
  }
`;

interface StateMap {
  router: { location?: Location };
}

const switchMapState = ({ router: { location } }: StateMap) => ({ location });

const ConnectedSwitch = connect(
  switchMapState,
  null,
)((props) => <Switch {...props} />);

/**
 * Application component with router and pages
 */
const Routes: React.SFC = () => (
  <ThemeProvider theme={{}}>
    <Application>
      <GlobalStyles />
      <ConnectedSwitch>
        <Route exact={true} path="/" component={Pages.HomePage} />
        <Route path="/home" component={Pages.HomePage} />
        <Route path="/faq" component={Pages.FAQPage} />
        <Route path="*" component={Pages.NotFoundPage} />
      </ConnectedSwitch>
    </Application>
  </ThemeProvider>
);

export default hot(module)(Routes);
