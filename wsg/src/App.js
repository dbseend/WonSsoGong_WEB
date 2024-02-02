import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Chatbot from "./Pages/Chatbot";
import OnBoarding from "./Pages/OnBoarding";
import Main from "./Pages/Main";
import Chapter12 from "./Pages/Chapter12";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnBoarding />} />
        <Route path="/main" element={<Main />} />
        <Route path="/chapter12" element={<Chapter12 />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;