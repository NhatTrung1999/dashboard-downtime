import { Box } from "@mui/material";
import React from "react";
import Lines from "./Lines";
import Content from "./Content";

export default function Dashboard() {
  return (
    <Box margin="30px">
      <Box width="100%">
        <Lines />
      </Box>
      <Box width="100%">
        <Content />
      </Box>
    </Box>
  );
}
