import Login from './auth/Login';
import Register from './auth/Register';
import { useState } from 'react';
import { useAuth } from '../Context/auth';



export default function NavLogin(){
  const [showForm, setShowForm] = useState();

  const { user, logout } = useAuth();

  if (user) {
      function handleLogout() {
          logout();
      }

      return (
          <button className="logout" onClick={handleLogout}>Log Out</button>
      )
  }

  return (
    <>
      <button>Login</button>
      <Login />
      <Register />
    </>
  )
}