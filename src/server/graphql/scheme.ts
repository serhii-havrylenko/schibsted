import { gql } from 'apollo-server-express';

export const scheme = gql`
  type Query {
    hello(foo: Int): String!
  }
`;
