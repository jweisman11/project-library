import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Switch from "@mui/material/Switch";
import React from "react";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

function Navbar({ setDarkMode, darkMode }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <LibraryBooksIcon sx={{ mr: 2 }} />
          <Typography sx={{ flexGrow: 1 }} variant="h6">
            Project Library
          </Typography>
          <Switch
            color="secondary"
            onChange={() => setDarkMode(!darkMode)}
          ></Switch>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
