import {
  AppBar,
  Button,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import Switch from "@mui/material/Switch";
import { Link, NavLink } from "react-router-dom";
import React from "react";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

const pages = ["Home", "Projects", "Team"];

function Navbar({ setDarkMode, darkMode }) {
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
          {/* {pages.map((page) => {
            return (
              <Typography sx={{ mr: 4 }} variant="h6">
                <NavLink to={`/${page}`}>{page}</NavLink>
              </Typography>
            );
          })} */}

          <Typography sx={{ mr: 4 }} variant="h6">
            <NavLink style={{ textDecoration: "none" }} to={"/"}>
              Home
            </NavLink>
          </Typography>
          <Typography sx={{ mr: 4 }} variant="h6">
            <NavLink to={"/projects"}>Projects</NavLink>
          </Typography>
          <Typography sx={{ mr: 4 }} variant="h6">
            <NavLink to={"/team"}>Team</NavLink>
          </Typography>
          <Typography sx={{ mr: 4 }} variant="h6">
            <NavLink to={"/dashboard"}>Dashboard</NavLink>
          </Typography>
          <Typography sx={{ mr: 4 }} variant="h6">
            <NavLink to={"/contact"}>Contact Us</NavLink>
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
