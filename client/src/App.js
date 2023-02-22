import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { themeSettings } from "theme";
import Register from "scenes/register";
import History from "scenes/history";
import ParkingTag from "scenes/parkingTag";
import Vehicles from "scenes/vehicles";
import Home from './pages/Home';
import Messages from'./pages/Messages';
import Notification from './pages/Notification';
import Navbar from "./Navbar";

function App() {
  
  const mode = useSelector((state) => state.global.mode)
  const theme = useMemo( () => createTheme(themeSettings(mode)), [mode] )

  // Bellow we will set up some routes
  return (
    <div className="app">
       
      <BrowserRouter>
        {/* Give theme to MUI */}
        <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar/>
          <Routes>
            <Route path="/" element={ <Navigate to="/authenticate" />} />
            <Route path= "/home" element={ <Home/> }/>
            <Route path= "/Messages" element={ <Messages/> }/>
            <Route path= "/Notification" element={ <Notification/> }/>
            <Route path="/login" element={ <Login /> } />
            <Route path="/register" element= { <Register /> } />
            {/* <Route path="/history" element= { <History /> } /> */}
            <Route path="/parkingTag" element= { <ParkingTag /> } />
            <Route path="/vehicles" element={ <Vehicles /> } /> 
          </Routes>
        </ThemeProvider>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
