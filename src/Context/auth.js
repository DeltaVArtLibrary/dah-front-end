import { createContext, useContext, useState, useEffect } from 'react';
import jwt from 'jsonwebtoken';
import cookie from 'react-cookies';

const cookieName = 'auth';

// api key 
const usersAPI = 'https://digitalarthub.azurewebsites.net/api/Users'; //put api key here 

export const AuthContext = createContext();

export function useAuth() {
  const auth = useContext(AuthContext);
  if (!auth) throw new Error('You forgot the AuthProvider');
  return auth;
}

export function AuthProvider(props) {
  const [state, setState] = useState({
    user: null,
    register, 
    login,
    logout,
  });

  useEffect(() => {
    console.log(`Checking for ${cookieName} cookie`);
    const cookieToken = cookie.load(cookieName);
    setUser({token : cookieToken});
  }, []);

  async function register(email, username, password) {
    console.log({email, username, password});

    const result = await fetch(`${usersAPI}/Register`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, username, password }),
    });

    // redundant? login() does this
    // const resultBody = await result.json();

    if (result.ok) {
      // if we successfully register, pass the username and password onto the login function
      login(username, password);
      // same as with line 34
      // return setUser(resultBody);
    }
    // not needed
    //return logout();
  }

  async function login(username, password) {
    console.log({username, password});

    const result = await fetch(`${usersAPI}/Login`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password }),
    });

    const resultBody = await result.json();
    

    if (result.ok) {
      return setUser(resultBody);
    }

    return logout();
  }

  function logout() {
    setUser(null);
    cookie.remove(cookieName, { path: '/' });
  }

  function setUser(user) {
    user = processToken(user);
    console.log(user);

    setState(prevState => ({
      ...prevState,
      user,
    }));
    return user;
  }

  return (
    <AuthContext.Provider value={state}>
      {props.children}
    </AuthContext.Provider>
  );
}

function processToken(user) {
  if (!user) 
    return null;

  try {
    const payload = jwt.decode(user.token);
    if (payload){
      // Token looks legit, so let's save it
      cookie.save(cookieName, user.token, { path: '/' });
      console.log('token payload', payload);
      user.permissions = payload.permissions || [];
      
      return user;
    }

    return null;
  }
  catch (e) {
    console.warn(e);
    return null;
  }
}