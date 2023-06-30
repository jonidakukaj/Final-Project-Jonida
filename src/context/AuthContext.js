import { createContext, useContext, useEffect, useState } from 'react';

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

// import JSON data from data.json
import data from '../data.json';

import { auth } from '../firebase';

const UserContext = createContext();

// define useContext content (firebase auth)
export const AuthContextProvider = ({ children }) => {
  // store JSON content in variable 
  const posts = data.posts;

  // user who is actually logged in
  const [user, setUser] = useState({});

  // create new user in firebase
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // log in user in firebase
   const signIn = (email, password) =>  {
    return signInWithEmailAndPassword(auth, email, password)
   }

   // log in user from firebase
  const logout = () => {
      return signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <UserContext.Provider value={{ createUser, user, logout, signIn ,posts}}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
