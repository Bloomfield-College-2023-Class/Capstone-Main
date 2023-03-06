import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { themeSettings } from "theme";
import Register from "scenes/register";
//import History from "scenes/history";
import ParkingTag from "scenes/parkingTag";
import Vehicles from "scenes/vehicles";
import Home from "./scenes/home";
import Messages from "./pages/Messages";
import Notification from "./pages/Notification";
import Navbar from "./components/Navbar";
import Login from "./scenes/login";
import ProtectedRoute from "components/ProtectedRoute";

function App() {
  //Gets theme mode either dark or light
  const mode = useSelector((state) => state.global.mode);
  //Sets the MUI theme
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  const isLoggedIn = useSelector((state) => state.global.isLoggedIn);
  console.log(isLoggedIn)
  // Bellow we will set up some routes
  return (
    <div className="app">
      <BrowserRouter>
        {/* Give theme to MUI */}
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar isLoggedIn={isLoggedIn}/>
          <Routes>

            {/* There routes are unprotected because this is just register and login */}
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Home route is protected */}
            <Route path="/home" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Home />
              </ProtectedRoute>} />
            
            {/* Messages Route is Protected */}
            <Route path="/messages" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Messages />
              </ProtectedRoute>} />

            {/* Notifications Route is Protected */}
            <Route path="/notifications" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Notification />
              </ProtectedRoute> } />
          
            <Route path="/parkingTag" element={<ParkingTag />} />
            <Route path="/vehicles" element={<Vehicles />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
