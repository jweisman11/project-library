import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { createTheme, CssBaseline, Paper, ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import IntroMessage from "./components/IntroMessage";
import SideBarTOC from "./components/SideBarTOC";
import ContactUsForm from "./components/ContactUsForm";
import Home from "./components/Home";

import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import { Css } from "@mui/icons-material";
import ProjectLibrary from "./components/ProjectLibrary";

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
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<ProjectLibrary />}></Route>
        <Route path="/team" element={<ProjectLibrary />}></Route>
        <Route path="/dashboard" element={<ProjectLibrary />}></Route>
        <Route path="/contact" element={<ContactUsForm />}></Route>
        <Route path="/*" element={<Home />}></Route>
      </Routes>
      <Footer />
    </ThemeProvider>

    //   <Home />
    //   <IntroMessage />
    //   <ProjectCard />
    //   <Footer />
    // </ThemeProvider>
  );
}

export default App;
