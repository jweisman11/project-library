import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Switch from "@mui/material/Switch";
import { NavLink } from "react-router-dom";
import React, { useContext } from "react";
import Logo from "../assets/DHS_Seal.png";

function Navbar({ darkMode, setDarkMode }) {
  // TODO: Avoid code reptition and use to set active vs inactive styles

  return (
    <AppBar sx={{ position: "sticky", pt: 2.8 }}>
      <Toolbar>
        <Box
          sx={{
            display: "inline-flex",
            justifyContent: "flex-start",
            width: "50%",
            flexWrap: "nowrap",
          }}
        >
          <Box
            component="img"
            sx={{
              height: 50,
            }}
            alt="DHS Seal"
            src={Logo}
          />

          <Typography sx={{ ml: 2, mt: 0.5 }} variant="h4">
            {" "}
            Homeland Intel
          </Typography>
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
                fontWeight: isActive ? "bold" : "normal",
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
                fontWeight: isActive ? "bold" : "normal",
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
                fontWeight: isActive ? "bold" : "normal",
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
                fontWeight: isActive ? "bold" : "normal",
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
                fontWeight: isActive ? "bold" : "normal",
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
