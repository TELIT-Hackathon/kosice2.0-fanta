import React, { useState, useEffect, createContext } from "react";

import { auth } from "./firebase";


const FirebaseAuthContext = createContext(undefined);

const FirebaseAuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const value = { user };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(setUser);
        return unsubscribe;
    }, []);

    return (
        <FirebaseAuthContext.Provider value={value}>
            {children}
        </FirebaseAuthContext.Provider>
    );
};

const useFirebaseAuth = () => {
    const context = React.useContext(FirebaseAuthContext);
    if (context === undefined) {
        throw new Error(
            "useFirebaseAuth must be used within a FirebaseAuthProvider"
        );
    }
    return context.user;
}

export { FirebaseAuthProvider, useFirebaseAuth };
