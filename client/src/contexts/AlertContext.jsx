import React, { useState, createContext, useContext } from 'react';

export const AlertMessageContext = createContext();

export function AlertMessageContextProvider({ children }) {
  const [alerts, setAlerts] = useState([]); // array of { id, message, type }

  const showNotification = (message, type = 'info', ntype='alert', duration = 3000) => {
    const id = Date.now(); // unique identifier
    const newAlert = { id, message, type };

    setAlerts((prevAlerts) => {
      const updated = [...prevAlerts.slice(-3), newAlert]; // Keep only last 3 + new = max 4
      return updated;
    });

    // Auto-remove alert after duration
    setTimeout(() => {
      setAlerts((prevAlerts) => prevAlerts.filter((alert) => alert.id !== id));
    }, duration);
  };

  return (
    <AlertMessageContext.Provider value={{ alerts, showNotification }}>
      {children}
    </AlertMessageContext.Provider>
  );
}

export function useAlert() {
  return useContext(AlertMessageContext);
}
