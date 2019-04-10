import { GraphQLFieldResolver } from 'graphql';

import { CreateTicketArgs, UpdateTicketArgs } from './types';

import { createTicket, getAllTickets, updateTicket } from './tickets';

export const helloResolver: GraphQLFieldResolver<{}, {}, {}> = () =>
  getAllTickets();

export const createTicketMutation: GraphQLFieldResolver<
  {},
  {},
  CreateTicketArgs
> = (_, { ticket }) => createTicket(ticket);

export const updateTicketMutation: GraphQLFieldResolver<
  {},
  {},
  UpdateTicketArgs
> = (_, { where, with: withArgs }) => updateTicket(where, withArgs);

export const resolvers: { [key: string]: any } = {
  Query: {
    tickets: helloResolver,
  },
  Mutation: {
    createTicket: createTicketMutation,
    updateTicket: updateTicketMutation,
  },
};
