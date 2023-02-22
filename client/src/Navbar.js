import {Link} from "react-router-dom"
function Navbar () {
    return (

     <nav className="nav">
        <ul>
            <li> <Link to="/" className="site-title">Home</Link> </li>
            <li> <Link to="/Messages" className="site-title">Messages</Link></li>
            <li><Link to="/Notification"  className="site-title">Notifications</Link> </li>
      
        </ul>
    </nav>
    )
}

export default Navbar
