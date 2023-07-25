import { Box, Divider } from "@mui/material";
import React from "react";
import Charts from "./Charts";
import Peers from "./Peers";

function Middle() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <div style={{ height: "8%" }}>
          <div>
            <div>Retirement income</div>
            <div>Starting Year 2065</div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h4>$300,000</h4>
            <div>My Goal</div>
            <Divider />
          </div>
          <div>
            <h4>59%</h4>
            <div>Goal Archieved</div>
            <Divider />
          </div>
          <div>
            <h4>$300</h4>
            <div>Estd . Monthly Income</div>
            <Divider />
          </div>
        </div>

        <div style={{}}>
          <Charts />
        </div>
        <div style={{}}>
          <Peers />
        </div>
      </div>
    </Box>
  );
}

export default Middle;
