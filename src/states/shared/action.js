import api from '../../utils/api';
import { receiveUsersActionCreator } from '../users/action';
import { receiveThreadsActionCreator } from '../threads/action';
import { hideLoading, showLoading } from 'react-redux-loading-bar';

export default function asyncPopulateUsersAndThreads() {
  return async (dispatch) => {
    dispatch(showLoading())
    try {
      const users = await api.getAllUsers();
      const threads = await api.getAllThreads();
      dispatch(receiveUsersActionCreator(users));
      dispatch(receiveThreadsActionCreator(threads));
    } catch (error) {
      alert(error.message);
    }
    dispatch(hideLoading())
  };
}


