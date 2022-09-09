import { createContext, useEffect, useState } from "react"
import api from "../../services/api"
import { IUserContext, IUserProps } from "./User.interfaces"

export const UserContext = createContext<IUserContext>({} as IUserContext)

const UserProvider = ({ children }: IUserProps) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState({})
  const userId = localStorage.getItem("@RCTL: UserId")

  useEffect(() => {
    userId &&
      api.get(`/users/${userId}`).then(({ data }) => {
        setCurrentUser(data)
      })
  }, [userId, modalOpen])

  return (
    <UserContext.Provider
      value={{
        currentUser,
        modalOpen,
        setModalOpen,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
