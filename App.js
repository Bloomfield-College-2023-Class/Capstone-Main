
import {Route, Routes} from 'react-router-dom';
import Navbar from "./Navbar";
import './App.css';
import Home from './pages/Home';
import Messages from'./pages/Messages';
import Notification from './pages/Notification';

function App() {


  return (
   <>
    <Navbar/>
    <div className="App">

      <Routes> 
      <Route path= "/" element={ <Home/> }/>
      <Route path= "/Messages" element={ <Messages/> }/>
      <Route path= "/Notification" element={ <Notification/> }/>
      </Routes>

    </div>
  </>
  );
}

export default App;
