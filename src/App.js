import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import "./App.css";
import Navbar from "./components/Navbar";
import ContactUsForm from "./components/ContactUsForm";
import Dashboard from "./components/Dashboard";
import Error from "./components/Page404";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ProjectLibrary from "./components/ProjectLibrary";
import Team from "./components/Team";

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
        <Route path="/team" element={<Team />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/contact" element={<ContactUsForm />}></Route>
        <Route path="/*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
