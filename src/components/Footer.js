import { List, ListItem, ListItemText, Stack } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

function Footer() {
  return (
    <React.Fragment>
      {/* Empty box to force footer to bottom of page */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "50vh",
        }}
      ></Box>
      <Box
        component="footer"
        sx={{
          py: 0,
          px: 2,
          mt: "auto",
        }}
      >
        <Container maxWidth="sm">
          {/* <Typography variant="body1" align="center" color="text.secondary">
            We hope you found our site helpful!
          </Typography> */}
          <List component={Stack} align="center" direction="row">
            <ListItem>
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Site Map" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Contact Us" />
            </ListItem>
          </List>
        </Container>
      </Box>
    </React.Fragment>
  );
}

export default Footer;
