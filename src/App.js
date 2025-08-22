// src/App.js

import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Navbar />
      {/* Using a single route to display all sections on the main page */}
      <Routes>
        <Route path="/" element={
          <>
            <Home />
            <Projects />
            <About />
            <Resume />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;