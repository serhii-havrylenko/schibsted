import { action } from 'typesafe-actions';

import { TICKET_CREATE } from './constants';

export const withdrawAmount = (payload: {
  title: string;
  description: string;
}) => action(TICKET_CREATE, payload);
