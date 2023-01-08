import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Box, Chip, Divider, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import Modal from "@mui/material/Modal";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function ProjectCard({ projectName, projectDescription }) {
  const [openModal, setOpenModal] = useState(false);

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
        <Button onClick={() => setOpenModal(true)} size="small">
          Open
        </Button>
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <Box sx={modalStyle}>
            <Typography
              id={`${projectName}-modal`}
              variant="h6"
              component="h2"
            >{`${projectName}`}</Typography>
            <Typography id={`${projectName}-modal-text`} sx={{ mt: 2 }}>
              Some longer description
            </Typography>
            <Button variant="contained" onClick={() => setOpenModal(false)}>
              Close
            </Button>
          </Box>
        </Modal>

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
        return response.json();
      })
      .then(function (myJson) {
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
