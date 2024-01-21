import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import {
  Search as SearchIcon,
  Menu as MenuIcon,
  DarkModeOutlined,
  LightModeOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import FlexBetween from "./FlexBetween";
import { setMode } from "../state";
import profileImage from "../assets/profile.jpeg";
import TimeComponent from "./Time";

export default function Navbar({ isSidebarOpen, setSidebarOpen, user }) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <AppBar
      component={"nav"}
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <FlexBetween>
          <Link to="/"></Link>
          <IconButton onClick={() => setSidebarOpen(!isSidebarOpen)}>
            <MenuIcon />
          </IconButton>
          <FlexBetween
            backgroundColor={theme.palette.background.alt}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </FlexBetween>
        </FlexBetween>

        <FlexBetween gap="1.5rem">
          <TimeComponent />
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" }} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" }} />
            )}
          </IconButton>
          <IconButton></IconButton>
          <FlexBetween>
            <Button
              onClick={handleClick}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              <Box
                component={"img"}
                alt="profile"
                src={profileImage}
                height={"32px"}
                width={"32px"}
                borderRadius={"50%"}
                sx={{ objectFit: "cover" }}
              />
              <Box textAlign={"left"}>
                <Typography
                  fontWeight={"bold"}
                  fontSize={"0.8rem"}
                  sx={{ color: theme.palette.secondary[100] }}
                ></Typography>
                <Typography
                  fontSize={"0.7rem"}
                  sx={{ color: theme.palette.secondary[200] }}
                ></Typography>
              </Box>
              <ArrowDropDownOutlined
                sx={{ color: theme.palette.secondary[300], fontSize: "25px" }}
              />
            </Button>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
}
