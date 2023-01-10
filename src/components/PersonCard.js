import React from "react";
import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";

function PersonCard({ personName, personTitle, personDescription }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: deepOrange[500] }} aria-label="person1">
            AA
          </Avatar>
        }
        title={personName}
        subheader={personTitle}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {personDescription}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default PersonCard;
