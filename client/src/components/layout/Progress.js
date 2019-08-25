import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

const Progress = () => {
   return (
      <div style={{ backgroundColor: "lightgrey", overflow: "hidden" }}>
         <ProgressBar
            style={{ height: 3, background: "lightgrey" }}
            now={75}
            className="progressBar"
            variant="info"
         />
      </div>
   );
};

export default Progress;
