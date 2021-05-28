import { useAuth } from '../../Context/auth';
import { Redirect } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

export default function Login() {
  const { user, login, logout } = useAuth();

  if (user) {
      function handleLogout() {
          logout();
      }

      return (
          <button className="logout" onClick={handleLogout}>Logout</button>
      )
  }

  const handleSubmit = async e => {
      e.preventDefault();

      const { target } = e;
      const { username, password } = target.elements;


      if (!await login(username.value, password.value)) {
          
          target.reset();
      } else {
          // redirct to the homepage
            Redirect('./Home');
      }
  };

  return (
      <form className="loginForm" onSubmit={handleSubmit}>
          <Form.Group controlId="username">
              <Form.Label>Username </Form.Label>
              <Form.Control type="text" name="Username" placeholder="User Name" required />
           </Form.Group>
           <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" required />
           </Form.Group>
           <Button type="submit" variant="danger" >Login</Button>          
    
      </form>
    );
}   