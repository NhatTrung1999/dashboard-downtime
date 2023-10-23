import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function MachineHistory() {
  return (
    <Box
      //   border="1px solid #ccc"
      borderRadius="20px"
      padding="15px"
      margin="10px"
    >
      <Typography sx={{ textTransform: "uppercase", fontWeight: "bold" }}>
        search by machine id or filter by other criteria:
      </Typography>
      <Box display="flex" flexWrap="wrap" gap="10px">
        <TextField label="Machine ID" variant="outlined" />
        <TextField label="Maintenance Request ID" variant="outlined" />
        <TextField label="Machine Type" variant="outlined" />
        <TextField label="Machine Brand" variant="outlined" />
        <TextField label="Status Active" variant="outlined" />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="From" />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker label="To" />
        </LocalizationProvider>
        <TextField label="Operator ID" variant="outlined" />
        <TextField label="Mechanic ID" variant="outlined" />
        <TextField label="Breakdown Reason" variant="outlined" />
        <TextField label="Purchase Year" variant="outlined" />
        <TextField label="Model Year" variant="outlined" />
        <TextField label="Buiding A" variant="outlined" />
        <TextField label="Floor" variant="outlined" />
        <Button variant="contained" size="large">
          Search
        </Button>
      </Box>
    </Box>
  );
}
