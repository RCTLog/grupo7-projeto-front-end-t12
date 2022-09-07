import { createContext, useState } from "react";
import api from "../../services/api";
import { IUserProps } from "./User.interfaces";

const UserContext = createContext({})

const UserProvider = async ({ children }: IUserProps) => {
    const [currentUser, setCurrentUser] = useState({});
    const userId = localStorage.getItem("@RCTL: userId");

    const user = await api.get(`users/${userId}`)
    setCurrentUser(user)

    return (
        <UserContext.Provider 
            value={{
                
            }}
        >
            {children}

        </UserContext.Provider>
    )
}

export default UserProvider;