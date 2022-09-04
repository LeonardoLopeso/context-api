import { createContext, useReducer } from 'react'

import { UserType, userInicialState, userReducer } from '../reducers/userReducer';
import { reducerActionType } from '../types/reducerActionType';

type initialStateType = {
    user: UserType;
}

type ContextType = {
    state: initialStateType;
    dispatch: React.Dispatch<any>;
}

interface IReactFC {
    children: React.ReactNode
}

const initialState = {
    user: userInicialState
}

export const ContextProfissional = createContext<ContextType>({
    state: initialState,
    dispatch: () => null
});

const mainReducer = (state: initialStateType, action: reducerActionType) => ({
    user: userReducer(state.user, action)
});

export const ContextProvider = ({ children }: IReactFC) => {
    const [state, dispatch] = useReducer(mainReducer, initialState);

    return (
        <ContextProfissional.Provider value={{ state, dispatch }}>
            {children}
        </ContextProfissional.Provider>
    )
}