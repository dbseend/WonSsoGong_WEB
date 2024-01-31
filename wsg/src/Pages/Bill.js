import React from "react";
import WebBill from "../Components/WebBill";
import WebFooter from "../Components/WebFooter";
import WebNavbar from "../Components/WebNavbar";

const Main = () => {
  return (
    <div>
        <WebNavbar />
        <WebBill />
        <WebFooter />
    </div>
  );
};

export default Main;