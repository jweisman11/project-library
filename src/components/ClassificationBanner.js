import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

function ClassificationBanner({ classification }) {
  return (
    <div>
      <Box
        sx={{
          position: "fixed",
          display: "flex",
          height: 25,
          width: "100%",
          zIndex: 10000,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f7ea48",
          color: "#000000",
          top: {
            top: 0,
          },
        }}
      >
        <Typography>{classification}</Typography>
      </Box>

      <Box
        sx={{
          position: "fixed",
          display: "flex",
          height: 25,
          width: "100%",
          zIndex: 10000,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f7ea48",
          color: "#000000",
          bottom: {
            bottom: 0,
          },
        }}
      >
        <Typography>{classification}</Typography>
      </Box>
    </div>
  );
}

export default ClassificationBanner;
