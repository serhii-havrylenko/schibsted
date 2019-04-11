import { action } from '@storybook/addon-actions';
import { select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Ticket, TicketStatus } from '#components/types';
import Tickets, { TicketsProps } from './Tickets';

const props: TicketsProps = {
  onUpdateClick: action('Update clicked'),
  tickets: [
    {
      id: 'REQ-1',
      title: 'First ticket',
      description: 'first description',
      status: TicketStatus.Open,
    },
    {
      id: 'REQ-2',
      title: 'Second ticket',
      description: 'multiline\ndescription',
      status: TicketStatus.Pending,
    },
    {
      id: 'REQ-3',
      title: 'Third ticket',
      description: 'closed task',
      status: TicketStatus.Closed,
    },
  ],
};

storiesOf('Tickets', module).add('default', () => {
  const customTicket: Ticket = {
    id: text('Ticket id', 'some id'),
    title: text('Ticket title', 'some text'),
    description: text('Ticket description', 'some text'),
    status: select(
      'Ticket status',
      {
        [TicketStatus.Open]: TicketStatus.Open,
        [TicketStatus.Pending]: TicketStatus.Pending,
        [TicketStatus.Closed]: TicketStatus.Closed,
      },
      TicketStatus.Open,
    ),
  };
  return <Tickets {...props} tickets={[...props.tickets, customTicket]} />;
});
