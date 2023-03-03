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
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifications" element={<Notification />} />
            <Route path="/parkingTag" element={<ParkingTag />} />
            <Route path="/vehicles" element={<Vehicles />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
