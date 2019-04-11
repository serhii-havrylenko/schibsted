import { MutationFn } from 'react-apollo';

import {
  CreateTicketQueryData,
  CreateTicketQueryVariables,
} from '#components/types';

export const createHandler = (
  updateFn: MutationFn<CreateTicketQueryData, CreateTicketQueryVariables>,
) => ({ title, description }: CreateTicketQueryVariables) => {
  updateFn({
    variables: {
      title,
      description,
    },
  });
};
