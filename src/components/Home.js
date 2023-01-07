import { Box, Typography } from "@mui/material";
import React from "react";

function Home() {
  return (
    <div>
      <Box
        component="img"
        sx={{
          flexDirection: "row",
          justifyContent: "center",
          height: 500,
          width: 400,
        }}
        alt="An aggressive bald eagle"
        src="https://img.freepik.com/premium-vector/aggressive-bald-eagle_9645-2727.jpg?w=1060"
      />
    </div>
  );
}

export default Home;
