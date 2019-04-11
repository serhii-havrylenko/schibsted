import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import CreateTicket, { CreateTicketProps } from './CreateTicket';

const props: CreateTicketProps = {
  onCreateClick: action('create clicked'),
  titleRef: React.createRef() as React.RefObject<HTMLInputElement>,
  descriptionRef: React.createRef() as React.RefObject<HTMLInputElement>,
};

storiesOf('CreateTicket', module).add('default', () => (
  <CreateTicket {...props} />
));
