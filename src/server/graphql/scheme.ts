import { gql } from 'apollo-server-express';

export const scheme = gql`
  type Query {
    tickets: [Ticket]
  }

  type Mutation {
    createTicket(ticket: CreateTicketArgs): Ticket
    updateTicket(
      where: UpdateTicketWhereArgs
      with: UpdateTicketWithArgs
    ): Ticket
  }

  input CreateTicketArgs {
    title: String
    description: String
  }

  input UpdateTicketWhereArgs {
    id: ID
  }

  input UpdateTicketWithArgs {
    status: TicketStatus
  }

  enum TicketStatus {
    Open
    Pending
    Closed
  }

  type Ticket {
    id: ID
    title: String
    description: String
    status: TicketStatus
  }
`;
