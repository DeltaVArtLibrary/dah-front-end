import { NavLink } from 'react-router-dom';
import NavLogin from './NavLogin';
//import Navbar from 'react-bootstrap/Navbar'


export default function NavBar(){
  return (
    <>
    <ul>
      <li><NavLink to="/" >Home</NavLink></li>
      <li><NavLink to="/Art">Art</NavLink></li>
      <li><NavLink to="/CreateArt">Create Art</NavLink></li>
      <li><NavLink to="/Collections">Collections</NavLink></li>
      <li><NavLink to="/Profile">Profile</NavLink></li>
      <li><NavLogin/></li>
    </ul>
    </>
  )
}
