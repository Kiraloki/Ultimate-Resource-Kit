import { Button, Divider, Link, Slider } from "@mui/material";
import React from "react";

function Last() {
  const [value, setValue] = React.useState(30);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",

        height: "70%",
        paddingTop: "100px",
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
      >
        <div> Retirement Strategy </div>
        <div>
          <div>Employee Contribution (%)</div>
          <div>
            <Slider
              aria-label="Always visible"
              defaultValue={12}
              valueLabelDisplay="on"
            />
          </div>
        </div>
        <div>
          <div>Retirement Age </div>
          <div>
            <Slider
              aria-label="Always visible"
              defaultValue={65}
              valueLabelDisplay="on"
            />
          </div>
        </div>

        <Divider />
        <div>Employer Contribution 8.4% </div>
        <div>Interset Rate 5%</div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button variant="contained">Update</Button>
        </div>
        <Link
          href="#"
          underline="hover"
          style={{ display: "flex", justifyContent: "center" }}
        >
          {"View Help Docs"}
        </Link>
      </div>

      <div style={{ width: "80%", display: "flex", justifyContent: "center" }}>
        <div>
          Are you Considering a Housing Advance?
          <p>Limited time reduce intreset</p>
          <Link href="#" underline="hover">
            {"Learn more >"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Last;
