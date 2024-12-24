import { useGSAP } from "@gsap/react";
import {
  DarkMode,
  LightMode,
  Logout,
  Mail,
  Message,
  Notifications,
  RingVolume,
  Search,
} from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Backdrop,
  Badge,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogTitle,
  Divider,
  IconButton,
  InputLabel,
  Menu,
  MenuItem,
  OutlinedInput,
  Stack,
  styled,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import { grey, red } from "@mui/material/colors";
import React, { useContext, useRef, useState } from "react";
import gsap from "gsap";
import { Context } from "../../../Context/Context";

const Navbar = () => {
  const {
    login,
    setLogin,
    openDialogue,
    setOpenDialogue,
    isLogout,
    setIsLogout,
    setDark,
    dark,
  } = useContext(Context);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const [searchBarWidth, setSearchBarWidth] = useState("50%");
  const [UploadProfilePic, setUploadProfilePic] = useState(
    ""
  );
  const navright = useRef();
  const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
  });

  const handleChange = async (event) => {
    await setUploadProfilePic(URL.createObjectURL(event.target.files[0]));
    handleClose()
  };

  const onLogout = async () => {
    setIsLogout(true);
    await setLogin(false);
    setIsLogout(false);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOnCloseDialogue = () => setOpenDialogue(false);

  useGSAP(() => {
    gsap.to(".nav-rightside", {
      width: searchBarWidth,
      duration: 0.5,
      ease: "power4.out",
    });
  }, [searchBarWidth]);

  useGSAP(() => {
    gsap.from(".badge", {
      stagger: 0.08,
      scale: 0,
      duration: 1,
      ease: "elastic.inOut",
    });
  });

  return (
    <AppBar color="primary" position="relative">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography textTransform="uppercase" fontSize={20}>
          Example Dev
        </Typography>
        <Stack flexDirection="row" width={"50%"} justifyContent="end">
          {login ? (
            <Stack
              flexDirection={"row"}
              justifyContent="end"
              className="nav-rightside"
            >
              <OutlinedInput
                onFocus={() => {
                  setSearchBarWidth("100%");
                }}
                onBlur={() => {
                  setSearchBarWidth("50%");
                }}
                startAdornment={
                  <startAdornment>
                    <IconButton edge="start">
                      <Search />
                    </IconButton>
                  </startAdornment>
                }
                placeholder="Search"
                sx={{
                  backgroundColor: dark ? "dark" : "white",
                  borderRadius: "10px",
                  width: "40%",
                  border: "1.5px solid",
                  borderColor: dark ? "primary.main" : "black",
                }}
              />
              <Stack
                direction="row"
                spacing={1.5}
                sx={{ alignItems: "center" }}
              >
                <IconButton>
                  <Badge badgeContent={3} color="warning" className="badge">
                    <Mail sx={{ color: "white" }} />
                  </Badge>
                </IconButton>
                <IconButton>
                  <Badge badgeContent={2} color="warning" className="badge">
                    <Notifications sx={{ color: "white" }} />
                  </Badge>
                </IconButton>
                <IconButton disableRipple onClick={handleClick}>
                  <Avatar
                    sx={{ height: 40, width: 40, objectFit: "cover" }}
                    src={UploadProfilePic}
                  />
                </IconButton>
              </Stack>
            </Stack>
          ) : (
            <div>
              <IconButton
                color="inherit"
                onClick={() => {
                  setDark(!dark);
                }}
              >
                {dark ? <LightMode /> : <DarkMode />}
              </IconButton>
              <IconButton>
                <Avatar />
              </IconButton>
            </div>
          )}
        </Stack>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          // onBlur={handleClose}
          slotProps={{
            paper: {
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&::before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem component="label">
            <Avatar src="https://lh3.googleusercontent.com/a/ACg8ocLxX3JkRQ7iWSxTVMJLFswL-GHDuf92403Q6_apGXmexnVXVZg=s360-c-no" />{" "}
            Upload profile pic
            <VisuallyHiddenInput
              type="file"
              id="upload-profile-pic"
              multiple
              onChange={handleChange}
            />
          </MenuItem>
          <MenuItem>
            <Avatar /> My account
          </MenuItem>
          <Divider
            sx={{ backgroundColor: grey[500] }}
            variant="middle"
            textAlign="center"
          />
          <MenuItem
            sx={{ gap: 1.5 }}
            onClick={() => {
              setOpenDialogue(true);
            }}
          >
            <Logout />
            Logout
          </MenuItem>
        </Menu>
        <Dialog
          open={openDialogue}
          maxWidth="xs"
          fullWidth
          onClose={handleOnCloseDialogue}
        >
          <DialogTitle fontWeight={600} textAlign="center">
            Did you want to Logout ?
          </DialogTitle>
          <DialogActions
            sx={{ display: "flex", justifyContent: "start" }}
            onClick={handleOnCloseDialogue}
          >
            <Button color="info" fullWidth onClick={onLogout}>
              Logout
            </Button>
            <Button color="info" fullWidth>
              cancle
            </Button>
          </DialogActions>
        </Dialog>
        <Backdrop
          sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
          open={isLogout}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
