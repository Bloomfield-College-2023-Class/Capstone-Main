import React from 'react'
import { Link } from "react-router-dom";
function Profile () {
return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh'}}>
    <div>
        <h1>Profile</h1>
        <h2><a href="/Personal Information">Personal Information</a></h2>
        <h2><a href="/Parking Tag">Parking Tag</a></h2>
        <h2><a href="/Vehicles">Vehicles</a></h2>
    </div>
    </div>
);

}

export default Profile;