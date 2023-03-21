import React, { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCars } from "../../state/index.js"
import axios from "axios";


const Vehicles = () => {
    const dispatch = useDispatch();
    const Car = useSelector((state) => state.global.cars)
    const userID = useSelector((state) => state.global.user.userID)

    const [selectedCar, setSelectedCar] = useState('')
    const [addCar, setAddCar] = useState(false);
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

    const addCars = async () => {
        try {
            const response = await axios.post('http://localhost:8080/import',
            {
                userID: userID,
                color: selectedCar.color,
                make: selectedCar.make,
                model: selectedCar.model,
                licensePlate: selectedCar.licensePlate
            })
        } catch (error) {
            alert(error.message);
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
            <button onClick={() => setAddCar(!addCar)}>Add Vehicle</button>

            {addCar ? 
                <table>
                <thead>
                <tr>
                    <th>Car ID</th>
                    <th>Owner ID</th>
                    <th>Color</th>
                    <th>Make</th>
                    <th>Model</th>
                    <th>License</th>
                    <th>Confirm</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>
                    <p>auto</p>
                    </td>
                    <td>
                    <p>{userID}</p>
                    </td><td>
                    <input 
                        type="text" 
                        className="input" 
                        value={selectedCar.color} 
                        onChange={(e) => setSelectedCar({ ...selectedCar, color: e.target.value })}
                    />
                    </td><td>
                    <input 
                        type="text" 
                        className="input" 
                        value={selectedCar.make} 
                        onChange={(e) => setSelectedCar({ ...selectedCar, make: e.target.value })}
                    />
                    </td><td>
                    <input 
                        type="text" 
                        className="input" 
                        value={selectedCar.model} 
                        onChange={(e) => setSelectedCar({ ...selectedCar, model: e.target.value })}
                    />
                    </td><td>
                    <input 
                        type="text" 
                        className="input" 
                        value={selectedCar.licensePlate} 
                        onChange={(e) => setSelectedCar({ ...selectedCar, licensePlate: e.target.value })}
                    />
                    </td>
                    <td>
                    <button onClick={() => addCars()}>
                            Add
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
            : <div />}
        </div>
    )
}

export default Vehicles;
