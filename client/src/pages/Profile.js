import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>PROFILE</h1>
            <button onClick={() => navigate("/personalinformation")}>Personal Information</button><br/>
            <button onClick={() => navigate("/parkingTag")}>Parking Tag</button><br/>
            <button onClick={(_ => navigate("/vehicles"))}>Vehicles</button><br/>
        </div>
    )
}

export default Profile