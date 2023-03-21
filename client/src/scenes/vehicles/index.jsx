import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCars } from "../../state/index.js"
import axios from "axios";
import { Container, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";

const Vehicles = () => {
    const dispatch = useDispatch();
    const Car = useSelector((state) => state.cars)
    const userID = useSelector((state) => state.user.userID)

    const [selectedCar, setSelectedCar] = useState('')
    const [addCar, setAddCar] = useState(false);
    const [ignored, forceUpdate] = useReducer(x => x+1, 0)
    const [, updateState] = React.useState();
    const forceUpdate2 = React.useCallback(() => updateState({}), []);

    const fetchCars = useCallback(async () => {
        try{
            console.log(userID)
            const response = await axios.post('http://localhost:8080/getCarsID', {
                userID: userID
            });
            console.log(response)
            dispatch(setCars(response.data))
            console.log("end3", Car)
        } catch (error) {
            alert(error.message)
        }
    }, [userID, dispatch, Car])

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
            console.log("end", Car)
        }
    }, [userID, fetchCars, Car])

    return(
      <Container maxWidth="md">
      <Box my={4}>
        <Typography variant="h4" mb={2}>
          Vehicles
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>License</TableCell>
                <TableCell>Make</TableCell>
                <TableCell>Model</TableCell>
                <TableCell>Color</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Car ? (
                Car.map((x) => {
                  return (
                    <TableRow key={x.carId}>
                      <TableCell>{x.licensePlate}</TableCell>
                      <TableCell>{x.make}</TableCell>
                      <TableCell>{x.model}</TableCell>
                      <TableCell>{x.color}</TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={4}>No cars</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <Box mt={2}>
          <Button variant="contained" color="primary" onClick={() => {}}>
            Add Vehicle
          </Button>
        </Box>
      </Box>
    </Container>
    )
}

export default Vehicles;


{/* <div>
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
            <button>Add Vehicle</button>
        </div> */}
