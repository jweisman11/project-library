import {
  Box,
  Card,
  CardContent,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import IntelMembers from "../components/IntelMembers.js";
import React from "react";

function Home() {
  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 10, pt: 2, pb: 2 }}>
        <Box
          sx={{ width: "100%", display: "inline-flex", flexDirection: "row" }}
        >
          <Card sx={{ m: 1 }}>
            <FormatQuoteIcon sx={{ fontSize: 80 }} />
            <CardContent>
              <Typography
                sx={{ fontSize: 20, mb: 1.5 }}
                color="text.primary"
                gutterBottom
              >
                We are Homeland's preeminent team of developers on a warpath to
                radically revolutionize how I&A and the DHS Intelligence
                Enterprise utitlize tech + data to fulfil their mission.
              </Typography>
              <Divider sx={{ mb: 1.5 }} />
              <Typography sx={{ fontSize: 18 }} variant="body2">
                Fearless Leader, Chief Pirate
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
      <IntelMembers />
    </div>
  );
}

export default Home;
