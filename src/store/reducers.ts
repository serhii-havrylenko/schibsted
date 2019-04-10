/**
 * reducers.ts
 * prepare reducers to allow create store
 */
import { connectRouter, RouterState } from 'connected-react-router';
import { History } from 'history';
import { combineReducers, Reducer } from 'redux';
import { ActionType } from 'typesafe-actions';

import * as actions from './actions';
import { WITHDRAW_AMOUNT } from './constants';

export type ActionTypes = ActionType<typeof actions>;

export interface CacheMachineState {
  amount?: number;
}

export interface State {
  cacheMachine: CacheMachineState;
  router: RouterState;
}

export const cacheMachineReducer: Reducer<CacheMachineState, ActionTypes> = (
  state = {},
  action,
) => {
  switch (action.type) {
    case WITHDRAW_AMOUNT:
      return { ...state, amount: action.payload.amount };

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
    cacheMachine: cacheMachineReducer,
  });
