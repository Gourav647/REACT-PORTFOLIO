import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
    const [dark, setDark] = useState(false);
    const [profile, setProfile] = useState([1, 2, 3]);
    const [loading, setLoading] = useState(false);
    const [avatars, setAvatars] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [posts, setPosts] = useState([])
    const [login, setLogin] = useState(false);
    const [isLogout, setIsLogout] = useState(false)
    const [openDialogue, setOpenDialogue] = useState(false);
    const [newPost, setNewPost] = useState("");
    const [UploadProfilePic, setUploadProfilePic] = useState("https://lh3.googleusercontent.com/a/ACg8ocLxX3JkRQ7iWSxTVMJLFswL-GHDuf92403Q6_apGXmexnVXVZg=s360-c-no");

    const handleChange =  (event) => {
        const file = event.target.files[0];
        const imgUrl = URL.createObjectURL(file);
        
        // handleClose()
        return imgUrl
      };

    const contextValue = {
        dark,
        setDark,
        profile,
        setProfile,
        loading,
        setLoading,
        avatars,
        setAvatars,
        posts,
        setPosts,
        login,
        setLogin,
        openDialogue,
        setOpenDialogue,
        isLogout,
        setIsLogout,
        newPost,
        setNewPost,
        UploadProfilePic,
        setUploadProfilePic,
        handleChange
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider