import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { ThemeProvider, createTheme, CssBaseline } from "@material-ui/core";
import AdminHome from "./pages/AdminHome";
import AdminLogin from "./pages/AdminLogin";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00d09c",
      light: "#66e3c4",
      contrastText: "#ffff",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Navbar />
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/admin/login" element={<AdminLogin />} />
            <Route exact path="/admin/" element={<AdminHome />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
};

export default App;
