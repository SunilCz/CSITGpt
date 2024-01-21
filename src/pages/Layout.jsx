import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Sidebar from "../components/Sidebar.jsx";

import { useSelector } from "react-redux";

export default function Layout() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useSelector((state) => state.global.userId);

  // console.log('data', data);
  return (
    <Box
      display={isNonMobile ? "flex" : "block"}
      width={"100%"}
      height={"100%"}
    >
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setSidebarOpen={setIsSidebarOpen}
        isNonMobile={isNonMobile}
        drawerWidth={"250px"}
      />
      <Box flexGrow={1}>
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
}
