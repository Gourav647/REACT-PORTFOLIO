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
  Avatar,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Fab,
  IconButton,
  Stack,
  Switch,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Context } from "../../../Context/Context";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import { Link } from "react-router-dom";

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
  const { dark, setDark, login } = useContext(Context);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleClose = () => {
    setDialogOpen(false)
  }

  const handlOpen = () => {
    setDialogOpen(true)
  }

  useGSAP(() => {
    gsap.from(".l-btn", {
      x: -300,
      stagger: .025,
      duration: 1.3,
      delay: .5,
      ease: "circ.out"
    })
  })

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
                <Link
                  to={ele.link}
                  style={{ textDecoration: "none" }}
                >
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
              {dark ?
                <DarkMode
                  sx={{ perspective: 1000, transform: "rotateY(180deg)" }}
                />
                :
                <LightMode />
              }
              <Switch checked={dark} onClick={() => setDark(!dark)} color='secondary' />
            </Button>
          </Stack>
          <Stack>
            {login
              &&
              <Fab
                color="primary"
                onClick={() => {
                  handlOpen()
                }}
              >
                <Add />
              </Fab>
            }
            <Dialog
              fullWidth
              maxWidth="sm"
              open={dialogOpen}
              component="form"
              onClose={() => {
                handleClose()
              }}
            >
              <DialogActions sx={{ padding: "0" }}>
                <IconButton disableRipple onClick={handleClose}>
                  <Close />
                </IconButton>
              </DialogActions>
              <DialogTitle textAlign="center" fontWeight={600}>
                Create post
              </DialogTitle>
              <DialogContent>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar src="https://lh3.googleusercontent.com/a/ACg8ocLxX3JkRQ7iWSxTVMJLFswL-GHDuf92403Q6_apGXmexnVXVZg=s360-c-no" />{" "}
                  <Typography>Gourav Paliwal</Typography>
                </Stack>
                <TextField
                  color="white"
                  id="outlined-multiline-static"
                  multiline
                  rows={3}
                  variant="standard"
                  fullWidth
                  margin="normal"
                />
              </DialogContent>
              <DialogActions sx={{ justifyContent: "start" }}>
                <IconButton color="secondary">
                  <EmojiEmotions />
                </IconButton>
                <IconButton sx={{ color: "primary.light" }}>
                  <Photo />
                </IconButton>
                <IconButton color="success">
                  <Videocam />
                </IconButton>
                <IconButton sx={{ color: "warning.light" }}>
                  <PersonAdd />
                </IconButton>
              </DialogActions>
              <DialogActions>
                <Button variant="contained" color="primary" fullWidth sx={{ marginBottom: 3 }}
                  onClick={() => {
                    handleClose()
                  }}>
                  Post
                </Button>
              </DialogActions>
            </Dialog>
          </Stack>
        </Stack>
      </Toolbar>
    </section>
  );
};

export default Sidebar;
