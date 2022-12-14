export interface Iservices {
  createUserId: number
  description: string
  getUserId: number
  id: number
  typeUser: string
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

export interface IModalPosterProps {
  setReload: React.Dispatch<React.SetStateAction<boolean>>
  reload: boolean
}
