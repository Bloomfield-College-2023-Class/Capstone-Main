import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { themeSettings } from "theme";
import Authenticate from "scenes/authenticate"
import Home from "scenes/homePage";
import Register from "scenes/register";

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
            <Route path="/" element={ <Navigate to="/authenticate" />} />
            <Route path="/home" element= { <Home /> } />
            <Route path="/authenticate" element={ <Authenticate /> } />
            <Route path="/register" element= { <Register /> } />
          </Routes>
        </ThemeProvider>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
