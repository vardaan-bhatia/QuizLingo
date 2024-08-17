import React from "react";
import { CircularProgress, Box, Typography } from "@mui/material";

const Loader: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress color="primary" size={60} /> {/* Spinning loader */}
      <Typography variant="h6" sx={{ marginTop: "1rem", color: "#555" }}>
        Loading...
      </Typography>
    </Box>
  );
};

export default Loader;
