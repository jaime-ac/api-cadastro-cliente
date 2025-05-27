import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {

    return(
        <GlobalContext.Provider>
            {children}
        </GlobalContext.Provider>
    )
}
