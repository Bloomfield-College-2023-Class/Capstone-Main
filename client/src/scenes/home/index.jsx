import React from "react";
import {useSelector} from "react-redux";
import {Grid, Typography} from "@mui/material";
import PieChart from "../../components/PieChart";

const Home = () => {
  // Signing the user out
  const user = useSelector((state) => state.user);

  const data = [{
    "id": "free",
    "label": "Free",
    "value": 80,
    "color": "hsl(111, 70%, 50%)"
  }, {
    "id": "used",
    "label": "Used",
    "value": 20,
    "color": "hsl(214, 70%, 50%)"
  }]

  return (
    <div style={{flexGrow: 1, padding: '16px'}}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h2" align="center" gutterBottom>
            Welcome to Parking App, {user.firstName}
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Typography variant="h3" align="center" marginBottom={"50px"}>
            Parking Lot Availability
          </Typography>
          <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: '16px',
          }}>
            <div style={{textAlign: 'center', fontSize: "24px", width: "600px", height: "600px"}}>
              Liberty Street
              <PieChart data={data}/>
            </div>

            <div style={{textAlign: 'center', fontSize: "24px", width: "600px", height: "600px"}}>
              Spruce Street
              <PieChart data={data}/>
            </div>

            <div style={{textAlign: 'center', fontSize: "24px", width: "600px", height: "600px"}}>
              College Hall
              <PieChart data={data}/>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
