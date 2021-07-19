import React, { createContext, useState, useEffect } from 'react'
import firebase, { provider } from '../../Firebase';

// 1. Create a "Context" - Our information/store/context
export const UserContext = createContext({});

const UserProvider = props => {
    const [user, setUser] = useState(null) 

    const signIn = () => {
        firebase.auth().signInWithRedirect(provider);
    }   

    const signOut = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }

    const getUser = () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
        })
    }

    useEffect(() => {
        getUser();
    }, []);

// 3. Provide some actual data/information
    const contextData = {
        user,
        signIn,
        signOut
    };
    // 2. Our context needs to "Provide" data
    return (
        <UserContext.Provider value={contextData}>{props.children}</UserContext.Provider>
    )
}
export default UserProvider
