import { Typography, Box } from "@mui/material";

// Reusable header component

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