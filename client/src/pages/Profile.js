import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Box, Typography, Button } from '@mui/material';

const Profile = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm">
      <Box textAlign="center" my={4}>
        <Typography variant="h4" mb={4}>
          Profile
        </Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => navigate('/personalinformation')}
          sx={{ mb: 2 }}
        >
          Personal Information
        </Button>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => navigate('/parkingTag')}
          sx={{ mb: 2 }}
        >
          Parking Tag
        </Button>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => navigate('/vehicles')}
          sx={{ mb: 2 }}
        >
          Vehicles
        </Button>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => navigate('/history')}
        >
          History
        </Button>
      </Box>
    </Container>
  );
};

export default Profile;

