import React, { useContext } from 'react'
import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    Typography,
    Button,
    Stack,
    Avatar,
    Box,
    TextField,
    Alert,
    styled
} from '@mui/material';
import {
    Close,
    EmojiEmotions,
    Photo,
    Videocam,
    PersonAdd
} from '@mui/icons-material';
import { Context } from '../../../Context/Context';

const Newpost = () => {
    const {
        newPost,
        setNewPost,
        dialogOpen,
        setDiscardPost,
        discardPost,
        setAlert,
        alert,
        handleChange,
        setPostTitle,
        setPostSubtitle,
        setPostDescription,
        setTransition,
        setDialogOpen,
        postTitle,
        postSubTitle,
        postDescription,
        posts,
        setPosts,
        UploadProfilePic,
        isPending,
        setUploaded
    } = useContext(Context)
    const VisuallyHidenInput = styled("input")({
        border: 0,
        clip: "rect(0 0 0 0)",
        height: 1,
        margin: -1,
        overflow: "hidden",
        padding: 0,
        position: "absolute",
        width: 1,
    });

    const handleClose = () => {
        setDialogOpen(false);
    };

    const handlePost = async () => {
        setTransition(() => {
            if (newPost !== "" && postTitle !== "") {
                setAlert(false);
                setPosts([...posts, { newPost, postTitle, postSubTitle, postDescription }]);
                console.log(posts);
                setPostTitle("");
                handleClose();
                setUploaded(true);
                setNewPost("");
                setPostDescription("");
                setPostSubtitle("");
            } else {
                setAlert(true);
            }
        });
    };
    return (
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
                    <Avatar src={UploadProfilePic} />{" "}
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
                            <img src={newPost} width={"100%"} height={"100%"} style={{ userSelect: "none" }} />
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
                            onChange={(e) => { setPostTitle(e.target.value) }}
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
                            onChange={(e) => { setPostSubtitle(e.target.value) }}
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
                            onChange={(e) => { setPostDescription(e.target.value) }}
                        />
                    </Stack>
                </Stack>
            </DialogContent>
            {alert ?
                <Alert severity="warning" sx={{ margin: 1 }} color="warning">
                    Please add a Photo or a Description
                </Alert>
                : null
            }
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
    )
}

export default Newpost
