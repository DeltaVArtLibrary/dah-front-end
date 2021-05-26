import Login from './auth/Login';
import Register from './auth/Register';
import { useState } from 'react';
import { useAuth } from '../Context/auth';
import Modal from 'react-bootstrap/Modal';


export default function NavLogin(){
  const [showForm, setShowForm] = useState();

  const { user, logout } = useAuth();

  if (user) {
      function handleLogout() {
          logout();
          hideModal();
      }

      return (
          <button className="logout" onClick={handleLogout}>Log Out</button>
      )
  }

  function showLogin() {
    setShowForm("Login");
  }

  function hideModal() {
    setShowForm(null);
  }

  return (
    <>
      <button onClick={showLogin}>Login</button>
      <Modal show = {showForm} onHide = {hideModal}>
        
        <Modal.Header closeButton>
          <Modal.Title>
            Welcome
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {showForm === 'Login' && <Login />}
          {showForm === 'Register' && <Register />}
        </Modal.Body>
      </Modal>

    </>
  )
}