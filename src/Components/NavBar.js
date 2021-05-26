import { NavLink } from 'react-router-dom';
//import NavLogin from './NavLogin';
import { Nav, Navbar } from 'react-bootstrap'


export default function NavBar(){


  return (
      <>
        <Navbar class="navbar navbar-expand-sm navbar-dark bg-dark">
          <Nav className="mr-auto" variant="tabs">
          
          <Nav.Item>
            <NavLink to="/">Home</NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink to="/Art">Art</NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink to="/CreateArt">Create Art</NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink to="/Collections">Collections</NavLink>
          </Nav.Item>

          <Nav.Item>
            <NavLink to="/Profile">Profile</NavLink>
          </Nav.Item>
          
          <Nav.Item>
            <NavLink to="/NavLogin">Login</NavLink>
          </Nav.Item>
            
          </Nav>
        </Navbar>
      </>
      
    )
  }
