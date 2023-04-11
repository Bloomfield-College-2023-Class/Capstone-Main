import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { DateTime } from 'luxon';
import { Container, Box, Typography, Button, TextField } from '@mui/material';
import axios from 'axios';
import { BASE_URL } from 'components/url';

const ParkingTag = () => {

  //get user info
  const userID = useSelector((state) => state.user.userID);

  //getter and setter for vehicle info
  const [licensePlate, setLicensePlate] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [color, setColor] = useState("");

  const addVehicle = async () => {
    try {
      await axios.post("${BASE_URL}/addCar", {
        userID: userID,
        licensePlate: licensePlate,
        make: make,
        model: model,
        color: color,
      });
      alert("Vehicle added successfully!");
    } catch (error) {
      alert(error.message);
    }
  };

  const tag = useSelector((state) => state.Tag);
  const [valid, setValid] = useState(false);
  const now = useState(DateTime.now());

  // Mock tag data
  const mockTag = {
    effective: DateTime.now().minus({ days: 1 }).toSQL(),
    expiration: DateTime.now().plus({ days: 30 }).toSQL(),
  };

  const dateValid = tag ? DateTime.fromSQL(tag.effective) : DateTime.fromSQL(mockTag.effective);
  const dateExpire = tag ? DateTime.fromSQL(tag.expiration) : DateTime.fromSQL(mockTag.expiration);

  useEffect(() => {
    if ((tag !== " " && now > dateExpire) || (tag !== " " && now < dateValid)) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [tag, now, dateExpire, dateValid]);

  return (
    <Container maxWidth="sm">
    <Box my={4}>
      <Typography variant="h4" mb={2}>
        Is the Pass Valid?
      </Typography>
      {valid ? (
        <Typography variant="h5" mb={2} color="success.main">
          True
        </Typography>
      ) : (
        <Typography variant="h5" mb={2} color="error.main">
          False
        </Typography>
      )}
      <Typography variant="h6" mb={2}>
        Effective Date: {dateValid.toFormat("MMMM dd, yyyy")}
      </Typography>
      <Typography variant="h6" mb={2}>
        Expiration Date: {dateExpire.toFormat("MMMM dd, yyyy")}
      </Typography>
      <Button variant="contained" color="primary" onClick={() => {}}>
        Purchase
      </Button>
    </Box>
    <Box my={4}>
        <Typography variant="h4" mb={2}>
          Add Vehicle
        </Typography>
        <form>
          <TextField
            label="License Plate"
            fullWidth
            color='warning'
            variant="outlined"
            value={licensePlate}
            onChange={(e) => setLicensePlate(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Make"
            fullWidth
            color='warning'
            variant="outlined"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Model"
            fullWidth
            color='warning'
            variant="outlined"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Color"
            fullWidth
            color='warning'
            variant="outlined"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            margin="normal"
          />
          <Box mt={2}>
            <Button variant="contained" color="primary" onClick={addVehicle}>
              Add Vehicle
            </Button>
          </Box>
        </form>
      </Box>
  </Container>
  );
};

export default ParkingTag;

{/* <div>
      <h1> Is the Pass Valid.</h1>
      {valid ? <h1>True</h1> : <h1>False</h1>}
      <button>Purchase</button>
    </div> */}