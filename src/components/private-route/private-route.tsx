import {Navigate} from 'react-router-dom';
import {AuthorizationStatus} from '../../consts/authorization-status';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {authorizationStatus, children} = props;
  const hasAccess = authorizationStatus === AuthorizationStatus.Auth;

  return hasAccess ? children : <Navigate to={'/login'} />;
}

export default PrivateRoute;
