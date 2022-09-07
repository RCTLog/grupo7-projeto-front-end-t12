import { ReactNode } from "react";

export interface IUserProps {
    children: ReactNode;
}

export interface IUserContext {
    currentUser: any
}