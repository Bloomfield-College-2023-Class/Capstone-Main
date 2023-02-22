import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { themeSettings } from "theme";
import Login from "scenes/login"
import Home from "scenes/homePage";
import Register from "scenes/register";
import History from "scenes/history";
import ParkingTag from "scenes/parkingTag";
import Vehicles from "scenes/vehicles";

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
          <Routes>
            <Route path="/" element={ <Navigate to="/login" />} />
            <Route path="/home" element= { <Home /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/register" element= { <Register /> } />
            <Route path="/history" element= { <History /> } />
            <Route path="/parkingTag" element= { <ParkingTag /> } />
            <Route path="/vehicles" element={ <Vehicles /> } /> 
          </Routes>
        </ThemeProvider>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
