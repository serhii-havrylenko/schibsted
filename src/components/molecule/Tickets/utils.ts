import { TicketStatus } from '#components/types';

const NEXT_STATUS_MAPPING = {
  [TicketStatus.Open]: TicketStatus.Pending,
  [TicketStatus.Pending]: TicketStatus.Closed,
  [TicketStatus.Closed]: null,
};

export const getNextStatus = (status: TicketStatus) =>
  NEXT_STATUS_MAPPING[status];
