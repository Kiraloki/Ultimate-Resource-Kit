import { Box, CircularProgress, Typography } from "@mui/material";
import React from "react";

function Circular({ obj }) {
  console.log("Circular");
  console.log(obj);
  return (
    <div>
      <Box display="flex" justifyContent="center" alignItems="center">
        <CircularProgress size="5rem" variant="determinate" value={obj.val} />
        <Typography position="absolute" fontSize={12}>
          {`${obj.val}%`}
        </Typography>
      </Box>
      <div style={{ textAlign: "center" }}>{obj.text}</div>
    </div>
  );
}

export default Circular;
