import { List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

function Footer() {
  return (
    <Box sx={{ bgcolor: "background.paper", pt: 10 }} component="footer">
      <Container maxWidth="sm">
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          We hope you found our site helpful!
        </Typography>
        <List component={Stack} direction="row">
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
  );
}

export default Footer;
