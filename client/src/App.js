import './App.css';

import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import {
  createTheme,
  CssBaseline,
  ThemeProvider,
} from '@material-ui/core';

import Navbar from './components/Navbar';
import AdminHome from './pages/admin/Home';
import AdminLogin from './pages/admin/Login';
import Home from './pages/Home';

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
        <Router>
        <Routes>
          <Route exact path="/" element={<Navbar />} />
        </Routes>
        </Router>

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
