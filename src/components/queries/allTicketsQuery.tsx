import gql from 'graphql-tag';

export const ALL_TICKETS_QUERY = gql`
  query getTickets {
    tickets {
      id
      title
      description
      status
    }
  }
`;
