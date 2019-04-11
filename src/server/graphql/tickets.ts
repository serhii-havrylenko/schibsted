import uniqueId from 'lodash/fp/uniqueId';

import { TICKET_ID_PREFIX } from './constants';
import {
  CreateTicketArgs,
  Ticket,
  TicketStatus,
  UpdateTicketArgs,
} from './types';

export const tickets: Ticket[] = [];

export const getAllTickets = (allTickets = tickets) => allTickets;

export const createTicket = (
  { title, description }: CreateTicketArgs['ticket'],
  allTickets = tickets,
) => {
  const newTicket: Ticket = {
    title,
    description,
    id: uniqueId(TICKET_ID_PREFIX),
    status: TicketStatus.Open,
  };

  allTickets.push(newTicket);

  return newTicket;
};

export const updateTicket = (
  { id }: UpdateTicketArgs['where'],
  withArgs: UpdateTicketArgs['with'],
  allTickets = tickets,
) => {
  const index = allTickets.findIndex((ticket) => ticket.id === id);

  if (index === -1) {
    return null;
  }

  allTickets[index] = {
    ...allTickets[index],
    ...withArgs,
  };

  return allTickets[index];
};
