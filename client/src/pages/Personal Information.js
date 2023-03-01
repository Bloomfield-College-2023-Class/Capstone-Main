import React from "react";
import { Link } from "react-router-dom";


function PersonalInformation () {
return (
    
      
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>  
    <div>
       <h1>Personal Information</h1>

        <h2> Full Name</h2>
        <input type="text"
        class= "input" value="John Smith"/>

       <h2> Email</h2>
        <input type="text"
        class= "input"
         value="example@gmail.com"></input>

        <h2> Phone Number</h2>
        <input type="tel" id="phone" name="phone" placeholder="123-445-6789" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required>
        </input>

        <h2>Password</h2>
        <input type="password" placeholder="Password"></input>

        <h2>Confirm Password</h2>
        <input type="password" placeholder="Confirm Password"></input>
        

    </div>
    </div>
);

}

export default  PersonalInformation;