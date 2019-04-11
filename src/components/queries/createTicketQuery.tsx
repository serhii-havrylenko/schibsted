import gql from 'graphql-tag';

export const CREATE_TICKET_QUERY = gql`
  mutation createTicket($title: String!, $description: String!) {
    ticket: createTicket(ticket: { title: $title, description: $description }) {
      id
      title
      description
      status
    }
  }
`;
