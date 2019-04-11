import { MutationFn } from 'react-apollo';

import {
  Ticket,
  UpdateTicketQueryData,
  UpdateTicketQueryVariables,
} from '#components/types';
import { getNextStatus } from '#molecule/Tickets/utils';

export const updateHandler = (
  updateFn: MutationFn<UpdateTicketQueryData, UpdateTicketQueryVariables>,
) => ({ status, id }: Ticket) => {
  const nextStatus = getNextStatus(status);
  if (!nextStatus) {
    return;
  }
  updateFn({
    variables: {
      id,
      status: nextStatus,
    },
  });
};
