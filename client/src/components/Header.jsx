import { Typography, Box } from "@mui/material";

// Reusable header component so that we can now what page we are in

const Header = ({ tittle, subtittles }) => {

  return (
    <Box mb="30px">
      <Typography
        variant="h2"
        fontWeight="bold"
        sx={{ mb: "5px" }}
      >
        {tittle}
      </Typography>

      <Typography variant="h5">
        {subtittles}
      </Typography>
    </Box>
  );
};

export default Header;