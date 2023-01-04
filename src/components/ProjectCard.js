import React from "react";
import { Divider, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function ProjectCard(name) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {`${name}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Open</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

function ProjectCards() {
  return (
    <div>
      <Divider />
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={2}>
          <ProjectCard name={"test"} />
        </Grid>
        <Grid item xs={2}>
          <ProjectCard />
        </Grid>
        <Grid item xs={2}>
          <ProjectCard />
        </Grid>
        <Grid item xs={2}>
          <ProjectCard />
        </Grid>
      </Grid>
    </div>
  );
}

export default ProjectCards;
