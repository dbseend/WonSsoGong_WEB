import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Chatbot from "./Pages/Chatbot";
import OnBoarding from "./Pages/OnBoarding";
import Main from "./Pages/Main";
import Chapter12 from "./Pages/Chapter12";
import Chapter2 from "./Pages/Chapter2";
import Chapter22 from "./Pages/Chapter22";
import Chapter3 from "./Pages/Chapter3";
import Chapter32 from "./Pages/Chapter32";
import Chapter33 from "./Pages/Chapter33";
import Chapter3Result1 from "./Pages/Chapter3Result1";
import Chapter3Result2 from "./Pages/Chapter3Result2";
import Chapter3Result3 from "./Pages/Chapter3Result3";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnBoarding />} />
        <Route path="/main" element={<Main />} />
        <Route path="/chapter12" element={<Chapter12 />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/chapter2" element={<Chapter2 />} />
        <Route path="/chapter22" element={<Chapter22 />} />
        <Route path="/chapter3" element={<Chapter3 />} />
        <Route path="/chapter32" element={<Chapter32 />} />
        <Route path="/chapter33" element={<Chapter33 />} />
        <Route path="/chapter3Result1" element={<Chapter3Result1 />} />
        <Route path="/chapter3Result2" element={<Chapter3Result2 />} />
        <Route path="/chapter3Result3" element={<Chapter3Result3 />} />
      </Routes>
    </Router>
  );
}

export default App;
