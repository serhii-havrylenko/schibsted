/**
 * reducers.ts
 * prepare reducers to allow create store
 */
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers, Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';

import * as actions from './actions';
import { TICKET_CREATE } from './constants';

export type ActionTypes = ActionType<typeof actions>;

export interface TicketsState {
  title?: string;
  description?: string;
}

export interface State {
  tickets: TicketsState;
  router: RouterState;
}

export const ticketsReducer: Reducer<TicketsState, ActionTypes> = (
  state = {},
  action,
) => {
  switch (action.type) {
    case TICKET_CREATE:
      return {
        ...state,
        title: action.payload.title,
        description: action.payload.description,
      };

    default:
      return state;
  }
};

/**
 * prepared reducers
 * @type {Reducer<{}>}
 */
export default (history: History) =>
  combineReducers<State>({
    router: connectRouter(history),
    tickets: ticketsReducer,
  });
