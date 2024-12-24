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
    newPost,
    setNewPost,
    handleChange,
    postTitle,
    setPostTitle,
    PostSubTitle,
    setPostSubtitle,
    postDescription,
    setPostDescription,
    posts,
    setPosts
  } = useContext(Context);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [discardPost, setDiscardPost] = useState(false);
  const [alert, setAlert] = useState(false);
  const [isPending, setTransition] = useTransition();

  const VisuallyHidenInput = styled("input")({
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpace: "nowrap",
    width: 1,
  });

  const handlePost = async () => {
     setTransition(() => {
      if (newPost !== "" && postTitle !== "" && postDescription !== "" && postSubtitle !== ""){
        console.log("Post created");
        setPosts([...posts, {newPost, postTitle, postSubtitle, postDescription}]);
        handleClose();
      } else {
        setAlert(true);
      }
    });
  };

  const handleClose = () => {
    setDialogOpen(false);
  };

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
            <Dialog
              fullWidth
              maxWidth="sm"
              open={dialogOpen}
              component="form"
              onClose={() => {
                handleClose();
              }}
            >
              <DialogActions sx={{ padding: "0" }}>
                <IconButton
                  disableRipple
                  onClick={() => {
                    setDiscardPost(true);
                  }}
                >
                  <Close />
                </IconButton>
                {/* Discard post dialog */}
                <Dialog open={discardPost} maxWidth="xl">
                  <DialogContent>
                    <Typography fontWeight={600} textAlign="center">
                      Discard post ?
                    </Typography>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      color="error"
                      fullWidth
                      onClick={() => {
                        setNewPost("");
                        setDiscardPost(false);
                        setAlert(false);
                        handleClose();
                      }}
                    >
                      Discard
                    </Button>
                    <Button
                      color="success"
                      fullWidth
                      onClick={() => {
                        setDiscardPost(false);
                      }}
                    >
                      Cancel
                    </Button>
                  </DialogActions>
                </Dialog>
              </DialogActions>
              <DialogTitle textAlign="center" fontWeight={600}>
                Create post
              </DialogTitle>
              <DialogContent>
                <Stack direction="row" spacing={2} alignItems="center">
                  <Avatar src="https://lh3.googleusercontent.com/a/ACg8ocLxX3JkRQ7iWSxTVMJLFswL-GHDuf92403Q6_apGXmexnVXVZg=s360-c-no" />{" "}
                  <Typography>Gourav Paliwal</Typography>
                </Stack>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="start"
                  sx={{ marginTop: 2 }}
                >
                  <Box component={"div"} sx={{ width: "60%", height: "100%" }}>
                    {newPost !== "" ? (
                      <img src={newPost} width={"100%"} height={"100%"} />
                    ) : (
                      <Box
                        component={"div"}
                        sx={{
                          width: "100%",
                          height: "270px",
                          border: "1px dashed",
                          borderRadius: "5px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          textAlign="center"
                          fontWeight={600}
                          color="text.secondary"
                        >
                          Upload a photo
                        </Typography>
                      </Box>
                    )}
                  </Box>
                  <Stack
                    direction="column"
                    spacing={2}
                    alignItems="start"
                    width={"100%"}
                  >
                    <TextField
                      color="secondary"
                      id="outlined-multiline-static"
                      multiline
                      rows={1}
                      label="Title"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      color="secondary"
                      id="outlined-multiline-static"
                      multiline
                      label="subtitle"
                      rows={1}
                      variant="outlined"
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      color="secondary"
                      id="outlined-multiline-static"
                      multiline
                      label="Description"
                      rows={4}
                      variant="filled"
                      fullWidth
                      margin="normal"
                    />
                  </Stack>
                </Stack>
              </DialogContent>
              {alert && (
                <Alert severity="warning" sx={{ margin: 1 }} color="warning">
                  Please add a Photo or a Description
                </Alert>
              )}
              <DialogActions sx={{ justifyContent: "start" }}>
                <IconButton color="secondary">
                  <EmojiEmotions />
                </IconButton>
                <IconButton
                  sx={{ color: "primary.light" }}
                  role={undefined}
                  component="label"
                >
                  <Photo />
                  <VisuallyHidenInput
                    type="file"
                    onChange={(event) => {
                      setNewPost(handleChange(event));
                    }}
                  />
                </IconButton>
                <IconButton color="success">
                  <Videocam />
                </IconButton>
                <IconButton sx={{ color: "error.light" }}>
                  <PersonAdd />
                </IconButton>
              </DialogActions>
              <DialogActions>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ marginBottom: 3 }}
                  onClick={() => {
                    handlePost();
                  }}
                  disabled={isPending}
                >
                  {isPending ? "Posting..." : "Post"}
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
