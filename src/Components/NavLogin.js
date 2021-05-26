import Login from './auth/Login';
import Register from './auth/Register';
import { useState } from 'react';



export default function NavLogin(){
  const [showForm, setShowForm] = useState();

  return (
    <>
      <button>Login</button>
      <Login />
      <Register />
    </>
  )
}