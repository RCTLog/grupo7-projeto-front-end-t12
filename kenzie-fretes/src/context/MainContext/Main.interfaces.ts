import { ReactNode } from "react"

export interface IMainProvider {
  children: ReactNode
}

export interface IMainContext {
  Logout: () => void
}