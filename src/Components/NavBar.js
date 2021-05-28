import { NavLink, Link } from 'react-router-dom';
import NavLogin from './NavLogin';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useProfiles } from '../Context/profiles';

export default function NavBar(){

  const { data : profiles } = useProfiles();

  return (
      <>
        <Navbar variant="dark" bg="dark">
          <Nav className="mr-auto">
            <NavLink className="nav-link" to="/Art" style={{fontFamily: 'Lobster Two', fontSize:55}}>DAH</NavLink>

            <NavLink className="nav-link" to="/CreateArt">Create Art</NavLink>

            <NavLink className="nav-link" to="/Collections">Collections</NavLink>            

            {profiles && <NavDropdown title="Profile" id="basic-nav-dropdown">
              {profiles.map(profile => (
                <Link className="dropdown-item" key={profile.id} to={`/Profile/${profile.id}`}>{profile.displayName}</Link>
              ))}
              <NavDropdown.Divider />
              <NavDropdown.Item className="disabled">Create New Profile</NavDropdown.Item>
            </NavDropdown>}         
          </Nav>
          <NavLogin/>
        </Navbar>
      </>      
    )
  }