import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import "./App.css";
// import Chatbot from "./Pages/Chatbot";
import OnBoarding from "./Pages/Main/OnBoarding";
import Tutorial1 from "./Pages/Tutorial/Tutorial1";
import Tutorial2 from "./Pages/Tutorial/Tutorial2";
import Tutorial3 from "./Pages/Tutorial/Tutorial3";
import Tutorial4 from "./Pages/Tutorial/Tutorial4";
import Tutorial5 from "./Pages/Tutorial/Tutorial5";
import Chapter11 from "./Pages/Chapter1/Chapter11";
import Chapter12 from "./Pages/Chapter1/Chapter12";
import Chapter21 from "./Pages/Chapter2/Chapter21";
import Chapter22 from "./Pages/Chapter2/Chapter22";
import Chapter31 from "./Pages/Chapter3/Chapter31";
import Chapter32 from "./Pages/Chapter3/Chapter32";
import Chapter33 from "./Pages/Chapter3/Chapter33";
import Chapter3Result1 from "./Pages/Chapter3/Chapter3Result1";
import Chapter3Result2 from "./Pages/Chapter3/Chapter3Result2";
import Chapter3Result3 from "./Pages/Chapter3/Chapter3Result3";

function App() {
  return (
    <Router>
      <Routes>
        {/* 온보딩 페이지 */}
        <Route path="/" element={<OnBoarding />} />

        {/* 튜토리얼 페이지 */}
        <Route path="/tutorial" element={<Outlet />}>
          <Route path="1" element={<Tutorial1 />} />
          <Route path="2" element={<Tutorial2 />} />
          <Route path="3" element={<Tutorial3 />} />
          <Route path="4" element={<Tutorial4 />} />
          <Route path="5" element={<Tutorial5 />} />
        </Route>

        {/* 챕터1 페이지 */}
        <Route path="/chapter1" element={<Outlet />}>
          <Route path="1" element={<Chapter11 />} />
          <Route path="2" element={<Chapter12 />} />
        </Route>

        {/* 챕터2 페이지 */}
        <Route path="/chapter2" element={<Outlet />}>
          <Route path="1" element={<Chapter21 />} />
          <Route path="2" element={<Chapter22 />} />
        </Route>

        {/* 챕터3 페이지 */}
        <Route path="/chapter3" element={<Outlet />}>
          <Route path="1" element={<Chapter31 />} />
          <Route path="2" element={<Chapter32 />} />
          <Route path="3" element={<Chapter33 />} />
          <Route path="result1" element={<Chapter3Result1 />} />
          <Route path="result2" element={<Chapter3Result2 />} />
          <Route path="result3" element={<Chapter3Result3 />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
