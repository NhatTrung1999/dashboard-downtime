import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  IconButton,
  CssBaseline,
  Drawer,
  Typography,
  List,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import Banner from "./Banner";

const menuSliderContainer = {
  minWidth: 250,
  height: "100%",
  color: "#000",
};

const SideBar = ({ children, sideBarMenu }) => {
  const [open, setOpen] = useState(false);

  const toggleSlider = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Banner />

      {/* Content Body */}
      <Box
        component="div"
        sx={{
          marginTop: "60px",
          padding: "10px",
        }}
      >
        {children}
      </Box>

      {/* Content Body */}

      <Box component="nav">
        <AppBar
          position="static"
          style={{
            backgroundColor: "#1565c0",
            boxShadow: "unset",
            position: "fixed",
            top: 0,
          }}
        >
          <Toolbar>
            <IconButton onClick={toggleSlider}>
              <MenuIcon style={{ color: "#fff" }} />
            </IconButton>

            {/* SideBar */}
            <Drawer open={open} anchor="left" onClose={toggleSlider}>
              <Box component="div" style={menuSliderContainer}>
                <Box
                  sx={{
                    display: "block",
                    padding: "20px 10px",
                    textAlign: "center",
                    backgroundColor: "primary.dark",
                    color: "#fff",
                    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                  }}
                >
                  <Typography variant="h5">LYV - Time Down</Typography>
                </Box>

                {/* List Menu */}
                <List component="nav">
                  {sideBarMenu.map((listItem, index) => (
                    <ListItemButton
                      component={Link}
                      to={listItem.path}
                      key={index}
                    >
                      <Typography
                        sx={{
                          fontSize: "14px",
                          color:
                            listItem.active === index ? "#1565c0" : "#0009",
                          fontWeight: "600",
                        }}
                      >
                        {listItem.text}
                      </Typography>
                    </ListItemButton>
                  ))}
                </List>
                {/* List Menu */}
              </Box>
            </Drawer>
            {/* SideBar */}
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};

export default SideBar;
