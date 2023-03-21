import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setUser } from "state";
import axios from "axios";

const PersonalInformation = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.global.user);
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [password, setPassword] = useState(user.password);
    const [password2, setPassword2] = useState('');
    const [email, setEmail] = useState(user.email);
    const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
    const [userName, setUserName] = useState(user.username);

    const updateUser = async () => {
        if (password == password2) {
            try {
                const response = await axios.patch('http://localhost:8080/updateUser', {
                    username: userName,
                    userID: user.userID,
                    password: password,
                    phoneNumber: phoneNumber,
                    email: email,
                    firstName: firstName,
                    lastName: lastName,
                    userType: user.userType
                }
                )
                alert("update successful")
            } catch (error) {
                alert(error.message)
            }

        } else {
            alert("passwords must match")
        }
    }

    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>  
            <div>
                <h1>Personal Information</h1>

                <h2>User Name</h2>
                <input type="text"
                className= "input" value={userName} onChange={(e) => setUserName(e.target.value)} />

                <h2>User ID</h2>
                <h2>{user.userID}</h2>

                <h2> First Name</h2>
                <input type="text"
                className= "input" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                <h2> First Name</h2>
                <input type="text"
                className= "input" value={firstName} onChange={(e) => setFirstName(e.target.value)} />

                <h2> Last Name</h2>
                <input type="text"
                className= "input" value={lastName} onChange={(e) => setLastName(e.target.value)} />

                <h2> Email</h2>
                <input type="text"
                className= "input"
                 value={email} 
                 onChange={(e) => setEmail(e.target.value)}></input>

                <h2> Phone Number</h2>
                <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required
                value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}>
                </input>

                <h2>user Type</h2>
                <h2>{user.userType}</h2>

                <h2>Password</h2>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>

                <h2>Confirm Password</h2>
                <input type="password" value={password2} onChange={(e) => setPassword2(e.target.value)}></input>
                <br/>
                <button onClick={updateUser}>Update</button>

            </div>
        </div>
    );
}

export default PersonalInformation;
