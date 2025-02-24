import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios'; // Assuming you're using axios for API requests

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);      // Store user in state (not localStorage)
  const [loading, setLoading] = useState(true); // For showing a loading state while checking authentication
  const [error, setError] = useState(null);     // Error handling
  const [userExistence, setUserExistence] = useState(false);
  // Verify token and fetch user details from the server
  const verifyTokenAndFetchUser = async (token) => {
    try {
      const response = await axios.post('/api/user/verify-user', {}, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        // Successful fetch

        setUser(response.data);
        setError(null);
        setLoading(false);
      } else {
        console.error('Error fetching user data: ', err);
      }

      // Clear any errors
    } catch (err) {
      console.error('Error fetching user data:', err);
      setError('Failed to authenticate user.');
      setUser(null);           // Clear the user data on failure
      logout();                // Clear token if authentication fails
    }
  };



//   const logVisitorsAndCheckuser = async () => {

//     // logging vistors (To add = Check user function (later developement))

//     try {
//       const url = '/api/visitors/register-visitors';
//       const response = await axios.get(url);
//       if (response.status === 200) {
//         // console.log(response.data)

//         setUserExistence(response.data?.userExists)
//       }
//     }
//     catch (error) {
//       console.error(error);
//     }


//   }



  // On app load, check for token and fetch user if token is valid
  useEffect(() => {
    const token = localStorage.getItem('jwtToken'); // Only store token in localStorage
    if (token) {
      verifyTokenAndFetchUser(token); // Verify token and fetch user details
    } else {
    //   logVisitorsAndCheckuser();
      setLoading(true); // No token means no user, stop loading
    }


  }, []);

  // Login function to store token and fetch user data
  const login = async (token, user) => {
    localStorage.setItem('jwtToken', token); // Store token securely in localStorage
    // await verifyTokenAndFetchUser(token); // Fetch user data with the token
    setLoading(false);
    setUser(user);
  };

  // Logout function to clear the token and reset user
  const logout = () => {
    setUser(null);                        // Clear user data from state
    localStorage.removeItem('jwtToken');     // Clear token from localStorage
    setLoading(false);                    // Stop any loading state
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading, error, userExistence }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook to use AuthContext in components
export const useAuth = () => {
  return useContext(AuthContext);
};
