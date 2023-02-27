import React, { createContext, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import * as actions from '../../store/modules/auth/actions';
import * as globalActions from '../../store/modules/global/actions';
import axios from '../../services/axios';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const { user, accessToken, refreshToken, isAuthenticated } = useSelector(
    (state) => state.authReducer
  );

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
          accessToken,
          refreshToken,
        })
      );
    },
    [dispatch, accessToken, refreshToken]
  );

  const refreshUserToken = useMemo(async () => {
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
  }, [dispatch, refreshToken, user]);

  axios.interceptors.request.use(
    (config) => {
      if (['post', 'put', 'patch', 'delete'].includes(config.method)) {
        axios.defaults.headers.post['Content-Type'] =
          'application/json;charset=utf-8';
        if (accessToken)
          axios.defaults.headers.Authorization = `Bearer ${accessToken}`;
      }

      return config;
    },
    (error) => Promise.reject(error)
  );

  axios.interceptors.response.use(
    (response) => response,

    async (error) => {
      const statusList = [401, 404];
      console.log(error);
      if (statusList.includes(error.response.status)) {
        const { access, refresh } = await refreshUserToken();

        const { responseURL } = error.request;
        const { method, data } = error.config;

        try {
          axios({
            method,
            url: responseURL,
            data,
          });
        } catch (err) {
          console.log(err);
        }

        return { access, refresh };
      }

      return Promise.reject(error);
    }
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
  children: PropTypes.shape().isRequired,
};
