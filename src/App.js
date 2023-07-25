import First from "./Components/First";
import Last from "./Components/Last";
import Middle from "./Components/Middle.jsx";

import SideBAr from "./Components/SideBAr";

import React from "react";

function App() {
  return (
    <div style={{ width: "100%", height: "100vh", display: "flex" }}>
      <div style={{ width: "4%" }}>
        <SideBAr />
      </div>
      <div style={{ width: "20%" }}>
        <First />
      </div>

      <div
        style={{
          width: "76%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div style={{ width: "57%", height: "60%" }}>
          <Middle />
        </div>
        <div
          style={{
            width: "20%",
            height: "100%",
          }}
        >
          <Last />
        </div>
      </div>
    </div>
  );
}

export default App;
