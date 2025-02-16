import React, { useState } from 'react'
import { createContext } from 'react'
import { useContext } from 'react'

export const SideBarStateContext = createContext();

export function SideBarStateContextProvider({ children }) {
    const [sideBarState, setSideBarState] = useState('');
    return (
        <SideBarStateContext.Provider value={{ sideBarState, setSideBarState }}>
            {children}
        </SideBarStateContext.Provider>
    )
}

export function useSideBarState() {
    return useContext(SideBarStateContext);
}
