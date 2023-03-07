import React, { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCars } from "../../state/index.js"
import axios from "axios";


const Vehicles = () => {
    const dispatch = useDispatch();
    const Car = useSelector((state) => state.global.cars)
    const userID = useSelector((state) => state.global.user.userID)

    const [ignored, forceUpdate] = useReducer(x => x+1, 0)
    const [, updateState] = React.useState();
    const forceUpdate2 = React.useCallback(() => updateState({}), []);

    const fetchCars = async () => {
        try{
            console.log(userID)
            const response = await axios.post('http://localhost:8080/getCarsID', {
                userID: userID
            });
            console.log(response)
            await dispatch(setCars(response.data))
            forceUpdate()
            console.log("end3", Car)
        } catch (error) {
            alert(error.message)
        }
    }

    useEffect(() => {
        if (userID) {
            fetchCars();
            forceUpdate2();
            console.log("end", Car)
        }
    }, [userID])

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>License</th>
                        <th>Make</th>
                        <th>Model</th>
                        <th>Color</th>
                    </tr>
                </thead>
                <tbody>
                    {Car ? Car.map(x => {
                        return(
                            <tr key={x.carId}>
                                <td>{x.licensePlate}</td>
                                <td>{x.make}</td>
                                <td>{x.model}</td>
                                <td>{x.color}</td>
                            </tr>
                        ) 
                    }) : 
                    <tr>
                    <td>
                        no cars
                    </td>
                </tr>}
                </tbody>
            </table>
            <button>Add Vehicle</button>
        </div>
    )
}

export default Vehicles;
