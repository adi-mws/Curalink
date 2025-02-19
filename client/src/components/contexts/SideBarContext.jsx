import { createContext, useState, useContext } from 'react';

// Create the context
const SideBarContext = createContext();

// Custom hook to use the sidebar context
export const useSideBar = () => {
    const context = useContext(SideBarContext);
    if (!context) {
        throw new Error('useSideBar must be used within a SideBarProvider');
    }
    return context;
};

// Provider component
export const SideBarProvider = ({ children }) => {
    const [showSidebar, setShowSidebar] = useState(false);

    const value = {
        showSidebar,
        setShowSidebar
    };

    return (
        <SideBarContext.Provider value={value}>
            {children}
        </SideBarContext.Provider>
    );
};
