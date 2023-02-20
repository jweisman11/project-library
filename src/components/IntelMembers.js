import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import GlobalStyles from "@mui/material/GlobalStyles";
import Container from "@mui/material/Container";

const members = [
  {
    agency: "Office of Intelligence & Analysis (I&A)",
    subheader: "IC Member",
    teams: "Intelligence Enterprise Operations",
    description: [
      "CI, CT, Cyber, Econ and TOC Mission Centers",
      "Operational Elements (CETC, HITEC) and Field Ops",
      "DHS' Classified Cloud (DICE)",
    ],
    buttonText: "Learn more",
    buttonVariant: "contained",
  },
  {
    agency: "U.S. Coast Guard",
    subheader: "IC Member",
    teams: "Intel Enterprise",
    description: ["Intelligence Services Product Line", "MASS", "Other"],
    buttonText: "Learn more",
    buttonVariant: "contained",
  },
  {
    agency: "CBP",
    subheader: "DHS Intel Chartered Member",
    teams: "Office of Intelligence",
    description: [
      "National Vetting Center",
      "National Targetting Center",
      "Office of Intelligence",
    ],
    buttonText: "Learn more",
    buttonVariant: "contained",
  },
  {
    agency: "CISA",
    subheader: "DHS Intel Chartered Member",
    teams: "Name of Office",
    description: ["Thing 1", "Thing 2", "Thing 3"],
    buttonText: "Learn more",
    buttonVariant: "contained",
  },
  {
    agency: "CWMD",
    subheader: "DHS Intel Chartered Member",
    teams: "Name of Office",
    description: ["Thing 1", "Thing 2", "Thing 3"],
    buttonText: "Learn more",
    buttonVariant: "contained",
  },
  {
    agency: "FEMA",
    subheader: "DHS Intel Chartered Member",
    teams: "Name of Office",
    description: ["Thing 1", "Thing 2", "Thing 3"],
    buttonText: "Learn more",
    buttonVariant: "contained",
  },
  {
    agency: "ICE",
    subheader: "DHS Intel Chartered Member",
    teams: "Name of Office",
    description: ["Thing 1", "Thing 2", "Thing 3"],
    buttonText: "Learn more",
    buttonVariant: "contained",
  },
  {
    agency: "S&T",
    subheader: "DHS Intel Chartered Member",
    teams: "Name of Office",
    description: ["Thing 1", "Thing 2", "Thing 3"],
    buttonText: "Learn more",
    buttonVariant: "contained",
  },
  {
    agency: "TSA",
    subheader: "DHS Intel Chartered Member",
    teams: "Name of Office",
    description: ["Thing 1", "Thing 2", "Thing 3"],
    buttonText: "Learn more",
    buttonVariant: "contained",
  },
  {
    agency: "USCIS",
    subheader: "DHS Intel Chartered Member",
    teams: "Name of Office",
    description: ["Thing 1", "Thing 2", "Thing 3"],
    buttonText: "Learn more",
    buttonVariant: "contained",
  },
  {
    agency: "U.S. Secret Service",
    subheader: "Homeland Security Intelligence Council (HSIC) Member",
    teams: "Name of Office",
    description: ["Thing 1", "Thing 2", "Thing 3"],
    buttonText: "Learn more",
    buttonVariant: "contained",
  },
];

function IntelMembers() {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
      />

      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="xl"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Meet the DHS Intelligence Enterprise
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          The DHS Intelligence Enterprise (IE) is comprised of a diverse set of
          member agencies across the Department, each focused on protecting a
          critical and unique aspect of Homeland Security.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="xl" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {members.map((members) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={members.agency}
              xs={12}
              sm={members.agency === "Enterprise" ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={members.agency}
                  subheader={members.subheader}
                  titleTypographyProps={{ align: "center" }}
                  subheaderTypographyProps={{
                    align: "center",
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === "light"
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "baseline",
                      mb: 2,
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h6"
                      color="text.primary"
                    >
                      {members.teams}
                    </Typography>
                  </Box>
                  <ul>
                    {members.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={members.buttonVariant}>
                    {members.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default IntelMembers;
