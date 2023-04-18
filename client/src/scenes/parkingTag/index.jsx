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
  const [addTag, setAdd] = useState(false);
  const [tag, setTag] = useState();
  const [valid, setValid] = useState(false);
  const now = useState(DateTime.now());
  const [effectiveDate, setEffectiveDate] = useState();
  const [expirationDate, setExpirationDate] = useState();
  const [purchaseEffective, setPurchaseEffective] = useState();
  const [purchaseExpiration, setPurchaseExpiration] = useState();

  const addVehicle = async () => {
    try {
      await axios.post(`${BASE_URL}/addCar`, {
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

  const addTags = async () => {
    try {
      await axios.post(`${BASE_URL}/addTag`, {
        userID: userID,
        effectiveDate: purchaseEffective,
        expirationDate: purchaseExpiration,
      })
      findTag();
      alert("Tag added")
    } catch(error) {
      alert(error.message);
    }
  }

  const findTag = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/getTagByID`, {
        userID: userID
      })
      console.log(response);
      setTag(response);
      setEffectiveDate(response.data[0].effectiveDate);
      setExpirationDate(response.data[0].expirationDate);
      console.log(response.data[0].effectiveDate)
      verify();
    } catch(error) {
      alert(error.message);
    }
  }

  const verify = () => {
    if ((tag !== " " && now > expirationDate) || (tag !== " " && now < effectiveDate)) {
      setValid(false);
    } else {
      setValid(true);
    }
  };

  useEffect(() => {
    findTag();
  }, [])

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
      {effectiveDate ? <Typography variant="h6" mb={2}>
        Effective Date: {effectiveDate}
      </Typography> : <Typography variant="h6" mb={2}>
        Effective Date: None
        </Typography>}
      { expirationDate ? <Typography variant="h6" mb={2}>
        Expiration Date: {expirationDate}
      </Typography> : <Typography variant="h6" mb={2}>
        Expiration Date: None
      </Typography> }
      <Button variant="contained" color="primary" onClick={() => setAdd(!addTag)}>
        Purchase
      </Button>
      {addTag ? (
        <Box>
          <form>
            <TextField
              label="Effective Date"
              fullWidth
              color="warning"
              variant="outlined"
              value={effectiveDate}
              onChange={(e) => setPurchaseEffective(e.target.value)}
              margin="normal"
            />
            <TextField
              label="Expiration Date"
              fullWidth
              color="warning"
              variant="outlined"
              value={expirationDate}
              onChange={(e) => setPurchaseExpiration(e.target.value)}
              margin="normal"
            />
            <Box mt={2}>
            <Button variant="contained" color="primary" onClick={addTags}>
              Add Tag
            </Button>
          </Box>
          </form>
        </Box>
      ) : (<Box />)}
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