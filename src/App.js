import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signin from './pages/Signin';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<Signin />} />
          </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
