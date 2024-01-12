/**
 * Test scenario for threadReducer
 *
 * - threadReducer function
 *  - should return the initial state when given an unknown action
 *  - should return the thread when given by RECEIVE_THREADS action
 *  - should return a new thread when given by CREATE_THREAD action
 *  - should return the thread with toggled UpVote when given by UP_VOTE_THREAD action
 *  - should return the thread with toggled DownVote when given by DOWN_VOTE_THREAD action
 */

import threadReducer from './reducer';
import { describe, it, expect } from 'vitest';

describe('threadReducers function', () => {
  it('should return the initial state when given an unknown action', () => {
    // arrange
    const initialState = [];
    const action = { type: 'UNKNOWN' };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it('should return the thread when given by RECEIVE_THREADS action', () => {
    // arrange
    const initialState = [];
    const action = {
      type: 'RECEIVE_THREADS',
      payload: {
        threads: [
          {
            id: 'thread-1',
            title: 'first thread',
            body: 'First thread',
            category: 'General',
            createdAt: '2023-12-31T07:00:00.000Z',
            ownerId: 'users-1',
            upVotesBy: [],
            downVotesBy: [],
          },
        ],
      },
    };

    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threads);
  });

  it('should return a new thread when given by CREATE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'first thread',
        body: 'first thread',
        category: 'General',
        createdAt: '2023-12-31T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
      },
    ];
    const action = {
      type: 'CREATE_THREAD',
      payload: {
        thread: {
          id: 'thread-2',
          title: 'Second Thread',
          body: 'Second thread',
          category: 'General',
          createdAt: '2024-01-01T07:00:00.000Z',
          ownerId: 'users-2',
          upVotesBy: [],
          downVotesBy: [],
        },
      },
    };
    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it('should return the thread with toggled UpVote when given by UP_VOTE_THREAD action', () => {
    // arrange
    const initialState = [
      {
        id: 'thread-1',
        title: 'first thread',
        body: 'first thread',
        category: 'General',
        createdAt: '2023-12-31T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
      },
    ];

    const action = {
      type: 'UP_VOTE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'users-1',
      },
    };
    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [action.payload.userId],
        downVotesBy: [],
      },
    ]);
  });

  it('should return the thread with toggled DownVote when given by DOWN_VOTE_THREAD action', () => {
    const initialState = [
      {
        id: 'thread-1',
        title: 'first thread',
        body: 'first thread',
        category: 'General',
        createdAt: '2023-12-31T07:00:00.000Z',
        ownerId: 'users-1',
        upVotesBy: [],
        downVotesBy: [],
      },
    ];

    const action = {
      type: 'DOWN_VOTE_THREAD',
      payload: {
        threadId: 'thread-1',
        userId: 'users-1',
      },
    };
    // action
    const nextState = threadReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [],
        downVotesBy: [action.payload.userId],
      },
    ]);
  });
});
