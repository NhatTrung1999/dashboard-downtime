import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

export default function Lines() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ bgcolor: "background.paper" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
      >
        <Tab
          label="A1"
          style={{
            background: "#ccc",
            borderRadius: "25px",
            border: "3px solid",
            fontWeight: "bold",
            marginRight: "10px",
          }}
        />
        <Tab
          label="A2"
          style={{
            background: "#ccc",
            borderRadius: "25px",
            border: "3px solid",
            fontWeight: "bold",
            marginRight: "10px",
          }}
        />
        <Tab
          label="A3"
          style={{
            background: "#ccc",
            borderRadius: "25px",
            border: "3px solid",
            fontWeight: "bold",
            marginRight: "10px",
          }}
        />
        <Tab
          label="B2"
          style={{
            background: "#ccc",
            borderRadius: "25px",
            border: "3px solid",
            fontWeight: "bold",
            marginRight: "10px",
          }}
        />
        <Tab
          label="C2"
          style={{
            background: "#ccc",
            borderRadius: "25px",
            border: "3px solid",
            fontWeight: "bold",
            marginRight: "10px",
          }}
        />
        <Tab
          label="D1"
          style={{
            background: "#ccc",
            borderRadius: "25px",
            border: "3px solid",
            fontWeight: "bold",
            marginRight: "10px",
          }}
        />
        <Tab
          label="D2"
          style={{
            background: "#ccc",
            borderRadius: "25px",
            border: "3px solid",
            fontWeight: "bold",
            marginRight: "10px",
          }}
        />
        <Tab
          label="All Lines"
          style={{
            background: "#ccc",
            borderRadius: "25px",
            border: "3px solid",
            fontWeight: "bold",
            marginRight: "10px",
          }}
        />
      </Tabs>
    </Box>
  );
}
