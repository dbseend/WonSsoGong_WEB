import React from "react";
import WebFooter from "../../Components/Etc/WebFooter";
import WebNavbar from "../../Components/Etc/WebNavbar";
import WebMain from "../../Components/Main/WebMain";

const Main = () => {
  return (
    <div>
      <WebNavbar />
      <WebMain />
      <WebFooter />
    </div>
  );
};

export default Main;