import { Mutation } from 'react-apollo';

import {
  UpdateTicketQueryData,
  UpdateTicketQueryVariables,
} from '#components/types';

export class UpdateTicketQuery extends Mutation<
  UpdateTicketQueryData,
  UpdateTicketQueryVariables
> {}
