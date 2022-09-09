import { Dispatch, SetStateAction } from "react"

export interface ISelectStatesProps {
  setState?: Dispatch<SetStateAction<string>>
  Label: string
  name: string
}
