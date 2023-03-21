import { Navigate, useOutlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import jwt_decode from "jwt-decode";
import moment from "moment";

export const ProtectedLayout = () => {
  const { userToken, logout } = useAuth();
  const outlet = useOutlet();

  if (!userToken) {
    return <Navigate to="/login" />;
  }
  else if(!moment.unix(jwt_decode(userToken).exp).isAfter(moment())){
    logout();
  }

  return (
    <div>
      {outlet}
    </div>
  );
};

export const HomeLayout = () => {
  const { userToken } = useAuth();
  const outlet = useOutlet();
  if (userToken) {
    return <Navigate to="/" />;
  }

  return (
    <div>
       {outlet}
    </div>
  )
};