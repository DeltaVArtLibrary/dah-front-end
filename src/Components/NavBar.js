import { NavLink } from 'react-router-dom';
import NavLogin from './NavLogin';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'


export default function NavBar(){


  return (
      <>

        <Navbar variant="dark" bg="dark">
          <Nav className="mr-auto">
            <NavLink className="nav-link" to="/Art">Home</NavLink>

            <NavLink className="nav-link" to="/CreateArt">Create Art</NavLink>

            <NavLink className="nav-link" to="/Collections">Collections</NavLink>            

            <NavDropdown title="Profile" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Profile/1">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/Profile/2">Profile 2</NavDropdown.Item>
              <NavDropdown.Item href="/Profile/3">Profile 3</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="disabled">Create New Profile</NavDropdown.Item>
            </NavDropdown>

            
          </Nav>
          <NavLogin/>
        </Navbar>
      </>
      
    )
  }