import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DateTime } from "luxon";
import axios from "axios";
import { setCars, addParked } from "../../state/index.js";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Container,
} from "@mui/material";
import { BASE_URL } from "components/url.js";

const History = () => {
  const [parkedCars, setParkedCars] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ParkedCars = useSelector((state) => state.parkedCars);
  const cars = useSelector((state) => state.cars);
  const userID = useSelector((state) => state.user.userID);

  const fetchCars = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/getCarsID`, {
        userID: userID,
      });
      await dispatch(setCars(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };

  const populateList = async (carID) => {
    try {
      const response = await axios.post(`${BASE_URL}/parked`, {
        carID: carID,
      });
      if (response.data.length > 0) {
        dispatch(addParked(response.data));
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        if (userID) {
          await fetchCars();

          if (cars && cars.length > 0) {
            for (const car of cars) {
              await populateList(car.carID);
            }
          }
        }
      } catch (error) {
        alert(error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h2" sx={{margin: "15px"}}>History</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>License</TableCell>
              <TableCell>Lot</TableCell>
              <TableCell>In</TableCell>
              <TableCell>Out</TableCell>
              <TableCell>Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ParkedCars
              ? ParkedCars.map((y) => (
                  <TableRow key={y.carID}>
                    <TableCell>{y.carID}</TableCell>
                    <TableCell>{y.parkingLotID}</TableCell>
                    <TableCell>{y.timeEntered}</TableCell>
                    <TableCell>{y.timeExited}</TableCell>
                    <TableCell>
                      {DateTime.fromISO(y.timeExited)
                        .diff(DateTime.fromISO(y.timeEntered, "months"))
                        .shiftTo("hours")
                        .toString()}
                    </TableCell>
                  </TableRow>
                ))
              : (
                  <TableRow>
                    <TableCell>No History</TableCell>
                  </TableRow>
                )}
          </TableBody>
        </Table>
      </TableContainer> 
    </Container>
  );
};

export default History;




// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { DateTime } from "luxon";
// import axios from "axios";
// import { setCars, addParked } from "../../state/index.js"
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
// } from '@mui/material';


// const History = () => {

//     const [parkedCars, setParkedCars] = useState([])
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const ParkedCars = useSelector((state) => state.parkedCars)
//     const cars = useSelector((state) => state.cars)
//     const userID = useSelector((state) => state.user.userID)

//     const fetchCars = async () => {
//         try{
//             const response = await axios.post('http://localhost:8080/getCarsID', {
//                 userID: userID
//             });
//             console.log("fetchingcars")
//             console.log(response.data)
//             await dispatch(setCars(response.data))
//             console.log("cars", cars)
//         } catch (error) {
//             alert(error.message)
//         }
//     }

//     const populateList = async (carID) => {
//         try {
//             console.log("cars passed")
//             console.log(carID)
//             const response = await axios.post('http://localhost:8080/parked', {
//                 carID: carID
//             });
//             console.log("records found")
//             console.log(response)
//             if (response.data.length > 0)
//                 {
//                     console.log("maybe")
//                     dispatch(addParked(response.data))
//                     console.log("success?", parkedCars)
//                 }
//         } catch (error) {
//             alert(error.message )
//         }
//     }

//     useEffect(() => {
//         setParkedCars(parkedCars)
//     }, [parkedCars])

//     useEffect(() => {
//         console.log("cars changed:", cars);
//       }, [cars]);

//     useEffect(() => {
//         console.log("parkedcars changed:", parkedCars)
//     }, [parkedCars])

    
//     useEffect(() => {
//         async function fetchData() {
//             try {
//                 if (userID) {
//                     console.log("start");
//                     await fetchCars();
//                 }
//             } catch (error) {
//                 alert(error.message);
//             }
//         }
        
//         fetchData();
//     }, [userID]);
    
//     useEffect(() => {
//         async function fetchpt2() {
//             try {
//                 console.log("car list");
//                     console.log(cars);
//                     if (cars && cars.length > 0) {
//                         for (const car of cars) {
//                             await populateList(car.carID);
//                         }
//                     }
//                     console.log("final parked cars");
//                     console.log(ParkedCars);
//             } catch (error) {
//                 alert(error.message)
//             }
//         }
//         fetchpt2();
//     }, [cars])

//     return (
//       <div>
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>License</TableCell>
//                 <TableCell>Lot</TableCell>
//                 <TableCell>In</TableCell>
//                 <TableCell>Out</TableCell>
//                 <TableCell>Duration</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {ParkedCars
//                 ? ParkedCars.map((y) => (
//                     <TableRow key={y.carID}>
//                       <TableCell>{y.carID}</TableCell>
//                       <TableCell>{y.parkingLotID}</TableCell>
//                       <TableCell>{y.timeEntered}</TableCell>
//                       <TableCell>{y.timeExited}</TableCell>
//                       <TableCell>
//                         {DateTime.fromISO(y.timeExited)
//                           .diff(DateTime.fromISO(y.timeEntered, 'months'))
//                           .shiftTo('hours')
//                           .toString()}
//                       </TableCell>
//                     </TableRow>
//                   ))
//                 : (
//                     <TableRow>
//                       <TableCell>No History</TableCell>
//                     </TableRow>
//                   )}
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <Button variant="contained" color="primary" style={{ marginTop: '16px' }}>
//           Add Vehicle
//         </Button>
//       </div>
//     );
    
// }

// export default History;

// return (
//   <div>
//       <table>
//           <thead>
//           <tr>
//               <th>license</th>
//               <th>Lot</th>
//               <th>In</th>
//               <th>Out</th>
//               <th>duration</th>
//           </tr>
//           </thead>
//           <tbody>
//               {ParkedCars ? ParkedCars.slice().map(y => {
//                   return (
//                       <tr key={y.carID}>
//                           <td>{ y.carID }</td>
//                           <td>{ y.parkingLotID }</td>
//                           <td>{ y.timeEntered }</td>
//                           <td>{ y.timeExited }</td>
//                           <td>{ 
//                               DateTime.fromISO(y.timeExited).diff(DateTime.fromISO(y.timeEntered, 'months')).shiftTo('hours').toString()
//                           }</td>
//                           <td></td>
//                       </tr>
//                   )
//               }) : 
//               <tr>
//                   <td>No History</td>
//               </tr>}
//           </tbody>
//       </table>
//       <button>Add Vehicle</button>
//   </div>
// )