/**
 * skenario test
 *
* - asyncPopulateUsersAndTalks thunk
 *  - should dispatch action correctly when data fetching success
 *  - should dispatch action and call alert correctly when data fetching failed
 */

import { afterEach, beforeEach, describe, it, vi, expect } from "vitest";
import api from "../../utils/api";
import asyncPopulateUsersAndThreads from "./action";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import { receiveThreadsActionCreator } from "../threads/action";
import { receiveUsersActionCreator } from "../users/action";


const fakeThreadsResponse = [
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
]

const fakeUsersResponse = [
  {
    userId: 'users-1',
    username: 'exampleUser',
    email: 'user@gmail.com',
    avatar: 'https://generated-image-url.jpg',
  }
]

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('asyncPopulateUsersAndThreads thunk', () => {
  beforeEach(() => {
    api._getAllUsers = api.getAllUsers;
    api._getAllThreads = api.getAllThreads;
  });

  afterEach(() => {
    api._getAllUsers = api.getAllUsers;
    api._getAllThreads = api.getAllThreads;


    // delete backup data
    delete api._getAllUsers;
    delete api._getAllThreads;
  })


  it('should dispatch action correctly when data fetching success', async () => {
    //arrange
    //stub implementation
    api.getAllUsers = () => Promise.resolve(fakeUsersResponse)
    api.getAllThreads = () => Promise.resolve(fakeThreadsResponse);
    //moke dispatch
    const dispatch = vi.fn()

    //action
    await asyncPopulateUsersAndThreads()(dispatch)


    //assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(receiveThreadsActionCreator(fakeThreadsResponse));
    expect(dispatch).toHaveBeenCalledWith(receiveUsersActionCreator(fakeUsersResponse));
    expect(dispatch).toHaveBeenCalledWith(hideLoading())
  })

  it('should dispatch action and call alert correctly when data fetching failed', async () => {
    //arrange
    //stub implementation
    api.getAllUsers = () => Promise.reject(fakeErrorResponse)
    api.getAllThreads = () => Promise.reject(fakeErrorResponse);
    //mock dispatch
    const dispatch = vi.fn()

    //mock alert
    window.alert = vi.fn();

    //action
    await asyncPopulateUsersAndThreads()(dispatch)

    //assert
    expect(dispatch).toHaveBeenCalledWith(showLoading());
    expect(dispatch).toHaveBeenCalledWith(hideLoading());
    expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
  })
});