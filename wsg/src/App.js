import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
// import Chatbot from "./Pages/Chatbot";
import OnBoarding from "./Pages/Main/OnBoarding";
import Main from "./Pages/Main/Main";
import Chapter12 from "./Pages/Chapter1/Chapter12";
import Chapter2 from "./Pages/Chapter2/Chapter2";
import Chapter22 from "./Pages/Chapter2/Chapter22";
import Chapter3 from "./Pages/Chapter3/Chapter3";
import Chapter32 from "./Pages/Chapter3/Chapter32";
import Chapter33 from "./Pages/Chapter3/Chapter33";
import Chapter3Result1 from "./Pages/Chapter3/Chapter3Result1";
import Chapter3Result2 from "./Pages/Chapter3/Chapter3Result2";
import Chapter3Result3 from "./Pages/Chapter3/Chapter3Result3";
import Tutorial from "./Pages/Tutorial/Tutorial";
import Tutorial2 from "./Pages/Tutorial/Tutorial2";
import Tutorial3 from "./Pages/Tutorial/Tutorial3";
import Tutorial4 from "./Pages/Tutorial/Tutorial4";
import Tutorial5 from "./Pages/Tutorial/Tutorial5";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OnBoarding />} />
        <Route path="/main" element={<Main />} />
        <Route path="/chapter12" element={<Chapter12 />} />
        {/* <Route path="/chatbot" element={<Chatbot />} /> */}
        <Route path="/chapter2" element={<Chapter2 />} />
        <Route path="/chapter22" element={<Chapter22 />} />
        <Route path="/chapter3" element={<Chapter3 />} />
        <Route path="/chapter32" element={<Chapter32 />} />
        <Route path="/chapter33" element={<Chapter33 />} />
        <Route path="/chapter3Result1" element={<Chapter3Result1 />} />
        <Route path="/chapter3Result2" element={<Chapter3Result2 />} />
        <Route path="/chapter3Result3" element={<Chapter3Result3 />} />
        <Route path="/tutorial" element={<Tutorial />} />
        <Route path="/tutorial2" element={<Tutorial2 />} />
        <Route path="/tutorial3" element={<Tutorial3 />} />
        <Route path="/tutorial4" element={<Tutorial4 />} />
        <Route path="/tutorial5" element={<Tutorial5 />} />
      </Routes>
    </Router>
  );
}

export default App;
