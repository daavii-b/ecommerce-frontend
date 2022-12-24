import { useDispatch } from 'react-redux';
import * as actions from '../../store/modules/auth/actions';
import * as globalActions from '../../store/modules/global/actions';

export default function Logout() {
  const dispatch = useDispatch();
  dispatch(globalActions.dispatchAction(actions.logoutRequest));
}
