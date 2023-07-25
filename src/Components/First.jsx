import React from "react";
import { Avatar, Button, Divider, Grid, Stack } from "@mui/material";
import Box from "@mui/material/Box";

function First() {
  return (
    <Box
      sx={{
        height: "100%",
        backgroundColor: "rgba(250, 250, 250, 255)",
      }}
    >
      <Stack spacing={1}>
        <div>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="center"
            padding={1}
          >
            <Grid>
              <Avatar>N</Avatar>
            </Grid>
            <h3>Hi Loki, Welcome back</h3>
          </Grid>
        </div>
        <Stack spacing={2} paddingLeft={5} textAlign="start">
          <h4>Today</h4>
          <Stack spacing={2}>
            <Stack spacing={0.5}>
              <div>$19,892</div>
              <div>Account balance</div>
            </Stack>
            <Stack spacing={0.5}>
              <div>$4,000</div>
              <div>Year-To-Date Contribution</div>
            </Stack>
            <Stack spacing={0.5}>
              <div>$1,892</div>
              <div>Total Interest</div>
            </Stack>
          </Stack>
        </Stack>
        <div paddingLeft={5}>
          <Button variant="contained">I want to</Button>
        </div>
        <Stack spacing={1}>
          <h4>Recent Transaction</h4>
          <Stack spacing={0.5} fontSize={12.5}>
            <Stack spacing={0.5}>
              <div>2020-08-07</div>
              <div>Withdrawl Transfer to Bank -XXX11</div>
            </Stack>
            <Divider />
            <Stack spacing={0.5}>
              <div>2020-07-21</div>
              <div>Withdrawl Transfer to Bank -XXX11</div>
            </Stack>
            <Divider />
            <Stack spacing={0.5}>
              <div>2020-07-16</div>
              <div>Withdrawl Transfer to Bank -XXX11</div>
            </Stack>
            <Divider />
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default First;
