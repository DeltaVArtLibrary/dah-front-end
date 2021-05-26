import Login from './auth/Login';
import Register from './auth/Register';
import { useState } from 'react';
import { useAuth } from '../Context/auth';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton'


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

  function showRegister() {
    setShowForm("Register");
  }

  function hideModal() {
    setShowForm(null);
  }

  return (
    <>
      <Button variant="primary" onClick={showLogin}>Login</Button>
      <Modal show = {showForm} onHide = {hideModal}>
        
        <Modal.Header> 
          <Modal.Title>
            Welcome 
          </Modal.Title>
          <CloseButton onClick= {hideModal}/>  
        </Modal.Header>
        <Modal.Body>
          {showForm === 'Login' && <Login />}
          {showForm === 'Register' && <Register />}
        </Modal.Body>
        <Modal.Footer>
          Don't have an account? <Button variant="link" onClick={showRegister}>Register here</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}