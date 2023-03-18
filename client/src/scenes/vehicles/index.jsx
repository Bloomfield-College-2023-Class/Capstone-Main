import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCars } from "../../state/index.js"
import axios from "axios";
import { Container, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";

const Vehicles = () => {
    const dispatch = useDispatch();
    const Car = useSelector((state) => state.cars)
    const userID = useSelector((state) => state.user.userID)

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
            <button>Add Vehicle</button>
        </div> */}