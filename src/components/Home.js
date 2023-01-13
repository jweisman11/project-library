import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import React from "react";

function Home() {
  return (
    <div>
      {/* <Container maxWidth="lg"> */}
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
                We are Homeland's preeminent team of cleared developers on a
                warpath to radically revolutionize how I&A and the DHS
                Intelligence Enterprise utitlize tech + data to fulfil their
                mission.
              </Typography>
              <Divider sx={{ mb: 1.5 }} />
              <Typography sx={{ fontSize: 18 }} variant="body2">
                Jeff Weisman, Chief Pirate
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box
          sx={{
            height: 150,
            width: 150,
            display: "inline-flex",
            flexDirection: "row",
            position: "absolute",
            top: "10%",
            left: "75%",
          }}
          component="img"
          alt="An aggressive bald eagle"
          src="https://img.freepik.com/premium-vector/aggressive-bald-eagle_9645-2727.jpg?w=1060"
        ></Box>
      </Container>
    </div>
  );
}

export default Home;
