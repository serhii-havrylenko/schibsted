import { MutationUpdaterFn } from 'apollo-client';
import { getOr } from 'lodash/fp';

import { CreateTicketQueryData, TicketsQueryData } from '#components/types';
import { ALL_TICKETS_QUERY } from '#queries';

export const getValueFromRef = (getOr(null, 'current.value') as unknown) as (
  ref: React.RefObject<HTMLInputElement>,
) => string | null;

export const updateCacheWithNew: MutationUpdaterFn<CreateTicketQueryData> = (
  cache,
  options,
) => {
  if (!options || !options.data) {
    return;
  }
  const ticket = options.data.ticket;

  const queryData = cache.readQuery<TicketsQueryData>({
    query: ALL_TICKETS_QUERY,
  });
  const tickets = queryData ? queryData.tickets : [];
  cache.writeQuery({
    query: ALL_TICKETS_QUERY,
    data: { tickets: tickets.concat([ticket]) },
  });
};
