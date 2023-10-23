import React from "react";
import { Box, Divider } from "@mui/material";
import OpenRequests from "./OpenRequests";
import InProcess from "./InProcess";

export default function MaintenanceQueue() {
  return (
    <Box
      border="1px solid #ccc"
      borderRadius="20px"
      padding="15px"
      margin="10px"
    >
      <Box>Maintenance Queue</Box>
      <Box>
        <OpenRequests />
      </Box>
      <Divider sx={{ border: "1px solid black" }} />
      <Box>
        <Box>In Process</Box>
        <InProcess />
      </Box>
    </Box>
  );
}
