import React, { useState, useEffect } from "react";
import { Box, Chip, Divider, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

function ProjectCard({ projectName, projectDescription }) {
  return (
    <Card>
      {/* <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      /> */}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {`${projectName}`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {`${projectDescription}`}
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
  const [data, setData] = useState([]);

  const getData = () => {
    fetch("data.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Box sx={{ pt: 0, pb: 6 }}>
      <Container maxWidth="lg">
        {/* I&A */}
        <Divider textAlign="left" flexItem sx={{ pt: 4, pb: 4 }}>
          <Chip label="I&A Projects" />
        </Divider>

        <Grid container spacing={4}>
          {data.map((project) => (
            <Grid item key={project.project_id} xs={12} sm={6} md={4}>
              <ProjectCard
                projectName={project.project_info.name}
                projectDescription={project.project_info.description}
              />
            </Grid>
          ))}
        </Grid>

        {/* DHS */}
        <Divider textAlign="left" flexItem sx={{ pt: 4, pb: 4 }}>
          <Chip label="DHS Projects" />
        </Divider>
        <Grid container spacing={4}>
          {data.map((project) => (
            <Grid item key={project.project_id} xs={12} sm={6} md={4}>
              <ProjectCard
                projectName={project.project_info.name}
                projectDescription={project.project_info.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default ProjectCards;
