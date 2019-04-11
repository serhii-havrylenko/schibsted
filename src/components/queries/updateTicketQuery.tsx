import gql from 'graphql-tag';

export const UPDATE_TICKET_QUERY = gql`
  mutation updateTicket($id: ID!, $status: TicketStatus!) {
    ticket: updateTicket(where: { id: $id }, with: { status: $status }) {
      id
      title
      description
      status
    }
  }
`;
