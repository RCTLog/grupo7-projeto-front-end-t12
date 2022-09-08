export interface IServices {
  createUserId: number
  description: string
  getUserId: number
  id: number
  contact: string
  typeUser: "Cliente" | "Motorista"
  destination: [
    {
      city: string
      state: string
    }
  ]
  origin: [
    {
      city: string
      state: string
    }
  ]
}

export interface IUserPostsProps {
  setReload: React.Dispatch<React.SetStateAction<boolean>>
  reload: boolean
  setModal: React.Dispatch<React.SetStateAction<any>>
  postId: number
  setPostId: React.Dispatch<React.SetStateAction<number>>
}
