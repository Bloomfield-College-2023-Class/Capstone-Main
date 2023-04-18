import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@mui/material";
import PieChart from "../../components/PieChart";
import axios from "axios";
import { BASE_URL } from "components/url";

const Home = () => {
  // Signing the user out
  const user = useSelector((state) => state.user);

  const [parkingLot, setParkingLot] = React.useState([]);

  const getParkingLotData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/getLots`);
      setParkingLot(response.data);
      console.log(response.data);
    } catch (error) {
      alert(error + " could not get data.");
    }
  };

  useEffect(() => {
    getParkingLotData();
  }, []);

  const dataLot1 =
    parkingLot.length > 0
      ? [
          {
            id: "free",
            label: "Free",
            value: parkingLot[0].numberOfSpots,
            color: "hsl(111, 70%, 50%)",
          },
          {
            id: "Total",
            label: "Total",
            value: 30,
            color: "hsl(214, 70%, 50%)",
          },
        ]
      : [];

  const dataLot2 =
    parkingLot.length > 1
      ? [
          {
            id: "free",
            label: "Free",
            value: parkingLot[1].numberOfSpots,
            color: "hsl(111, 70%, 50%)",
          },
          {
            id: "Total",
            label: "Total",
            value: 30,
            color: "hsl(214, 70%, 50%)",
          },
        ]
      : [];

  const dataLot3 =
    parkingLot.length > 2
      ? [
          {
            id: "Total",
            label: "Total",
            value: parkingLot[2].numberOfSpots,
            color: "hsl(111, 70%, 50%)",
          },
          {
            id: "used",
            label: "Used",
            value: 30,
            color: "hsl(214, 70%, 50%)",
          },
        ]
      : [];

      console.log(dataLot1, dataLot2, dataLot3);
  return (
    <div style={{ flexGrow: 1, padding: "16px" }}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h2" align="center" gutterBottom>
            Welcome to Reservar App, {user.firstName}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h3" align="center" marginBottom={"50px"}>
            Parking Lot Availability
          </Typography>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: "16px",
            }}
          >
            <div
              style={{
                textAlign: "center",
                fontSize: "24px",
                width: "600px",
                height: "600px",
              }}
            >
              Liberty Street
              <PieChart data={dataLot1} />
            </div>

            <div
              style={{
                textAlign: "center",
                fontSize: "24px",
                width: "600px",
                height: "600px",
              }}
            >
              Spruce Street
              <PieChart data={dataLot2} />
            </div>

            <div
              style={{
                textAlign: "center",
                fontSize: "24px",
                width: "600px",
                height: "600px",
              }}
            >
              College Hall
              <PieChart data={dataLot3} />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;