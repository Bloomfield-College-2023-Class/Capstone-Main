import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { themeSettings } from "theme";
import Register from "scenes/register";
import History from "scenes/history";
import ParkingTag from "scenes/parkingTag";
import Vehicles from "scenes/vehicles";
import Home from "./scenes/home";
import Messages from "./pages/Messages";
import Notification from "./pages/Notification";
import Navbar from "./components/Navbar";
import Login from "./scenes/login";
import ProtectedRoute from "components/ProtectedRoute";
import PersonalInformation from "pages/personalInformation";
import Settings from "pages/Settings"
import Profile from "pages/Profile"
import Admin from "pages/Admin";
import parkingActions from "pages/parkingActions";
import HomeProtector from "components/homeProtector";
import CreateNotification from "pages/CreateNotification";

function App() {
  //Gets theme mode either dark or light
  const mode = useSelector((state) => state.mode);
  //Sets the MUI theme
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const user = useSelector((state) => state.user)

  console.log(user)
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
            {/*<Route path={"/home"} element={<Home/> }/>*/}
            {/* Home route is protected */}
            {/* <Route path="/home" element={
              <HomeProtector isLoggedIn={isLoggedIn} user={user}>
                <Home />
              </HomeProtector>} /> */}
            
            {/* Messages Route is Protected */}
            <Route path="/messages" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Messages />
              </ProtectedRoute>} />

            {/* Notifications Route is Protected */}
            {/* <Route path="/notifications" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Notification />
            </ProtectedRoute> } />*/}

              <Route path="/history" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <History />
              </ProtectedRoute> } />

              <Route path="/parkingTag" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <ParkingTag />
              </ProtectedRoute> } />

              <Route path="/vehicles" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Vehicles />
              </ProtectedRoute> } />

              <Route path="/personalinformation" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <PersonalInformation />
              </ProtectedRoute> } />

              <Route path="/settings" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Settings />
              </ProtectedRoute> } />

              <Route path="/profile" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Profile />
              </ProtectedRoute> } />

              <Route path="/admin" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Admin />
              </ProtectedRoute> } />

              <Route path="/parkingActions" element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <parkingActions/>
              </ProtectedRoute> } />

            <Route path="/home" element={<Home />} />
            <Route path="/history" element={<History />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/notifications" element={<Notification />} />
            <Route path="/parkingTag" element={<ParkingTag />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/personalinformation" element={<PersonalInformation />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/createnotification" element={<CreateNotification />} />
            <Route path ="/parkingActions" element={<parkingActions />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
