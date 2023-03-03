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
  Notifications,
  Message,
  Logout,
  DarkModeOutlined,
  LightModeOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setMode } from "state";

import { useContext } from "react";

const Navbar = () => {
  //Set the theme
  const theme = useTheme();
  const dispatch = useDispatch();

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
            {/* Messages */}
            <IconButton color="inherit" component={Link} to="/messages">
              <Message />
              Messages
            </IconButton>
            {/* Notifications */}
            <IconButton color="inherit" component={Link} to="/notifications">
              <Notifications />
              Notifications
            </IconButton>
            {/* Set the theme */}
            <IconButton onClick={() => dispatch(setMode())}>
              {/* Ternary operator for theme bellow */}
              {theme.palette.mode === "dark" ? (
                <DarkModeOutlined sx={{ fontSize: "25px" }} />
              ) : (
                <LightModeOutlined sx={{ fontSize: "25px" }} />
              )}
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", alignItems: "left" }}>
            {/* Logout button */}
            <IconButton component={Link} to="/login">
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

// chatgpt
//   <Box>
//   <AppBar position="static">
//     <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
//       <Box sx={{ display: "flex", alignItems: "center" }}>
//         {/* App name */}
//         <Typography variant="h3" color={"red"}>
//           Reservar
//         </Typography>
//         {/* Home */}
//         <IconButton color="inherit" component={Link} to="/home">
//           <Home />
//           Home
//         </IconButton>
//         {/* Messages */}
//         <IconButton color="inherit" component={Link} to="/messages">
//           <Message />
//           Messages
//         </IconButton>
//         {/* Notifications */}
//         <IconButton color="inherit" component={Link} to="/notifications">
//           <Notifications />
//           Notifications
//         </IconButton>
//         {/* Set the theme */}
//         <IconButton onClick={() => dispatch(setMode())}>
//           {/* Ternary operator for theme bellow */}
//           {theme.palette.mode === "dark" ? (
//             <DarkModeOutlined sx={{ fontSize: "25px" }} />
//           ) : (
//             <LightModeOutlined sx={{ fontSize: "25px" }} />
//           )}
//         </IconButton>
//       </Box>
//       <Box sx={{ display: "flex", alignItems: "center" }}>
//         {/* Logout button */}
//         <IconButton component={Link} to="/login">
//           <Logout />
//           Logout
//         </IconButton>
//       </Box>
//     </Toolbar>
//   </AppBar>
// </Box>
