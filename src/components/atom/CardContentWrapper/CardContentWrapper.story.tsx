import { Card } from '@material-ui/core';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import CardContentWrapper from './CardContentWrapper';

storiesOf('CardContentWrapper', module).add('default', () => (
  <Card>
    <CardContentWrapper>
      <span>Vertically aligned card content</span>
      <span>Span 2</span>
    </CardContentWrapper>
  </Card>
));
