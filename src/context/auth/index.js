import React, { createContext, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import * as actions from '../../store/modules/auth/actions';
import * as globalActions from '../../store/modules/global/actions';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const { user, token } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const location = useLocation();
  const { from } = location.state || '/user';

  const loginUser = useMemo(
    () =>
      async ({ email, password }) => {
        dispatch(
          globalActions.dispatchAction(actions.loginRequest, {
            user: { email, password },
            from,
          })
        );
      },
    [dispatch, from]
  );

  const updateUser = useMemo(
    () => async (newUserData) => {
      dispatch(
        globalActions.dispatchAction(actions.updateRequest, {
          user: newUserData,
          oldToken: token,
        })
      );
    },
    [dispatch, token]
  );

  const context = useMemo(
    () => ({
      loginUser,
      updateUser,
      user,
      token,
    }),
    [loginUser, updateUser, user, token]
  );

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};
