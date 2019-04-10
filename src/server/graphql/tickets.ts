import { findIndex, uniqueId } from 'lodash/fp';

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
    id: uniqueId('REQ-'),
    status: TicketStatus.Open,
  };

  allTickets.push(newTicket);

  return newTicket;
};

export const updateTicket = (
  where: UpdateTicketArgs['where'],
  withArgs: UpdateTicketArgs['with'],
  allTickets = tickets,
) => {
  const index = findIndex(where, allTickets);

  allTickets[index] = {
    ...allTickets[index],
    ...withArgs,
  };

  return allTickets[index];
};
