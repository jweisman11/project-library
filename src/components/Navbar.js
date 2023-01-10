import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Switch from "@mui/material/Switch";
import { NavLink } from "react-router-dom";
import React from "react";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

function Navbar({ setDarkMode, darkMode }) {
  // TODO: Avoid code reptition and use to set active vs inactive styles
  // let activeStyle = {
  //   textDecoration: "underline",
  // };

  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          sx={{
            display: "inline-flex",
            justifyContent: "flex-start",
            width: "50%",
            flexWrap: "nowrap",
          }}
        >
          <LibraryBooksIcon sx={{ mr: 2 }} />
          <Typography variant="h6">Mission Solutions Division</Typography>
        </Box>
        <Box
          sx={{
            display: "inline-flex",
            justifyContent: "flex-end",
            width: "50%",
          }}
        >
          <Typography sx={{ mr: 4 }} variant="h6">
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "orange" : "white",
                textDecoration: isActive ? "underline" : "none",
                "font-weight": isActive ? "bold" : "normal",
              })}
              to={"/"}
            >
              Home
            </NavLink>
          </Typography>
          <Typography sx={{ mr: 4 }} variant="h6">
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "orange" : "white",
                textDecoration: isActive ? "underline" : "none",
                "font-weight": isActive ? "bold" : "normal",
              })}
              to={"/projects"}
            >
              Projects
            </NavLink>
          </Typography>
          <Typography sx={{ mr: 4 }} variant="h6">
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "orange" : "white",
                textDecoration: isActive ? "underline" : "none",
                "font-weight": isActive ? "bold" : "normal",
              })}
              to={"/team"}
            >
              Team
            </NavLink>
          </Typography>
          <Typography sx={{ mr: 4 }} variant="h6">
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "orange" : "white",
                textDecoration: isActive ? "underline" : "none",
                "font-weight": isActive ? "bold" : "normal",
              })}
              to={"/dashboard"}
            >
              Dashboard
            </NavLink>
          </Typography>
          <Typography sx={{ mr: 4 }} variant="h6">
            <NavLink
              style={({ isActive }) => ({
                color: isActive ? "orange" : "white",
                textDecoration: isActive ? "underline" : "none",
                "font-weight": isActive ? "bold" : "normal",
              })}
              to={"/contact"}
            >
              Contact Us
            </NavLink>
          </Typography>

          <Switch
            color="secondary"
            onChange={() => setDarkMode(!darkMode)}
          ></Switch>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
