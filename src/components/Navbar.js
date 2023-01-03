import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <LibraryBooksIcon sx={{ mr: 2 }} />
          <Typography variant="h6">Project Library</Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
