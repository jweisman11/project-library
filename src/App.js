import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mui/material";
import Navbar from "./components/Navbar";
import IntroMessage from "./components/IntroMessage";
import SideBarTOC from "./components/SideBarTOC";
import ProjectCard from "./components/ProjectCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <SideBarTOC />
      <IntroMessage />
      <ProjectCard />
      <Footer />
    </div>
  );
}

export default App;
