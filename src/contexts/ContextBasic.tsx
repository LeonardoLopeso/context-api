import React, { createContext } from "react";

type ContextType = {
    name: string;
    age: number;
}

interface IReactFC {
    children: React.ReactNode
}

const initialState = {
    name: 'João',
    age: 90
}

export const ContextBasic = createContext<ContextType>(initialState);

export const ContextProvider = ({ children }: IReactFC) => {
    return (
        <ContextBasic.Provider value={initialState}>
            {children}
        </ContextBasic.Provider>
    )
}