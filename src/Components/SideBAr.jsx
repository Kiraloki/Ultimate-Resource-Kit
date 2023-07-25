import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import LogoutIcon from "@mui/icons-material/Logout";
import AssignmentIcon from "@mui/icons-material/Assignment";
import BallotIcon from "@mui/icons-material/Ballot";

function SideBAr() {
  return (
    <div
      id="app"
      style={{
        display: "flex",
        height: "100%",
      }}
    >
      <Sidebar collapsed collapsedWidth="60px">
        <Menu>
          <MenuItem icon={<SearchIcon />}></MenuItem>
          <MenuItem icon={<HomeIcon />}></MenuItem>
          <MenuItem icon={<AssignmentIcon />}></MenuItem>
          <MenuItem icon={<BallotIcon />}></MenuItem>
          <MenuItem icon={<AccountCircleIcon />}></MenuItem>
          <MenuItem icon={<NotificationsActiveIcon />}></MenuItem>
          <MenuItem icon={<LogoutIcon />}></MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}

export default SideBAr;
