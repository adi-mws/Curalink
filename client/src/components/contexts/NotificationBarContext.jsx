import React, { useState } from 'react'
import { createContext } from 'react'
import { useContext } from 'react'

export const NotificationBarStateContext = createContext();

export function NotificationBarStateContextProvider({ children }) {
    const [showNotificationBar, setShowNotificationBar] = useState(false);
    return (
        <NotificationBarStateContext.Provider value={{ showNotificationBar, setShowNotificationBar }}>
            {children}
        </NotificationBarStateContext.Provider>
    )
}

export function useNotificationBarState() {
    return useContext(NotificationBarStateContext);
}
