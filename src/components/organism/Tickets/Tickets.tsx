import Typography from '@material-ui/core/Typography';
import * as React from 'react';

import { Ticket } from '#components/types';
import TicketsList from '#molecule/Tickets';
import { ALL_TICKETS_QUERY, UPDATE_TICKET_QUERY } from '#queries';
import { TicketsQuery } from './TicketsQuery';
import { UpdateTicketQuery } from './UpdateTicketQuery';
import { updateHandler } from './utils';

export interface TicketsProps {
  onUpdateStatus: (ticket: Ticket) => void;
}

export const Tickets: React.SFC<TicketsProps> = ({ onUpdateStatus }) => (
  <TicketsQuery query={ALL_TICKETS_QUERY}>
    {({ loading, error, data }) => {
      if (loading) {
        return <span>Processing...</span>;
      }
      if (error) {
        return (
          <Typography variant="h5">
            Error: ${error.graphQLErrors[0].message}
          </Typography>
        );
      }
      if (!data || !data.tickets) {
        return (
          <Typography variant="h5">
            No data to show, feel free to add some tickets
          </Typography>
        );
      }

      return (
        <TicketsList tickets={data.tickets} onUpdateClick={onUpdateStatus} />
      );
    }}
  </TicketsQuery>
);

export default () => (
  <UpdateTicketQuery
    mutation={UPDATE_TICKET_QUERY}
    refetchQueries={[{ query: ALL_TICKETS_QUERY }]}
  >
    {(update) => <Tickets onUpdateStatus={updateHandler(update)} />}
  </UpdateTicketQuery>
);
