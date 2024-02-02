import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Chatbot from "./Pages/Chatbot";
import OnBoarding from "./Pages/OnBoarding";
import Main from "./Pages/Main";
import Chapter12 from "./Pages/Chapter12";
import Chapter2 from "./Pages/Chapter2";
import Chapter22 from "./Pages/Chapter22";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnBoarding />} />
        <Route path="/main" element={<Main />} />
        <Route path="/chapter12" element={<Chapter12 />} />
        <Route path="/chapter2" element={<Chapter2 />} />
        <Route path="/chapter22" element={<Chapter22 />} />
        <Route path="/chatbot" element={<Chatbot />} />
      </Routes>
    </Router>
  );
}

export default App;