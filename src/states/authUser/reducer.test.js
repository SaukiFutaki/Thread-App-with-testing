/**
 * Test scenario for authUserReducer
 *
 * - authUserReducer function
 *  - should return the initial state when given an unknown action
 *  - should return the authenticated user when given SET_AUTH_USER action
 *  - should return an unauthenticated state when given UNSET_AUTH_USER action
 */


import { describe, it, expect } from 'vitest';
import { authUserReducer } from './reducer';

describe('authUserReducer function', () => {
  it('should return the initial state when given an unknown action', () => {
    // arrange
    const initialState = null;
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the authenticated user when given SET_AUTH_USER action', () => {
    // arrange
    const initialState = null;
    const authUser = {
      userId: 'users-1',
      username: 'exampleUser',
      email: 'user@gmail.com',
    };
    const action = {
      type: 'SET_AUTH_USER',
      payload: {
        authUser,
      },
    };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual({
      userId: 'users-1',
      username: 'exampleUser',
      email: 'user@gmail.com',
    });
  });

  it('should return an unauthenticated state when given UNSET_AUTH_USER action', () => {
    // arrange
    const initialState = {
      userId: 'users-1',
      username: 'exampleUser',
      email: 'user@gmail.com',
    };
    const action = {
      type: 'UNSET_AUTH_USER',
    };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual(null);
  });
});
