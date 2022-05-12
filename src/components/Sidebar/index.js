import { Box } from "@mui/material";
import React from "react";
import AvatarBox from "./components/AvatarBox";
import ListPage from "./components/ListPage";

function Sidebar() {
  return (
    <Box>
      <AvatarBox />
      <ListPage />
    </Box>
  );
}

export default Sidebar;
