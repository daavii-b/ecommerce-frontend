import React from 'react';

import { useDispatch } from 'react-redux';
import Loading from '../../components/Loading';

import * as actions from '../../store/modules/auth/actions';

export default function Logout() {
  const dispatch = useDispatch();

  dispatch(
    actions.logoutRequest({ response: { status: 0, userLogout: true } })
  );

  return <Loading isLoading />;
}
