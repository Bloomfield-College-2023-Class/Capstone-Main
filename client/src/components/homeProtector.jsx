import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HomeProtector = ({ isLoggedIn, children }) => {
  const user = useSelector((state) => state.global.user)
  console.log(user)
  // If the user is not logged in, redirect to login
  if (!isLoggedIn) {
    return <Navigate to={"/"} replace />;
  } else if (user && user.userType == "admin") {
    // If the user is logged in but doesn't have the required user type,
    // redirect to a different route (e.g. home)
    return <Navigate to={"/admin"} replace />;
  }

  // If the user is logged in and has the required user type, allow access
  return children;
};

export default HomeProtector;
