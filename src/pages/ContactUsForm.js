import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useForm } from "react-hook-form";
import { FormInputMultiCheckbox } from "../components/form-components/FormCheckbox";
import FormInputText from "../components/form-components/FormInputText";
import FormInputSlider from "../components/form-components/FormSlider";
import FormInputDropdown from "../components/form-components/FormInputDropdown";

// https://blog.logrocket.com/using-material-ui-with-react-hook-form/

function ContactUs() {
  const methods = useForm();
  const { handleSubmit, control, setValue } = methods;

  const onSubmit = (data) => console.log(data);

  return (
    <React.Fragment>
      <Container component="header" maxWidth="lg">
        <Box
          sx={{
            pt: 5,
            pb: 5,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
            sx={{ pb: 1 }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Have a question? 🙋 Concern? 🙀 Idea? 🧐 Just want to talk? 🙊 We'd
            love to hear from you. Drop us a note below and a member of the team
            will get back to you with one business day.
          </Typography>
        </Box>
      </Container>

      <Container component="main" maxWidth="sm">
        <Paper
          elevation={1}
          sx={{
            pr: 2,
            pl: 2,
            pt: 0,
            pb: 2,
          }}
        >
          <Box
            sx={{
              pt: 2,
              pb: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <form>
              <Grid container spacing={2}>
                <Grid item key="first" xs={6}>
                  <FormInputText
                    name="firstName"
                    control={control}
                    label="First Name"
                    autoComplete="given-name"
                    autoFocus={true}
                  />
                </Grid>
                <Grid item key="last" xs={6}>
                  <FormInputText
                    name="lastName"
                    control={control}
                    label="Last Name"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item key="email" xs={12}>
                  <FormInputText
                    name="email"
                    control={control}
                    label="Email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item key="project" xs={12}>
                  <FormInputDropdown
                    name="project"
                    control={control}
                    label="Project"
                  />
                </Grid>

                <Grid item key="about" xs={12}>
                  <FormInputMultiCheckbox
                    control={control}
                    setValue={setValue}
                    name={"checkboxValue"}
                    label={"What's this about?"}
                  />
                </Grid>
                <Grid item key="urgency" xs>
                  <Typography>How urgent is this?</Typography>

                  <FormInputSlider
                    name={"sliderValue"}
                    control={control}
                    setValue={setValue}
                    label={"How urgent is this?"}
                  />
                </Grid>
                <Grid item key="message" xs={12}>
                  <FormInputText
                    name="message"
                    control={control}
                    label="Message"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item key="submit" xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    sx={{ mt: 0, mb: 0 }}
                    onClick={handleSubmit(onSubmit)}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Paper>
      </Container>
    </React.Fragment>
  );
}

export default ContactUs;
