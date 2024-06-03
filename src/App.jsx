import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import CreateResume from "./pages/CreateResume";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CreateResume />} />
      </Routes>
    </Router>
  );
}

export default App;
