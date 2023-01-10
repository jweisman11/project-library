import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React from "react";

function IntroMessage() {
  return (
    <Box sx={{ pt: 5, pb: 6 }}>
      <Container maxWidth="lg">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Project Library
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          paragraph
        >
          We strive to deliver apps, data, tools and services to radically
          improve your mission. We're constantly adding new gear. Check out what
          we've built along with apps and data from the broader community.
        </Typography>
        <Stack
          sx={{ pt: 2 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button variant="contained">Add New Project</Button>
          <Button variant="outlined">Contact the Team</Button>
        </Stack>
      </Container>
    </Box>
  );
}

export default IntroMessage;
