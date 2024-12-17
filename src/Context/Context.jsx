import { createContext, useState } from "react";

export const Context = createContext();

const ContextProvider = (props) => {
    const [dark, setDark] = useState(false);
    const [profile, setProfile] = useState([1, 2, 3]);
    const [loading, setLoading] = useState(false);
    const [avatars, setAvatars] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    const [posts, setPosts] = useState([])
    const [login, setLogin] = useState(true);
    const [openDialogue, setOpenDialogue] = useState(false)

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
        setOpenDialogue
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider