import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
  useTheme,
} from "@mui/material";
import {
  Home,
  Message,
  Notifications,
  Logout,
  DarkMode,
  Settings,
  LightMode,
  AccountBox,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout, setMode } from "state";
import axios from "axios";
import { BASE_URL } from "./url";




const Navbar = ({ isLoggedIn }) => {
  //Set the theme
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/logout`, { withCredentials: true });
      console.log(response.data);
      dispatch(logout())
    } catch (error) {
      console.error(error);
    }
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <Box>
      <AppBar position="static">
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box>
            {/* App name */}
            <Typography variant="h3" color={"red"}>
              Reservar
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {/* Home */}
            <IconButton color="inherit" component={Link} to="/home">
              <Home />
              Home
            </IconButton>
            {/* Notifications */}
            <IconButton color="inherit" component={Link} to="/notifications" sx={{marginRight: '20px'}}>
              <Notifications />
              Notifications
            </IconButton>
            {/* Profile */}
            <IconButton color="inherit" component={Link} to="/profile" sx={{marginRight: '20px'}}>
              <AccountBox />
              Profile
            </IconButton>
            {/* Settings */}
            <IconButton color="inherit" component={Link} to="/settings" sx={{marginRight: '20px'}}>
              <Settings />
              Settings
            </IconButton>
            {/* Set the theme */}

             {/* To buy a parkingTag */}
             <IconButton color="inherit" component={Link} to="/ParkingActions" sx={{marginRight: '20px'}}>
              <parkingActions/>
              parkingActions
            </IconButton>

            <IconButton onClick={() => dispatch(setMode())}>
              {/* Ternary operator for theme bellow */}
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ fontSize: "25px" }} />
              )}
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", alignItems: "left" }}>
            {/* Logout button */}
            <IconButton component={Link} to="/login" onClick={handleLogout}>
              <Logout />
              Logout
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;

// <nav className="nav">
//     <ul>
//         <li> <Link to="/" className="site-title">Home</Link> </li>
//         <li> <Link to="/Messages" className="site-title">Messages</Link></li>
//         <li><Link to="/Notification"  className="site-title">Notifications</Link> </li>
//     </ul>
// </nav>

// my code
//  <AppBar position="static">
//   <Toolbar>
//     {/* App name */}
//     <Typography variant="h3" color={"red"}>
//       Reservar
//     </Typography>
//     {/*  */}
//     <IconButton color="inherit" component={Link} to="/home">
//       <Home />
//       Home
//     </IconButton>
//     {/* Messages */}
//     <IconButton color="inherit" component={Link} to="/messages">
//       <Message />
//       Messages
//     </IconButton>
//     {/* Notifications */}
//     <IconButton color="inherit" component={Link} to="/notifications">
//       <Notifications />
//       Notifications
//     </IconButton>
//     {/* Set the theme */}
//     <IconButton onClick={() => dispatch(setMode())}>
//       {/* Ternary operator for theme bellow */}
//       {theme.palette.mode === "dark" ? (
//         <DarkModeOutlined sx={{ fontSize: "25px" }} />
//       ) : (
//         <LightModeOutlined sx={{ fontSize: "25px" }} />
//       )}
//     </IconButton>
//     {/* Logout button */}
//     <IconButton component={Link} to="/login">
//       <Logout />
//       Logout
//     </IconButton>
//   </Toolbar>
// </AppBar>

