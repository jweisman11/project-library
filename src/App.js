import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { createTheme, CssBaseline, Paper, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import IntroMessage from "./components/IntroMessage";
import SideBarTOC from "./components/SideBarTOC";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* <Paper> */}
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <SideBarTOC />
      <IntroMessage />
      <ProjectCard />
      <Footer />
      {/* </Paper> */}
    </ThemeProvider>
  );
}

export default App;
