import * as R from 'ramda';
import { createSlice } from '../lib/redux-slice';

export const auth = createSlice({
  initialState: {user: null},
  reducers: {
    signin: (state, { payload: { user } }) => R.assoc('user', user, state),
    signout: state => R.assoc('user', null, state)
  }
});
