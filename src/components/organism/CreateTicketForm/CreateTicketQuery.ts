import { Mutation } from 'react-apollo';

import {
  CreateTicketQueryData,
  CreateTicketQueryVariables,
} from '#components/types';

export class CreateTicketQuery extends Mutation<
  CreateTicketQueryData,
  CreateTicketQueryVariables
> {}
