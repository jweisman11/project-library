import React, { useState, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import Navbar from "./components/Navbar";
import ContactUsForm from "./components/ContactUsForm";
import Dashboard from "./components/Dashboard";
import Error from "./components/Page404";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ProjectLibrary from "./components/ProjectLibrary";
import Team from "./components/Team";
import AuthContext from "./store/AuthContext";
import { Login } from "@mui/icons-material";

function App() {
  const authCtx = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  console.log("ctx");
  console.log(authCtx);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {!authCtx.isLoggedIn && (
        <Login darkMode={darkMode} setDarkMode={setDarkMode} />
      )}
      {authCtx.isLoggedIn && (
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      )}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/auth"></Route>
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
