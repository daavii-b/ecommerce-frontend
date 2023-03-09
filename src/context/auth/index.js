import React, { createContext, useMemo, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import * as actions from '../../store/modules/auth/actions';
import axios from '../../services/axios';

export const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  const { user, accessToken, refreshToken, isAuthenticated } = useSelector(
    (state) => state.authReducer
  );

  const dispatch = useDispatch();
  const location = useLocation();
  const { from } = location.state || '/user';

  const loginUser = useMemo(
    () =>
      ({ email, password }) => {
        dispatch(
          actions.loginRequest({
            user: { email, password },
            from,
          })
        );
      },
    [dispatch, from]
  );

  const updateUser = useMemo(
    () => (newUserData) => {
      dispatch(
        actions.updateRequest({
          user: newUserData,
          accessToken,
          refreshToken,
        })
      );
    },
    [dispatch, accessToken, refreshToken]
  );

  // eslint-disable-next-line no-unused-vars
  const refreshUserToken = useMemo(
    () => async () => {
      try {
        const response = await axios.post('tokens/refresh/', {
          refresh: refreshToken,
        });

        const { access, refresh } = response.data;

        dispatch(
          actions.refreshUserToken({
            accessToken: access,
            refreshToken: refresh,
            user,
          })
        );

        return { access, refresh };
      } catch (err) {
        return err;
      }
    },
    [dispatch, refreshToken, user]
  );

  const context = useMemo(
    () => ({
      loginUser,
      updateUser,
      user,
      accessToken,
      isAuthenticated,
    }),
    [loginUser, updateUser, user, accessToken, isAuthenticated]
  );

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
