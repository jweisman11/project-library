import { Typography } from "@mui/material";
import { Grid } from "@mui/material";

import PersonCard from "../components/PersonCard";

import { Container } from "@mui/system";
import React from "react";

const people = [
  {
    name: "Angry Actor",
    title: "Gym Rat",
    description: "a bunch of text about the person",
  },
  {
    name: "Angry Alien",
    title: "Gym Rat",
    description: "a bunch of text about the person",
  },
  {
    name: "Angry Acrobat",
    title: "Gym Rat",
    description: "a bunch of text about the person",
  },
  {
    name: "LL Cool Jay",
    title: "Rapper",
    description: "Voice of an angel",
  },
];

function Team() {
  return (
    <Container sx={{ mt: 5, mb: 5 }} maxWidth="lg">
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
        gutterBottom
      >
        Meet the Team
      </Typography>
      <Typography
        sx={{ mb: 10 }}
        variant="h5"
        align="center"
        color="text.secondary"
        paragraph
      >
        Ever wonder who's behind every app, website, graphic, tool and peice of
        data you use to kick-a** at fulfilling your mission. Meet just a few
        members of the Mission Solutions team comprised of developers,
        engineers, data scientists, program managers and policy experts, just to
        name a few.
      </Typography>

      <Grid container spacing={4}>
        {people.map((person) => (
          <Grid item key={person.name} xs={12} sm={6} md={4}>
            <PersonCard
              personName={person.name}
              personTitle={person.title}
              personDescription={person.description}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Team;
