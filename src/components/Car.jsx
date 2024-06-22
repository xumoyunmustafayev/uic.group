import React from "react";
import Nav from "../Nav";

const Car = () => {
  return (
    <div>
      <div className="ml-32 ">
        <Nav />
      </div>
      <iframe
        title="UIC Group About Page"
        src="https://uic.group/vacancy"
        width="100%"
        height="100%"
        style={{
          width: "100%",
          border: "none",
          height: "112vh",
          zIndex: "-10",
          marginTop: "-120px",
        }}
      ></iframe>
    </div>
  );
};

export default Car;
