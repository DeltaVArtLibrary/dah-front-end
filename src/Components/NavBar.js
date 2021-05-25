import { NavLink } from 'react-router-dom';
import Login from './auth/Login';
import Register from './auth/Register';


export default function NavBar(){
  return (
    <>
    <ul>
      <li><NavLink to="/" >Home</NavLink></li>
      <Register/>
      <li><NavLink to="/Art">Art</NavLink></li>
      <li><NavLink to="/Collections">Collections</NavLink></li>
      <li><NavLink to="/Profile">Profile</NavLink></li>
      {/* <li><NavLink to="/Login">Login</NavLink></li> change to modal*/} 
      <Login/>
    </ul>
    </>
  )
}
