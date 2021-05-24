import { NavLink } from 'react-router-dom';


export default function NavBar(){
  return (
    <>
    <ul>
      <li><NavLink to="/" >Home</NavLink></li>
      <li><NavLink to="/Art">Art</NavLink></li>
      <li><NavLink to="/Collections">Collections</NavLink></li>
      <li><NavLink to="/Profile">Profile</NavLink></li>
      <li><NavLink to="/Login">Login</NavLink></li>
    </ul>
    </>
  )
}
