import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, children }) => {
  //If the user is not logged in then send it to default route which is login
  if ( !isLoggedIn ) {
    return <Navigate to={"/"} replace/>
  }
  //If the user is logged in then return the children
  return children;
}

export default ProtectedRoute;
