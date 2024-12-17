import React, { useContext } from "react";
import "./App.css";
import { Button, createTheme, CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { blue, green, grey, purple, red, yellow } from "@mui/material/colors";
import { Context } from "./Context/Context";
import Navbar from "./Components/Layout/Navbar/Navbar";
import Sidebar from "./Components/Layout/Sidebar/Sidebar";
import Home from "./Components/Layout/Home/Home";
import RightBar from "./Components/Layout/RightBar/RightBar";
import { Route, Routes } from "react-router-dom";
import Pages from "./Components/Layout/Pages/Pages";
import PageNotFound from "./Components/Layout/PageNotFound/PageNotFound";

const App = () => {
  const { dark,login} = useContext(Context);

  const Theme = createTheme({
    palette: {
      mode: dark ? "dark" : "light",
      
      primary: {
        light: purple[500],
        main: purple[800],
      },
      secondary:{
        main: blue[700]
      },
      warning: {
        light: red[500],
        main: red[600],
      },
      text: {
        light: grey[500],
        main: grey[600],
        dark: grey[800],
      },
      success:{
        main: green[700]
      }
    },
  });

  return (
    <div className="app">
      <ThemeProvider theme={Theme}>
        <Navbar />
        <CssBaseline />
        {login 
        ?
        <Stack direction="row" spacing={3} justifyContent="space-between">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages" element={<Pages />} />
            <Route path="*" element={<PageNotFound/>}/>
          </Routes>
          <RightBar />
        </Stack>
        :
        <Button>Hello</Button>
        }
      </ThemeProvider>
    </div>
  );
};

export default App;
