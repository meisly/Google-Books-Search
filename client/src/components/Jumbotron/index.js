import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: "10vh", width: "100%", clear: "both", paddingTop: "1rem", textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
