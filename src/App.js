import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import Navbar from "./components/Navbar";
import ContactUsForm from "./pages/ContactUsForm";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Page404";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ProjectLibrary from "./pages/ProjectLibrary";
import Team from "./pages/Team";
import ClassificationBanner from "./components/ClassificationBanner";

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
      <ClassificationBanner classification="CLASSIFICATION" />
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
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
