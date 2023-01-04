import React from "react";
import { Box, Chip, Divider, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

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
      <Box sx={{ pt: 0, pb: 6 }}>
        <Container maxWidth="lg">
          {/* I&A */}
          <Divider textAlign="left" flexItem sx={{ pt: 4, pb: 4 }}>
            <Chip label="I&A Projects" />
          </Divider>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <ProjectCard />
            </Grid>
            <Grid item xs={3}>
              <ProjectCard />
            </Grid>
            <Grid item xs={3}>
              <ProjectCard />
            </Grid>
            <Grid item xs={3}>
              <ProjectCard />
            </Grid>
          </Grid>
          {/* DHS */}
          <Divider textAlign="left" flexItem sx={{ pt: 4, pb: 4 }}>
            <Chip label="DHS Projects" />
          </Divider>
          <Grid item xs={4}>
            <ProjectCard />
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default ProjectCards;
