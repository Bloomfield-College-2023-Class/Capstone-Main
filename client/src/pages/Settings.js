import React from "react";
import { useNavigate } from "react-router-dom";

const Settings = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1>SETTINGS</h1><br/>
            <button onClick={() => navigate("/profile")}>Profile</button><br/>
            <button onClick={() => navigate("/notifications")}>Notifications</button><br/>
            <button onClick={(_ => navigate("/history"))}>History</button><br/>
        </div>
    )
}

export default Settings