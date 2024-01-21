import FlexBetween from "./FlexBetween";

import { useEffect, useState } from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRightOutlined,
  Groups2Outlined,
  HomeOutlined,
} from "@mui/icons-material";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import ModelTrainingOutlinedIcon from "@mui/icons-material/ModelTrainingOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import MenuBookSharpIcon from "@mui/icons-material/MenuBookSharp";
import { useLocation, useNavigate } from "react-router-dom";

export default function Sidebar({
  drawerWidth,
  isSidebarOpen,
  setSidebarOpen,
  isNonMobile,
  user,
}) {
  const { pathname } = useLocation();
  const [active, setActive] = useState("");
  const navigate = useNavigate();
  const theme = useTheme();
  const navItems = [
    {
      text: "Dashboard",
      icon: <HomeOutlined />,
    },
    {
      text: "Pages",
      icon: null,
    },
    {
      text: "Chats",
      icon: <ChatOutlinedIcon />,
    },
    {
      text: "DataIngest",
      icon: <StorageOutlinedIcon />,
    },
    {
      text: "Subjects",
      icon: <MenuBookSharpIcon />,
    },
    {
      text: "Models",
      icon: <ModelTrainingOutlinedIcon />,
    },
  ];

  useEffect(() => {
    const path = pathname.split("/")[1];
    setActive(path);
  }, [pathname]);

  const handleCsitClick = () => {
    setActive("dashboard");
    navigate("/dashboard");
  };

  return (
    <Box>
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: drawerWidth,
            "& .MuiDrawer-paper": {
              width: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
              borderWidth: isNonMobile ? 0 : "2px",
            },
          }}
        >
          <Box width="100%">
            <Box m="1rem 3rem">
              <FlexBetween color={theme.palette.secondary.main}>
                <ListItemButton onClick={handleCsitClick}>
                  <Typography
                    variant="h4"
                    fontWeight="bold"
                    textAlign={"center"}
                  >
                    CSIT CHAT PDF
                  </Typography>
                </ListItemButton>
                {!isNonMobile && (
                  <IconButton onClick={() => setSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>
            </Box>
            <List>
              {navItems.map(({ text, icon }, index) => {
                if (!icon) {
                  return (
                    <Typography
                      key={index}
                      sx={{
                        m: "0.5rem 0 0.5rem 3rem",
                        textAlign: "left",
                        color: theme.palette.secondary[300],
                      }}
                    >
                      {text}
                    </Typography>
                  );
                }
                const lctext = text.toLowerCase();

                return (
                  <ListItem key={index} disablePadding>
                    <ListItemButton
                      onClick={() => {
                        setActive(lctext);
                        navigate(`/${lctext}`);
                      }}
                      sx={{
                        backgroundColor:
                          active === lctext
                            ? theme.palette.secondary[300]
                            : "transparent",
                        color:
                          active === lctext
                            ? theme.palette.primary[600]
                            : theme.palette.secondary[100],
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          ml: "2rem",
                          color:
                            active === lctext
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lctext && (
                        <ChevronRightOutlined sx={{ ml: "auto" }} />
                      )}
                    </ListItemButton>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  );
}
