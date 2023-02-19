import React, { createContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import * as actions from '../../store/modules/auth/actions';
import * as globalActions from '../../store/modules/global/actions';

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const dispatch = useDispatch();
  const location = useLocation();
  const { from } = location.state || '/user';

  const loginUser = useMemo(
    () =>
      async ({ email, password }) => {
        try {
          dispatch(
            globalActions.dispatchAction(actions.loginRequest, {
              user: { email, password },
              from,
            })
          );
        } catch (err) {
          // eslint-disable-next-line no-alert
          alert(err);
        }
      },
    [dispatch, from]
  );

  const context = useMemo(
    () => ({
      loginUser,
    }),
    [loginUser]
  );

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.shape().isRequired,
};
