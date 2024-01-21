import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import { useMemo } from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import { themeSettings } from "./theme.js";
import Chats from "./pages/Chats.jsx";
import DataIngest from "./pages/DataIngest.jsx";
import Subjects from "./pages/Subjects.jsx";
import Models from "./pages/Models.jsx";

function App() {
  const mode = useSelector((state) => state.global.mode);

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <>
      <div className="App">
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/chats" element={<Chats />} />
              <Route path="/dataingest" element={<DataIngest />} />
              <Route path="/subjects" element={<Subjects />} />
              <Route path="/models" element={<Models />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </div>
    </>
  );
}

export default App;
