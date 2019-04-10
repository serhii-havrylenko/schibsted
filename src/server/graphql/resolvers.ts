import { GraphQLFieldResolver } from 'graphql';

export const helloResolver: GraphQLFieldResolver<{}, {}, { foo?: string }> = (
  _,
  { foo },
) => `${foo} bar`;

export const resolvers: { [key: string]: any } = {
  Query: {
    hello: helloResolver,
  },
};
