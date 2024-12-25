import {
  Add,
  BrowseGallery,
  Close,
  DarkMode,
  EmojiEmotions,
  Groups,
  Home,
  LightMode,
  Pages,
  Person,
  Person2,
  PersonAdd,
  Photo,
  Settings,
  Shop,
  Videocam,
} from "@mui/icons-material";
import {
  Alert,
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  IconButton,
  Snackbar,
  Stack,
  styled,
  Switch,
  TextField,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useContext, useState, useTransition } from "react";
import { Context } from "../../../Context/Context";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import Newpost from "../../Shared/NewPost/Newpost";

const Sidebar = () => {
  const options = [
    { text: "Homepage", link: "/", icon: <Home /> },
    { text: "Pages", link: "/pages", icon: <Pages /> },
    { text: "Groups", link: "997", icon: <Groups /> },
    { text: "Marketplace", link: "", icon: <Shop /> },
    { text: "Friends", link: "", icon: <Person2 /> },
    { text: "Settings", link: "", icon: <Settings /> },
    { text: "Profile", link: "", icon: <Person /> },
  ];
  const {
    dark,
    setDark,
    login,
    setDialogOpen,
    uploaded
  } = useContext(Context);


  const handlOpen = () => {
    setDialogOpen(true);
  };

  useGSAP(() => {
    gsap.from(".l-btn", {
      x: -300,
      stagger: 0.025,
      duration: 1.3,
      delay: 0.5,
      ease: "circ.out",
    });
  });

  return (
    <section className="sidebar">
      <Toolbar sx={{ padding: "25px 0", height: "100%" }}>
        <Stack
          direction="column"
          sx={{ display: "flex", justifyContent: "space-between" }}
          height="100%"
        >
          <Stack direction="column" spacing={1.5}>
            {options.map((ele) => {
              return (
                <Link to={ele.link} style={{ textDecoration: "none" }}>
                  <Button
                    color="text"
                    // href={ele.link}
                    className="l-btn"
                    sx={{ gap: 3, justifyContent: "start", display: "flex" }}
                    fullWidth
                  >
                    {ele.icon}
                    <Typography fontWeight={600}>{ele.text}</Typography>
                  </Button>
                </Link>
              );
            })}
            <Button
              disableRipple
              color="text"
              className="l-btn"
              sx={{ gap: 3, justifyContent: "start", display: "flex" }}
              fullWidth
            >
              {dark ? (
                <DarkMode
                  sx={{ perspective: 1000, transform: "rotateY(180deg)" }}
                />
              ) : (
                <LightMode />
              )}
              <Switch
                checked={dark}
                onClick={() => setDark(!dark)}
                color="secondary"
              />
            </Button>
          </Stack>
          <Stack>
            {login && (
              <Tooltip title="Create post" arrow placement="right">
                <Fab
                  color="primary"
                  onClick={() => {
                    handlOpen();
                  }}
                >
                  <Add />
                </Fab>
              </Tooltip>
            )}
            <Newpost />
            <Snackbar open={uploaded} autoHideDuration={6000}>
              <Alert severity="success" color="success" onClose={() => { }} variant='filled'>
                Uploaded successfully
              </Alert>
            </Snackbar>
          </Stack>
        </Stack>
      </Toolbar>
    </section>
  );
};

export default Sidebar;
