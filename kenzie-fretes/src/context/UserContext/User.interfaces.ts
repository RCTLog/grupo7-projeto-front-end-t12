import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IUserProps {
    children: ReactNode;
}

export interface IUserContext {
    currentUser: any,
    modalOpen: boolean,
    setModalOpen: Dispatch<SetStateAction<boolean>>,
}